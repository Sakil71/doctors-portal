import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleLogin = data => {
        console.log(data);
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