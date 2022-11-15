import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import teeth from '../../../assets/images/whitening.png';
import OurService from './OurService';

const OurServices = () => {

    const services = [
        {
            id: 1,
            icon: fluoride,
            name: "Fluoride Treatment",
            details: "Fluride Treatment: Our best doctors pannel is comming for fluoried treatment.",
        },
        {
            id: 2,
            icon: cavity,
            name: "Fluoride Treatment",
            details: "Fluride Treatment: Our best doctors pannel is comming for fluoried treatment.",
        },
        {
            id: 3,
            icon: teeth,
            name: "Fluoride Treatment",
            details: "Fluride Treatment: Our best doctors pannel is comming for fluoried treatment.",
        },
    ]

    return (
        <div>
            <div className='text-center'>
                <h2 className='text-primary font-bold'>Our Services</h2>
                <h1 className='text-2xl'>Services We Provide</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services.map( service => <OurService
                        key={service.id}
                        service={service}
                    ></OurService>)
                }
            </div>
        </div>
    );
};

export default OurServices;