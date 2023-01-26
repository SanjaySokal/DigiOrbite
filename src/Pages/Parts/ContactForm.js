import React from 'react';
import img from '../../images/contact-person.png';

const ContactForm = () => {
    return (
        <section>
            <div className="container">
                <div className="contact-row">
                    <div className="contact-col">
                        <p>we love what we do</p>
                        <h2>our contacts</h2>
                        <form>
                            <input type="text" className='form-input' placeholder='Name*' required />
                            <input type="text" className='form-input' placeholder='Email*' required />
                            <input type="text" className='form-input' placeholder='Subject*' required />
                            <textarea placeholder='Message*' className='form-input'></textarea>
                            <button type='submit' className='btn btn-primary'>Send Message</button>
                        </form>
                    </div>
                    <div className="contact-col">
                        <h3>Find us on map</h3>
                        <img src={img} title='Contact DigiOrbite' alt="Contact DigiOrbite" />
                        <div className="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.438282678123!2d77.04918901436159!3d28.436201599691863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19e562079697%3A0x1dc3b97c51f4225c!2sDigiOrbite-%20Best%20Digital%20Marketing%20Services%20Agency%20In%20Gurgaon%2C%20India!5e0!3m2!1sen!2sin!4v1673330478386!5m2!1sen!2sin" loading="lazy" title='DigiOrbite' referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
