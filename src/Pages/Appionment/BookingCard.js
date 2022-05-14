import React from 'react';

const BookingCard = ({ service,setTretment }) => {
    const { name, slots } = service;
    return (
        <div class="card  bg-base-100 shadow-xl ">
            <div class="card-body text-center">
                <h3 className='text-secondary font-bold text-xl'>{name}</h3>
                <p>{
                   slots.length > 0 ? slots[0] : <span className='text-red-500'>Not Slot Available</span> 
                   }
                </p>

                <p>
                    {slots.length} {slots.length>1?'Speces':'Spece'} Available
                </p>
                <div  class="text-center mt-5">
                    <label onClick={() => setTretment(service)} for="my-modal-6"  disabled={slots.length===0} class="btn  modal-button btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">Book Appionment</label >
                </div>
            </div>
        </div>
    );
};

export default BookingCard;