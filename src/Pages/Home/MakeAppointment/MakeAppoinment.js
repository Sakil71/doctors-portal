import React from 'react';
import doctors from '../../../assets/images/doctor.png';
import appoointment from '../../../assets/images/appointment.png';
import { Link } from 'react-router-dom';

const MakeAppoinment = () => {
    return (
        <section
            className='my-32 text-white'
            style={
                {
                    background: `url(${appoointment})`,
                }}>

            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctors} className="w-1/2 rounded-lg shadow-2xl -mt-32 hidden lg:block" alt='' />
                    <div>
                        <h4 className='text-primary font-bold'>Appointment</h4>
                        <h1 className="text-5xl font-bold">Make an appointment Today</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>

                        <Link to='/appointment'>
                            <button className="btn btn-primary">Get Started</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppoinment;