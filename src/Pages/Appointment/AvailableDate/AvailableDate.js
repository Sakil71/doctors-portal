import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableDate = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');

    const {data: appointmentOptions = [], refetch, isLoading} = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async()=>{
            const res = await fetch(`https://doctors-portal-server-delta.vercel.app/appointment?date=${date}`);
            const data  = res.json();
            return data;
        }
    })

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <section className='text-center text-secondary font-bold mt-10'>
            <p>You have selected date: {format(selectedDate, 'PP')}</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 w-3/4 mx-auto lg:w-full'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                    refetch = {refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableDate;