import React from 'react';
import appionment from '../../assets/images/appointment.png';


const Contact = () => {
    return (
        <div style={{background:`url(${appionment})`}} className="mt-60 text-center">
            <h3 className='text-secondary font-bold text-xl pt-12'>Contact US</h3>
            <h2 className='text-4xl text-white mb-10'>Stay connected with us</h2>
            <form action="">
                <input className='mt-4 p-4 rounded-lg w-80 md:w-96' type="email" name="email" id="" placeholder='Email Address' />
                <br />
                <input className='mt-4 p-4 rounded-lg w-80 md:w-96' type="text" name='subject' placeholder='Subject' />
                <br />
                <textarea className='mt-4 p-4 rounded-lg w-80 md:w-96' name="message" id="" cols="30" rows="5" placeholder='Your Message'></textarea>
            </form>
        </div>
    );
};

export default Contact;