import React from 'react';

const OurService = ({service}) => {
    const {name, icon, details} = service;

    return (
        <div className="card shadow-2xl">
            <figure className="px-10 pt-10">
                <img src={icon} alt="" className="rounded-xl" />
            </figure>

            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default OurService;