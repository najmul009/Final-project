import React from 'react';
import Appoinment from './Appoinment';
import Banner from './Banner';
import Info from './Info';
import Reviews from './Reviews';
import Services from './Services';
import './Home.css'
import Contact from './Contact';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Appoinment></Appoinment>   
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;