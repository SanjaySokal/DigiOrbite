import React from 'react';
import { Link } from 'react-router-dom';
import img from '../images/white-logo.png';

const PageBanner = (props) => {
    return (
        <div className='page-banner'>
            <div className="container">
                <div className="banner-top">
                    {props.top.map((item, i) => {
                        return <span key={i}>{item}</span>
                    })}
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-left">
                            <h2>
                                {props.h2}
                                <span><i>{props.logo}</i> <img src={img} title="DigiOrbite" alt="DigiOrbite" /></span>
                            </h2>
                            <h4>
                                {props.h4}
                            </h4>
                            <p>
                                {props.p}
                            </p>
                            <Link to={'/'} className="btn btn-primary">GET IN TOUCH <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <img src={props.img} className="w-100" title='About DigiOrbite' alt="About DigiOrbite" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageBanner
