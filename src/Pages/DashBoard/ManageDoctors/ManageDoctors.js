import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ActionModal from '../../Shared/ActionModal/ActionModal';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const { data: managedoctors = [], refetch } = useQuery({
        queryKey: ['managedoctors'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-delta.vercel.app/doctors');
            const data = await res.json();
            return data;
        }
    })

    const closeModal = () =>{
        setDeletingDoctor(null);
    }

    const handleDoctor = doctors =>{
        fetch(`http://localhost:5000/doctors/${doctors._id}`,{
            method: "DELETE"
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.deletedCount > 0){                
            refetch();
            toast.success(`Doctor ${doctors?.name} Deleted Successfully`)
            }
        })
    }

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
                                <th>{i + 1}</th>
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

                                <td>
                                    <label onClick={()=> setDeletingDoctor(doctors)} htmlFor="action-modal" className="btn btn-error btn-xs">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <ActionModal
                title = {`Are you sure you want to delete?`}
                message ={`If you delete ${deletingDoctor.name}, It can not be undone`}
                closeModal = {closeModal}
                successAction = {handleDoctor}
                modalData = {deletingDoctor}
                buttonName = "Confirm"
                ></ActionModal>
            }
        </div>
    );
};

export default ManageDoctors;