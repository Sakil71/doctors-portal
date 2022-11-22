import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const navigate = useNavigate();

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const { data: specialities, isLoading = [] } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-delta.vercel.app/appointmentSpecialty')
            const data = await res.json();
            return data;
        }
    })

    const handleAddDoctor = data => {
        const image = data.image[0];
        const fromData = new FormData();
        fromData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

        fetch(url, {
            method : "POST",
            body: fromData
        })
        .then(res=>res.json())
        .then(imgData=>{
            if(imgData.success){
                console.log(imgData.data.url)

                const doctor = {
                    name : data.name,
                    email : data.email,
                    speciality : data.specialty,
                    image : imgData.data.url
                }

                fetch('https://doctors-portal-server-delta.vercel.app/doctors',{
                    method: "POST",
                    headers: {
                        'content-type':'application/json'
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res=> res.json())
                .then(result=>{
                    console.log(result)
                    toast.success(`${data.name} Added Successfully`);
                    navigate('/managedoctors');
                })
            }
        })
    }

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <section>
            <h1 className='text-2xl font-semibold mt-10'>Add A Doctor</h1>
            <div className='flex  items-center mt-5'>
                <form onSubmit={handleSubmit(handleAddDoctor)}>

                    {/* For Name */}
                    <div className="form-control w-96">
                        <label className="label"><span className="label-text">Name</span></label>

                        <input {...register("name", {
                            required: 'Name is required',
                        })}
                            type="text"
                            className="input input-bordered w-full"
                            placeholder='Your Name' />

                        {errors.name && <span className="text-error mt-3">{errors.name?.message}</span>}
                    </div>

                    {/* For Email */}
                    <div className="form-control w-96">
                        <label className="label"><span className="label-text">Email</span></label>

                        <input {...register("email", {
                            required: 'Email is required',
                        })}
                            type="email"
                            className="input input-bordered w-full"
                            placeholder='email' />

                        {errors.email && <span className="text-error mt-3">{errors.email?.message}</span>}
                    </div>

                    {/* For Password */}
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Specialty</span></label>
                        <select
                            {...register('specialty')}
                            className="select select-bordered w-full">
                            {
                                specialities?.map(speciality =>
                                    <option key={speciality._id}
                                        value={speciality.name}>{speciality.name}</option>)
                            }
                        </select>

                    </div>

                    <div className="form-control w-96">
                        <label className="label"><span className="label-text">Photo</span></label>

                        <input {...register("image", {
                            required: 'Photo is required',
                        })}
                            type="file"
                            className="input input-bordered w-full" />

                        {errors.name && <span className="text-error mt-3">{errors.name?.message}</span>}
                    </div>

                    <input className='btn btn-primary mt-5 w-full' type="submit" value={"Add Doctor"} />
                </form>
            </div>
        </section>
    );
};

export default AddDoctor;