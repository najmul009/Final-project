import React from 'react';

const InfoCard = (props) => {
    const {bg,logo,heading,text}=props.data
    return (
        <div className={`card lg:card-side ${bg} text-white shadow-xl`}>
            <figure className='pl-5'><img src={logo} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{heading}</h2>
                <p>{text}</p>
                
            </div>
        </div>
    );
};

export default InfoCard;