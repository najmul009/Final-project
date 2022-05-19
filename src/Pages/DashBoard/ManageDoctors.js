import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Common/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const [confirmModal, setConfirmModal] = useState(null);
    const { isLoading, error, data: doctors, refetch } = useQuery('manageDoctors', () =>
        fetch(`http://localhost:5000/manageDoctors`,{
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
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
            <h1 className='text-center text-secondary text-2xl my-5'>Manage Doctors</h1>
            {fetchError}
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Profile</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors?.map((user, index) => <DoctorRow
                            key={index}
                            user={user}
                            index={index}
                            refetch={refetch}
                            setConfirmModal={setConfirmModal}
                            ></DoctorRow>)
                        }


                    </tbody>
                </table>
            </div>
            {confirmModal && <DeleteConfirmModal 
            confirmModal={confirmModal}
            refetch={refetch}
            setConfirmModal={setConfirmModal}
            ></DeleteConfirmModal>}
        </div>
    );
};

export default ManageDoctors;