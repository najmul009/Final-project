import React from 'react';
import treatment from '../../assets/images/treatment.png'


const Servicebanner = () => {
    return (
        <div className="card lg:card-side bg-base-100  mt-36 lg:px-36 grid grid-cols-1 md:grid-cols-2 gap-10">
            <figure className=' text-center'><img className='rounded-lg w-96    ' src={treatment} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-4xl text-accent    ">Exceptional Dental Care, on Your Terms</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <div className="card-actions">
                    <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary ">GET STARTED</button>
                </div>
            </div>
        </div>
    );
};

export default Servicebanner;