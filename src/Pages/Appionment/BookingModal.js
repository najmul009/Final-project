import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {  toast } from 'react-toastify';


const BookingModal = ({ tretment, setTretment, date,refetch }) => {
    const [user] = useAuthState(auth);
    const {_id, name, slots } = tretment;
    const formatDate = format(date, 'PP')

    const handelSubmit=(event)=>{
        event.preventDefault()
        const serviceId = _id;
        const serviceName = name;
        const date=event.target.date.value;
        const slot=event.target.slot.value;
        const userName=event.target.name.value;
        const email=event.target.email.value;
        const phone=event.target.phone.value;

        const bookingData={serviceId,serviceName,date,slot,userName,email,phone}
        console.log(bookingData);

       fetch('http://localhost:5000/booking',{
           method: 'POST',
           headers:{
               'content-type': 'application/json'
           },
           body: JSON.stringify(bookingData)
       })
       .then(res=>res.json())
       .then(data=>{
           if(data.success){
               toast('Appionment Booked')
               refetch()
               setTretment(null);
           }
           else{
               toast.error('Alrady have an appionment '+ data.exists?.date +"  "+ data.exists?.slot )
           }
       })
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle text-center">
                <form onSubmit={handelSubmit} className="modal-box grid grid-cols-1 gap-4 justify-items-center">
                    <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-secondary font-bold text-xl">Booking For: {name}!</h3>
                    <input type="text" name='date' value={formatDate} disabled className="input input-bordered w-full max-w-xs" />
                    <select name='slot' className="select select-bordered w-full max-w-xs">
                        {
                            slots.map((slot,index)=> <option
                                 key={index} 
                                 value={slot}>{slot}</option>)
                        }
                        
                    </select>
                    <input type="text" name='name' disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                    <input type="email" name='email' disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                    <input type="number" name='phone' placeholder="phone" className="input input-bordered w-full max-w-xs" />
                    <input  type="submit" value="Submit" className="btn btn-accent w-full max-w-xs" />
                </form>
            </div>
        </div>
    );
};

export default BookingModal;