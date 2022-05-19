import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Common/Loading';
import BookingCard from './BookingCard';
import BookingModal from './BookingModal';

const Booking = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [tretment, setTretment] = useState(null);
    const formatDate = format(date, 'PP')

    // useEffect( () =>{
    //     fetch(`http://localhost:5000/available?date=${formatDate}`)
    //     .then(res => res.json())
    //     .then(data => setServices(data))
    // },[formatDate]);

    const { isLoading, error, data: services, refetch } = useQuery(['available', formatDate], () =>
        fetch(`http://localhost:5000/available?date=${formatDate}`)
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
        <div className='py-20'>
            <h3 className='text-secondary text-center font-bold text-2xl mb-10'>Available Appointments on {format(date, 'PP')}</h3>

            {fetchError}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 lg:px-20'>
                {
                    services?.map(service => <BookingCard
                        key={service._id}
                        service={service}
                        setTretment={setTretment}
                    ></BookingCard>)
                }
            </div>
            {
                tretment && <BookingModal 
                date={date} 
                setTretment={setTretment} 
                tretment={tretment}
                refetch={refetch}
                ></BookingModal>
            }
        </div>
    );
};

export default Booking;