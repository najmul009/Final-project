import React, { useState } from 'react';
import Footer from '../Common/Footer';
import AppionmentBanner from './AppionmentBanner';
import Booking from './Booking';


const Appionment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <AppionmentBanner date={date} setDate={setDate}></AppionmentBanner>
            <Booking date={date}></Booking>
            <Footer></Footer>
        </div>
    );
};

export default Appionment;