import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Common/Loading';
import UserRow from './UserRow';

const AllUsers = () => {
    const navigate = useNavigate()
    const { isLoading, error, data: users, refetch } = useQuery('allusers', () =>
        fetch(`http://localhost:5000/allusers`,{
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/login');
                    return;
                }
                return res.json()
            })
    );
    if(isLoading){
        return <Loading></Loading>
    }
    let fetchError;
    if(error){
        fetchError = <p className='text-red-500 text-5xl'><small>{error?.message}</small></p>
    }
    return (
        <div>
            <h1 className='text-center text-secondary text-2xl my-5'>All Users</h1>
            {fetchError}
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>User Email</th>
                            <th>User Role</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <UserRow
                            key={index}
                            user={user}
                            index={index}
                            refetch={refetch}
                            ></UserRow>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;