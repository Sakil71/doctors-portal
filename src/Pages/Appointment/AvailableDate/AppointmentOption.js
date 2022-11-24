import React from 'react';

const AppointmentOption = ({ option, setTreatment }) => {
    const { name, slots, Price } = option;
    return (
        <div className="card bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">

                <h2 className="card-title text-1xl text-secondary font-bold">{name}</h2>

                <p>{slots.length > 0 ? slots[0] : `Not Available. Please try Another Day`}</p>

                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>

                <p>Price: ${Price}</p>

                <div className="card-actions mt-5">
                    <label onClick={()=>setTreatment(option)} 
                    disabled={slots.length === 0}
                    htmlFor="book-modal" className="btn btn-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;