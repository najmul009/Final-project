import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({confirmModal,refetch,setConfirmModal}) => {
    const {name,email} = confirmModal;
    const deleteDoctor = () => {
        console.log('kasklaks');
        fetch(`http://localhost:5000/manageDoctors/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to delete doctor');
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    setConfirmModal(null)
                    refetch();
                    toast.success(`Successfully delete `);
                }

            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure you want to delete {name}!</h3>
                    <p class="py-4">Deleted doctor data wile never recoverable.</p>
                    <div class="modal-action">
                    <button onClick={deleteDoctor} class="btn btn-warning">Delete</button>
                        <label for="delete-confirm-modal" class="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;