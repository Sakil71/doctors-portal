import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableDate from '../AvailableDate/AvailableDate';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AvailableDate
                selectedDate={selectedDate}
            ></AvailableDate>
        </div>
    );
};

export default Appointment;