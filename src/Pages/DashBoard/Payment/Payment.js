import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);
console.log(stripePromise);

const Payment = () => {
    const booking = useLoaderData();
    console.log(booking);
    const { Price, appointmentDate, treatment, slot } = booking;
    return (
        <div>
            <h1 className='text-2xl mt-5'>Payment for <strong>{treatment}</strong></h1>
            <h2 className='mt-4'>Please pay <strong>${Price}</strong> for your appointment on {appointmentDate} at {slot}</h2>

            <div className='mt-10 w-96'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                    booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;