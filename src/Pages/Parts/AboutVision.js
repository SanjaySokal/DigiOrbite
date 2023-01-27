import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/vision.png';

const AboutVision = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-6">
                        <img src={img} className="w-100 sm-n" title='DigiOrbite' alt="DigiOrbite" />
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <div className='tabs-about'>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Our Vision</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Success Story</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Motivation</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                                    <p>
                                        Posuere amet ligula maecenas pulvinar elementum. Tincidunt vitae eu cursus eget. Sed a ipsum elementum egestas rhoncus tempus amet tortor sit. Et vitae tristique odio et.
                                    </p>
                                    <p>
                                        Tincidunt vitae eu cursus eget. Sed a ipsum elementum egestas rhoncus tempus amet tortor sit.
                                    </p>
                                </div>
                                <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                                    <p>
                                        Posuere amet ligula maecenas pulvinar elementum. Tincidunt vitae eu cursus eget. Sed a ipsum elementum egestas rhoncus tempus amet tortor sit. Et vitae tristique odio et.
                                    </p>
                                    <p>
                                        Tincidunt vitae eu cursus eget. Sed a ipsum elementum egestas rhoncus tempus amet tortor sit.
                                    </p>
                                </div>
                                <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">
                                    <p>
                                        Posuere amet ligula maecenas pulvinar elementum. Tincidunt vitae eu cursus eget. Sed a ipsum elementum egestas rhoncus tempus amet tortor sit. Et vitae tristique odio et.
                                    </p>
                                    <p>
                                        Tincidunt vitae eu cursus eget. Sed a ipsum elementum egestas rhoncus tempus amet tortor sit.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Link to={'/'} className="btn btn-primary">GET IN TOUCH <i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutVision
