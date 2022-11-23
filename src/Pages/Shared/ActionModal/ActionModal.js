import React from 'react';

const ActionModal = ({title, buttonName, message, closeModal, successAction, modalData}) => {
    return (
        <div>
            <input type="checkbox" id="action-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={()=> successAction(modalData)} htmlFor="action-modal" className="btn btn-error">{buttonName}</label>

                        <button onClick={closeModal} className='btn btn-outline'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActionModal;