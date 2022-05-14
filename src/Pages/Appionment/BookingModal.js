import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ tretment, setTretment, date }) => {
    const { name, slots } = tretment;

    const handelSubmit=(event)=>{
        event.preventDefault()
        const date=event.target.date.value;
        const slot=event.target.slot.value;
        const name=event.target.name.value;
        const email=event.target.email.value;
        const phone=event.target.phone.value;

        const bookingData={date,slot,name,email,phone}
        console.log(bookingData);
        setTretment(null);
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle text-center">
                <form onSubmit={handelSubmit} class="modal-box grid grid-cols-1 gap-4 justify-items-center">
                    <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-secondary font-bold text-xl">Booking For: {name}!</h3>
                    <input type="text" name='date' value={format(date, 'PP')} disabled class="input input-bordered w-full max-w-xs" />
                    <select name='slot' class="select select-bordered w-full max-w-xs">
                        {
                            slots.map(slot=> <option value={slot}>{slot}</option>)
                        }
                        
                    </select>
                    <input type="text" name='name' placeholder="Full Name" class="input input-bordered w-full max-w-xs" />
                    <input type="email" name='email' placeholder="email" class="input input-bordered w-full max-w-xs" />
                    <input type="number" name='phone' placeholder="phone" class="input input-bordered w-full max-w-xs" />
                    <input  type="submit" value="Submit" class="btn btn-accent w-full max-w-xs" />
                </form>
            </div>
        </div>
    );
};

export default BookingModal;