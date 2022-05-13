import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';

const Services = () => {
    const services =[
        {
            _id:1,
            img:fluoride,
            title: 'Fluoride Treatment',
            text:'The most common tretment fro teeth.We provide this treatment with best doctors' 
        },
        {
            _id:2,
            img:cavity,
            title: 'Cavity Filling',
            text:'The most common tretment fro teeth.We provide this treatment with best doctors' 
        },
        {
            _id:3,
            img:whitening,
            title: 'Teeth Whitening',
            text:'The most common tretment fro teeth.We provide this treatment with best doctors' 
        }
    ]
    return (
        <div>
            <div className="text-center mt-20">
                <h3 className='text-primary font-bold text-xl'>OUR SERVICES</h3>
                <h2 className='text-4xl'>Services We Provied</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
                {
                    services.map(service=> <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;