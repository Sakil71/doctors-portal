import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from "../../../context/AuthProvider";

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {userLogin} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        console.log(data);
        setLoginError('');

        userLogin(data.email, data.password)
        .then(res=>{
            const user = res.user;
            console.log(user);
            navigate(from, {replace: true});
            toast.success("Login Successfull")
        })
        .catch(error=> {
            console.error(error);
            setLoginError(error.message);
        });
    }

    return (
        <section className='h-[400px] flex justify-center items-center my-16'>
            <div>
                <h1 className='text-4xl text-center font-bold'>Login</h1>
                <form onSubmit={handleSubmit(handleLogin)}>

                    {/* For Email */}
                    <div className="form-control w-96">
                        <label className="label"><span className="label-text">Email</span></label>

                        <input {...register("email", { required: "Email is required" })}
                         type="email" 
                         className="input input-bordered w-full" 
                         placeholder='email' 
                         />

                        {errors.email && <p role="alert" className="text-error mt-4">{errors.email?.message}</p>}
                    </div>

                    {/* For Password */}
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Password</span></label>

                        <input {...register("password", { required: "Password is required",
                        minLength:{value:6, message:"Password at least 6 characters"} 
                        })} 
                        type="password" 
                        className="input input-bordered w-full" 
                        placeholder='password' 
                        />

                        {errors.password && <p role="alert" className="text-error mt-4">{errors.password?.message}</p>}

                        <label className="label"><span className="label-text">Forget Password?</span></label>
                    </div>

                    <div>
                        {
                            loginError && <p className="text-error">{loginError}</p>
                        }
                    </div>

                    <input className='btn btn-primary mt-5 w-full' type="submit" value={"Login"} />
                </form>

                <p>New to Doctors Portal? <Link className='text-secondary' to='/signup'>Create An Account</Link></p>

                <div className="divider">OR</div>

                {/* For Google Login */}
                <button className='btn btn-outline w-full'>Continue With Google</button>
            </div>
        </section>
    );
};

export default Login;