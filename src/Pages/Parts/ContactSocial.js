import React from 'react';
import Heading from '../Heading';

const ContactSocial = () => {
    return (
        <section>
            <Heading para="connect with us on" h2="Social media platforms" />
            <div className="container">
                <div className="social-section">
                    <a href="/">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ContactSocial
