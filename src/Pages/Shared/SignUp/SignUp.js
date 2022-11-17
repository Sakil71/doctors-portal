import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [data, setData] = useState('');
    const {register, handleSubmit} = useForm();

    return (
        <section className='h-[400px] flex justify-center items-center my-16'>
            <div>
                <h1 className='text-4xl text-center font-bold'>Sign Up</h1>
                <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>

                    <div className="form-control w-96">
                        <label className="label"><span className="label-text">Email</span></label>

                        <input {...register("email")} type="email" className="input input-bordered w-full" placeholder='email' />
                    </div>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Password</span></label>

                        <input {...register("password")} type="password" className="input input-bordered w-full" placeholder='password' />

                    </div>

                    <p>{data}</p>
                    <input className='btn btn-primary mt-5 w-full' type="submit" value={"Sign Up"} />
                </form>
                <p>Already have an account? <Link className='text-secondary' to='/login'>Login</Link></p>

                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>Continue With Google</button>
            </div>
        </section>
    );
};

export default SignUp;