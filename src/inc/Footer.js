import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Footer = () => {
    return (
        <footer>
            <div className="about">
                <div className="company">
                    <Link to={'/'}><img src={logo} title='DigiOrbite' alt="DigiOrbite" /></Link>
                    <p>
                        DigiOrbite is one of the top leading & Certified Digital Marketing Agency. From the year 2018, We are delivering cost-effective & Result Oriented services to improve overall presence & growth of client’s business in the competitive market with the help of all possible online marketing platforms.
                    </p>
                    <div className="icons">
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                    </div>
                </div>
                <div className="links">
                    <h4>our services</h4>
                    <div className="link">
                        <Link to={'/'}>SEO Services <i className="fa-solid fa-arrow-right"></i></Link>
                        <Link to={'/'}>Social Media Services <i className="fa-solid fa-arrow-right"></i></Link>
                        <Link to={'/'}>PPC Management <i className="fa-solid fa-arrow-right"></i></Link>
                        <Link to={'/'}>web Design <i className="fa-solid fa-arrow-right"></i></Link>
                        <Link to={'/'}>ORM Service <i className="fa-solid fa-arrow-right"></i></Link>
                        <Link to={'/'}>Web Development <i className="fa-solid fa-arrow-right"></i></Link>
                        <Link to={'/'}>Graphic Design <i className="fa-solid fa-arrow-right"></i></Link>
                        <Link to={'/'}>UI/UX Design <i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
            <div className="bottom-address">
                <div className="address">
                    <p><i className="fa-solid fa-location-dot"></i> Ground Floor, 1094, Huda Colony, Sector 46, Gurugram, Haryana 122018</p>
                </div>
                <div className="links">
                    <a href="tel:+91 8295541618"><i className="fa-solid fa-phone"></i> +91 8295541618</a> |
                    <a href="mailto:contact@digiorbite.com"><i className="fa-solid fa-envelope"></i> contact@digiorbite.com</a>
                </div>
            </div>
            <div className="bottom-address bg-green">
                <div className="address">
                    <p>&copy; 2023 | All Rights Reserved | DigiOrbite</p>
                </div>
                <div className="links">
                    <Link to="/">Privacy </Link> |
                    <Link to="/"> Terms </Link> |
                    <Link to="/"> Blog</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
