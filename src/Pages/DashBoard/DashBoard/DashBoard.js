import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const DashBoard = () => {
    const { user } = useContext(AuthContext);

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://doctors-portal-server-delta.vercel.app/bookings?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h1 className='text-2xl font-bold'>My Appointments</h1>
            <div className="overflow-x-auto mt-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) =>
                                <tr key={booking._id}>
                                    <th>{i + 1}</th>

                                    <td>{booking.patient} <br /><small>{booking.phone}</small>
                                    </td>

                                    <td>{booking.treatment}</td>

                                    <td>{booking.appointmentDate}</td>

                                    <td>{booking.slot}</td>

                                    <td>
                                        {
                                            booking.Price && !booking.paid && <Link to={`/payment/${booking._id}`}>
                                                <button className='btn btn-xs btn-primary'>Pay</button>
                                            </Link>
                                        }
                                        {
                                            booking.Price && booking.paid && <span>Paid</span>
                                        }
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DashBoard;