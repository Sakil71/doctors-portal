import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';

const DashboardLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>

                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">                        
                        <li><Link className='mb-2' to='/dashboard'>Dashboard</Link></li>

                        <li><Link className='mb-2' to='/alluser'>All User</Link></li>

                        <li><Link className='mb-2' to='/adddoctor'>Add A Doctor</Link></li>

                        <li><Link to='/managedoctors'>Manage Doctors</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;