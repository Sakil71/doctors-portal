import React, { useContext } from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const DisplayError = () => {
    const {logOut} = useContext(AuthContext);
    
    const error = useRouteError();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>Something went wrong!!</h1>
            <i>{error.statusText || error.message}</i>
            <h2>Please <Link onClick={handleLogOut} className='mr-5 btn btn-ghost'>Logout</Link></h2>
        </div>
    );
};

export default DisplayError;