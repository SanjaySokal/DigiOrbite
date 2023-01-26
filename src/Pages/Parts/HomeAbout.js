import React from 'react';
import { Link } from 'react-router-dom';
import Heading from '../Heading';
import img from '../../images/about.png'

const HomeAbout = () => {
    return (
        <section>
            <Heading para="what makes us" h2="different from others?" />
            <div className="container">
                <div className="row about">
                    <div className="col-md-12 col-lg-6">
                        <img src={img} className='w-100' title='DigiOrbite' alt="DigiOrbite" />
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <div className="about-content">
                            <h2>WE  DELIVER THE  BEST !!</h2>
                            <p>
                                Web Development refers to the process responsible for the functionality of the websites and can be considered as the primary aspect of a website. Digiorbite is proving itself as Best Website Development Company with the team of highly skilled and experienced developers.
                            </p>
                            <div className="type-btn">
                                <p className="type">
                                    UI/UX Design
                                </p>
                                <p className="type">
                                    Graphic Design
                                </p>
                                <p className="type">
                                    Paid Advertizing
                                </p>
                            </div>
                            <div className="text-center">
                                <Link to={'/'} className="btn btn-primary">Get Started <i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeAbout
