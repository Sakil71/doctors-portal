import React from 'react';
import treatment from '../../../assets/images/treatment.png';

const Exceptional = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl my-10 lg:w-3/4 mx-auto">
            <figure>
                <img className='w-80' src={treatment} alt="" />
            </figure>

            <div className="card-body lg:w-1/2">
                <h2 className="card-title text-3xl font-bold">Exceptional Dental Care, on Your Terms</h2>

                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>

                <div className="card-actions">
                    <button className="btn bg-gradient-to-r from-secondary to-primary text-black">Get Started</button>
                </div>

            </div>
        </div>
    );
};

export default Exceptional;