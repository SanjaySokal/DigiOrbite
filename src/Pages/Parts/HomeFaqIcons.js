import React from 'react';
import { Link } from 'react-router-dom';

const HomeFaqIcons = () => {
    return (
        <div className="container">
            <div className="faq-icons">
                <h4>Are you facing any problems?</h4>
                <p>It va esser tam simplic quam Occidental in fact it va esser Occidental angles quam un skeptic cambridge es.</p>
                <div className="icons">
                    <Link to="/" className="icon">
                        <i className="fa-brands fa-whatsapp"></i> Start live chat
                    </Link>
                    <Link to="/" className="icon">
                        <i className="fa-solid fa-square-phone"></i> Talk to an expert
                    </Link>
                    <Link to="/" className="icon">
                        <i className="fa-solid fa-envelope"></i> Send an Email
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomeFaqIcons
