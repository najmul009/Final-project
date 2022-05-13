import React from 'react';
import Appoinment from './Appoinment';
import Banner from './Banner';
import Info from './Info';
import Reviews from './Reviews';
import Services from './Services';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Appoinment></Appoinment>   
            <Reviews></Reviews>
        </div>
    );
};

export default Home;