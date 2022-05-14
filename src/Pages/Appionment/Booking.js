import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingCard from './BookingCard';
import BookingModal from './BookingModal';

const Booking = ({date}) => {
    const [services, setServices] = useState([]);
    const [tretment, setTretment] = useState(null)

    useEffect( () =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    })
    return (
        <div className='py-20'>
            <h3 className='text-secondary text-center font-bold text-2xl mb-10'>Available Appointments on {format(date, 'PP')}</h3>
            

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 lg:px-20'>
                {
                    services.map(service => <BookingCard
                    key={service._id}
                    service={service}
                    setTretment={setTretment}
                    ></BookingCard>)
                }
            </div>
            {
                // tretment && <BookingModal tretment={tretment}></BookingModal>
            }
        </div>
    );
};

export default Booking;