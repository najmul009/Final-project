import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingCard from './BookingCard';

const Booking = ({date}) => {
    const [services, setServices] = useState([])

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
                    ></BookingCard>)
                }
            </div>
        </div>
    );
};

export default Booking;