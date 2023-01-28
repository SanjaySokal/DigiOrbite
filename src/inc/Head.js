import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import img from '../images/logo.png';
import img2 from '../images/white-logo.png';

const Head = () => {
    const [header, setHeader] = useState(<></>);

    function hideSlide(e) {
        document.querySelector("#hide_btn").click();
    }

    useEffect(() => {
        if (window.innerWidth > 991) {
            setHeader(
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact us</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <Link to={'/contact'} className="btn btn-primary">GET IN TOUCH <i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>)
        } else {
            setHeader(
                <div className="collapse navbar-collapse" onClick={hideSlide} id="navbarText">
                    <ul className="navbar-nav m-auto">
                        <button className="navbar-toggler" id='hide_btn' type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <img src={img} className={'black'} alt={"DigiOrbite"} title={"DigiOrbite"} />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact us</Link>
                        </li>
                        <div className="d-flex">
                            <Link to={'/contact'} className="btn btn-primary">GET IN TOUCH <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
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
                    </ul>
                </div>)
        }

        window.addEventListener("resize", () => {
            if (window.innerWidth > 991) {
                setHeader(
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact us</Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <Link to={'/contact'} className="btn btn-primary">GET IN TOUCH <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </div>)
            } else {
                setHeader(
                    <div className="collapse navbar-collapse" onClick={hideSlide} id="navbarText">
                        <ul className="navbar-nav m-auto">
                            <button className="navbar-toggler" id='hide_btn' type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    <img src={img} className={'black'} alt={"DigiOrbite"} title={"DigiOrbite"} />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact us</Link>
                            </li>
                            <div className="d-flex">
                                <Link to={'/contact'} className="btn btn-primary">GET IN TOUCH <i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
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
                        </ul>
                    </div>)
            }
        })
    }, [])
    return (
        <>
            <header className='fixed'>
                <nav className="navbar navbar-expand-lg bg-transport">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img src={img} className={'black'} alt={"DigiOrbite"} title={"DigiOrbite"} />
                            <img src={img2} className={'white'} alt={"DigiOrbite"} title={"DigiOrbite"} />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        {header}
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Head
