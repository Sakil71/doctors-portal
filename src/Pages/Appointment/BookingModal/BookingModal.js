import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext);

    const handleBookingModal = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const patientName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        form.reset();

        const booking = {
            appointmentDate: date,
            patient: patientName,
            treatment: name,
            slot,
            email,
            phone,
        }

        // send booking data in server
        // start
        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            if(data?.acknowledged){
                setTreatment(null);
                toast.success(`${name}: Booked Successfully`);
                refetch();
            }
        })
        // end
    }

    return (
        <>
            <input type="checkbox" id="book-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="book-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-start text-lg font-bold text-warning">{name}</h3>

                    <form onSubmit={handleBookingModal} className='grid grid-cols-1 gap-4 mt-10'>
                        <input disabled type="text" value={date} className="input input-bordered w-full input-warning" />

                        <select name='slot' className="select select-bordered w-full input-warning">
                            {
                                slots.map((slot, i) =>
                                    <option value={slot} key={i}>{slot}</option>)
                            }
                        </select>

                        <input name='name' type="text"
                            defaultValue={user?.displayName}
                            readOnly
                            placeholder="Your Name" className="input input-bordered w-full input-warning" />

                        <input name='email' type="text"
                            defaultValue={user?.email}
                            disabled
                            placeholder="Email Address" className="input input-bordered w-full input-warning" />

                        <input name='phone' type="text"
                            required
                            placeholder="Phone Number" className="input input-bordered w-full input-warning" />

                        <input className='btn btn-warning w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;