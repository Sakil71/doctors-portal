// import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../../context/AuthProvider";
import toast from 'react-hot-toast';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { creatUser, updateUserProfile, googleLogin } = useContext(AuthContext);

    const [signUpError, setSignUpError] = useState('');

    const navigate = useNavigate();

    const handleGoogle = () => {
        googleLogin()
            .then(res => {
                const user = res.user;
                console.log(user);
                toast.success("Signup Successfully");
                saveUser(user?.email, user?.displayName);
            })
            .catch(err => console.error(err));
    }

    // Creat User
    const handleSignUp = data => {
        console.log(data);
        setSignUpError('');

        creatUser(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user);
                toast.success("Signup Successfully");

                const userInfo = {
                    displayName: data?.name,
                };

                updateUserProfile(userInfo)
                    .then(() => {
                        saveUser(data.email, data.name);
                    })
                    .catch(err => console.error(err));
            })
            .catch(error => {
                console.error(error);
                setSignUpError(error.message);
            });
    }

    const saveUser = (email, name) => {
        const user = {email, name};

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data=>{
            getJwtToken(email);   
            navigate('/');
        })

    }

    const getJwtToken = (email) => {
        fetch(`http://localhost:5000/jwt?email=${email}`)
        .then(res=>res.json())
        .then(data=>{
            if(data.accesstoken){
                localStorage.setItem('accessToken', data.accesstoken);
                navigate('/');
            }
        })
    }


    return (
        <section className='h-[400px] flex justify-center items-center my-16'>
            <div>
                <h1 className='text-4xl text-center font-bold'>Sign Up</h1>
                <form onSubmit={handleSubmit(handleSignUp)}>

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
                        <label className="label"><span className="label-text">Password</span></label>

                        <input {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password at least 6 characters" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[0-9])(?=.*[A-Z])/, message: "Password must be strong" }
                        })} type="password"
                            className="input input-bordered w-full"
                            placeholder='password' />

                        {errors.password && <span className="text-error mt-3">{errors.password?.message}</span>}

                    </div>

                    <div>
                        {
                            signUpError && <p className="text-error mt-3">{signUpError} <Link className="text-secondary" to='/login'>Please Login</Link></p>
                        }
                    </div>

                    <input className='btn btn-primary mt-5 w-full' type="submit" value={"Sign Up"} />
                </form>

                <p>Already have an account? <Link className='text-secondary' to='/login'>Please Login</Link></p>

                <div className="divider text-blue-500">OR</div>
                <button onClick={handleGoogle} className='btn btn-outline w-full'>Continue With Google</button>
            </div>
        </section>
    );
};

export default SignUp;