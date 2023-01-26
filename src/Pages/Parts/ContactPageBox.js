import React from 'react';
import img from '../../images/contact-back.png';
import img2 from '../../images/contact-icon-1.png';
import img3 from '../../images/contact-icon-2.png';
import img4 from '../../images/contact-icon-3.png';
import img5 from '../../images/contact-icon-4.png';
import ContactBoxes from './ContactBoxes';

const ContactPageBox = () => {
    return (
        <section>
            <div className="container">
                <div className="connect">
                    <img src={img} title="DigiOrbite" alt="DigiOrbite" className='w-100' />
                    <h2>Connect with us</h2>
                    <div className="boxes">
                        <ContactBoxes image={img2} link={""} text={"Gurgaon Sec 46 211013 Delhi"} />
                        <ContactBoxes image={img3} link={""} text={"+91 9876589988"} />
                        <ContactBoxes image={img4} link={""} text={"connectdigiorbite.com"} />
                        <ContactBoxes image={img5} link={""} text={"Mon - Fri , 09:00 - 18:00"} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactPageBox
