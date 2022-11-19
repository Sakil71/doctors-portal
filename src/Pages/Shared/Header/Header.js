import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut =()=>{
        logOut()
        .then(()=>{})
        .catch(err=> console.log(err));
    }

    // <React.Fragment><React.Fragment/>
    const menuItem = <>
        <Link to='/' className='mr-5 btn btn-ghost'>Home</Link>
        <Link to='appointment' className='mr-5 btn btn-ghost'>Appointment</Link>
        <Link to='about' className='mr-5 btn btn-ghost'>About</Link>
        <Link to='revievs' className='mr-5 btn btn-ghost'>Reviews</Link>
        <Link to='contact' className='mr-5 btn btn-ghost'>Contact Us</Link>

        {
            user?.uid ?
            <>
                <Link onClick={handleLogOut} className='mr-5 btn btn-ghost'>Logout</Link>

                <Link to='/dashboard' className='mr-5 btn btn-ghost'>Dashboard</Link>            
            </>
            :
            <Link to='login' className='mr-5 btn btn-ghost'>Login</Link>
        }

        <Link className='btn btn-ghost'>{user?.displayName}</Link>
    </>
    return (
        <div className="navbar bg-base-100 flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}              
                    </ul>
                </div>

                <Link className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                   {menuItem}
                </ul>
            </div>
        </div>
    );
};

export default Header;