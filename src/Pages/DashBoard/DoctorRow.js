import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ index, user: doctor, refetch ,setConfirmModal}) => {
    const { name,specialty,img,email } = doctor;
    
    return (
        <tr class="hover">
            
            <td><strong>{index + 1}</strong></td>
            <td>
                <div class="avatar">
                    <div class="w-16 rounded">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td><strong>{name}</strong></td>
            <td>{specialty}</td>
            <td>
            <label onClick={()=>setConfirmModal(doctor)} for="delete-confirm-modal" class="btn modal-button btn-warning ">Delete</label>
                </td>
        </tr>
    );
};

export default DoctorRow;