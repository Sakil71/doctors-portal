import React from 'react';
import quatation from '../../../assets/icons/quote.svg';

import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Reviews from './Reviews';

const PatientReview = () => {
    const reviews = [
        {
            id: 1,
            icon: people1,
            name: "Winson Herry",
            address: "Dhaka",
            details: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        },
        {
            id: 2,
            icon: people2,
            address: "Ragnpur",
            name: "Farin",
            details: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        },
        {
            id: 3,
            icon: people3,
            address: "Cox's Bazar",
            name: "Keya Payel",
            details: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        },
    ]

    return (
        <section>
            <div className="hero">
                <div className="hero-content lg:flex justify-between w-full">
                    <div>
                        <h1 className="text-primary font-bold">Testimonial</h1>
                        <p className="text-3xl">What Our Patient Says</p>
                    </div>
                    <img src={quatation} alt='' className="rounded-lg w-28 lg:w-36" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    reviews.map(review => <Reviews
                        key={review.id}
                        review={review}
                    ></Reviews>)
                }
            </div>
        </section>
    );
};

export default PatientReview;