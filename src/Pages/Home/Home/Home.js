import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Exceptional from '../Exceptional/Exceptional';
import MakeAppoinment from '../MakeAppointment/MakeAppoinment';
import OurDetails from '../OurDetails/OurDetails';
import OurServices from '../OurServices/OurServices';
import PatientReview from '../PatientReview/PatientReview';

const Home = () => {
    return (
        <div className='mx-8'>
            <Banner></Banner>
            <OurDetails></OurDetails>
            <OurServices></OurServices>
            <Exceptional></Exceptional>
            <MakeAppoinment></MakeAppoinment>
            <PatientReview></PatientReview>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;