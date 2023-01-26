import React from 'react';
import img from '../../images/contact-section.png';
import Heading from '../Heading';

const ContactSection = () => {
    return (
        <section className='marg-t-b'>
            <Heading para="Do you want to" h2="contact us?" />
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <img src={img} className="w-100" title='Contact DigiOrbite' alt="Contact DigiOrbite" />
                    </div>
                    <div className="col-md-5">
                        <div className="contact-service">
                            <form>
                                <div className="input">
                                    <i className="fa-regular fa-user"></i>
                                    <input type="text" placeholder='Name' required />
                                </div>
                                <div className="input">
                                    <i className="fa-solid fa-phone"></i>
                                    <input type="tel" placeholder='Phone no.' required />
                                </div>
                                <div className="input">
                                    <i className="fa-regular fa-envelope"></i>
                                    <input type="email" placeholder='Email ID' required />
                                </div>
                                <div className="input">
                                    <i className="fa-regular fa-message"></i>
                                    <input type="text" placeholder='Enter your Message' required />
                                </div>
                                <div className="input">
                                    <button type="submit"><i className="fa-solid fa-paper-plane"></i> Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
