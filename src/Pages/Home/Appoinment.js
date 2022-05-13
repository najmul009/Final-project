import React from 'react';
import appionment from '../../assets/images/appointment.png';
import doctor from '../../assets/images/doctor.png'

const Appoinment = () => {
    return (
        <div style={{background:`url(${appionment})`}} className="mt-60 flex justify-center items-center lg:px-20">
            <div className="text-center flex-1 hidden lg:block">
                <img className='mt-[-110px] ' src={doctor} alt="" />
            </div>
            <div className='flex-1  text-white lg:p-0 md:p-20 sm:p-10'>
            <h3 className='text-secondary font-bold text-xl mt-12'>Appointment</h3>
            <h2 className='text-4xl my-10'>Make an appointment Today</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <div class="card-actions mt-10">
                    <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary ">GET STARTED</button>
                </div>
            </div>
            
        </div>
    );
};

export default Appoinment;