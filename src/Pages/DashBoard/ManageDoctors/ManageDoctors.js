import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageDoctors = () => {
    const { data: managedoctors = [] } = useQuery({
        queryKey: ['managedoctors'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/doctors');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h1 className='text-2xl mt-5'>Manage Doctors</h1>
            <div className="overflow-x-auto w-full mt-5">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            managedoctors?.map((doctors, i) => <tr key={doctors._id}>
                                <th>{i+1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={doctors?.image} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{doctors?.name}</td>
                                <td>{doctors?.email}</td>
                                <td>{doctors?.speciality}</td>

                                <th>
                                    <button className="btn btn-error btn-xs">Delete</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;