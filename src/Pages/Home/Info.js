import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {

    const gradiant= "bg-gradient-to-r from-secondary to-primary "
    const accent = "bg-accent"
    const card1= {bg:gradiant,logo:clock,heading:"Opening Hours",text:"Click the button to see our shedule."}
    const card2= {bg:accent,logo:marker,heading:"Our Locations",text:"Click the button to checkout our location."}
    const card3= {bg:gradiant,logo:phone,heading:"Cantact US",text:"Click the button to contact US."}
    return (
        <div className='px-20 grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard data={card1}></InfoCard>
            <InfoCard data={card2}></InfoCard>
            <InfoCard data={card3}></InfoCard>
        </div>
    );
};

export default Info;