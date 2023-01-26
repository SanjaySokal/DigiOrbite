import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/Bharat.png';

const AboutDigi = () => {
    return (
        <section>
            <div className="container about-digi">
                <div className="row">
                    <div className="col-md-12 col-lg-6">
                        <div className="content">
                            <p className="vision">
                                Our Vision
                            </p>
                            <h3>
                                Build Better To Make You Best In <span>The Market</span>
                            </h3>
                            <p>
                                Vitae at morbi dui et. Facilisi tortor erat ornare a quam sed. Fringilla enim sapien elementum ullamcorper sit euismod tristique consequat leo. Placerat tempus in a pellentesque in faucibus aliquet purus. A in massa non nullam sollicitudin.
                            </p>
                            <p>
                                Placerat tempus in a pellentesque in faucibus aliquet purus. A in massa non nullam sollicitudin.
                            </p>
                            <Link to={'/contact'} className="btn btn-primary">
                                GET IN TOUCH <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <div className="image">
                            {/* <div className="name">Mr. Bharat Sachdeva <span>CEO - DigiOrbite</span></div> */}
                            <div className="img">
                                <img src={img} title="DigiOrbite Team" alt="DigiOrbite Team" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutDigi
