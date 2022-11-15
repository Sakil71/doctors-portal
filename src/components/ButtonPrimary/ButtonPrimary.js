import React from 'react';

const ButtonPrimary = ({ children }) => {
    return (
        <button className="btn bg-gradient-to-r from-secondary to-primary text-black">
            {children}
         </button>
    );
};

export default ButtonPrimary;