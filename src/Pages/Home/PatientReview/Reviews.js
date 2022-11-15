import React from 'react';

const Reviews = ({ review }) => {
    const { name, address, icon, details } = review;

    return (
        <div className="card shadow-2xl">
            <div className="card-body">
                <h2>{details}</h2>

                <div className="card-actions mt-10 justify-start">
                    <img className='w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={icon} alt="" />
                    <div>
                        <h1 className='text-lg font-bold'>{name}</h1>
                        <p>{address}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;