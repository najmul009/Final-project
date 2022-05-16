import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Common/Loading';

const MyAppionment = () => {
    const [user] = useAuthState(auth);
    const { isLoading, error, data, refetch } = useQuery(['mybookings'], () =>
        fetch(`http://localhost:5000/mybookings?email=${user.email}`)
            .then(res => res.json())
    );
    if (isLoading) {
        return <Loading></Loading>
    }
    let fetchError;
    if (error) {
        fetchError = <p className='text-red-500 text-5xl'><small>{error?.message}</small></p>
    }
    return (
        <div>
            <h1 className='text-center text-secondary text-2xl my-5'>My Appionments</h1>
            {fetchError}
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Slot</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((apn,index) =><tr class="hover">
                                <th>{index+1}</th>
                                <td>{apn.serviceName}</td>
                                <td>{apn.date}</td>
                                <td>{apn.slot}</td>
                            </tr> )
                        }
                       
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppionment;