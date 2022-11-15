import React from 'react';
import time from '../../../assets/icons/clock.svg';
import location from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const OurDetails = () => {
    return (
        <div className='lg:flex my-8 mx-4 text-black'>
            {/* Time */}
            <div className="card lg:card-side bg-gradient-to-r from-secondary to-primary shadow-xl mb-4 mr-4 p-4">
                <figure><img src={time} alt="Movie" /></figure>
                <div className="card-body">

                    <h2 className="card-title">Opening Hours</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                </div>
            </div>

            {/* Location */}
            <div className="card lg:card-side bg-blue-400 shadow-xl mr-4 p-4 mb-4">
                <figure><img src={location} alt="" /></figure>
                <div className="card-body">

                    <h2 className="card-title">Visit Our Location</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                </div>
            </div>

            {/* Phone */}
            <div className="card lg:card-side bg-gradient-to-r from-secondary to-primary shadow-xl mr-4 p-4 mb-4">
                <figure><img src={phone} alt="Movie" /></figure>
                <div className="card-body">

                    <h2 className="card-title">Contact Us Now</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                </div>
            </div>
        </div>
    );
};

export default OurDetails;