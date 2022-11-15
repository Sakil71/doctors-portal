import React from 'react';
import bg from '../../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <section style={{ background: `url(${bg})` }} className='my-10 py-4'>
            <div className='text-center'>
                <h1 className='text-primary text-xl font-bold'>Contact Us</h1>
                <h4 className='text-4xl'>Stay Connected With Us</h4>
            </div>

            <div className="hero">
                <div className="hero-content flex-col lg:flex lg:w-2/4">
                    <div className="card flex-shrink-0 w-full">
                        <div className="card-body">
                            <div className="form-control">
                                <input type="email" placeholder="Email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <input type="text" placeholder="Subject" className="input input-bordered" />
                            </div>
                            <div>
                                <textarea className="textarea textarea-bordered w-full" placeholder="Your Message"></textarea>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ContactUs;