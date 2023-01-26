import React from 'react'
import { Link } from 'react-router-dom';
import img from '../../images/location-service-1.png'
import img2 from '../../images/location-service-2.png'
import img3 from '../../images/location-service-3.png'

const ServiceLocationBanner = () => {
    return (
        <section>
            <div className="container">
                <div className="location-banner">
                    <div className="heading-banner">
                        <h2>Best creative <span>digital agency</span> for your business.</h2>
                        <p>
                            Placerat eget malesuada congue lacus curabitur ultricies malesuada sollicitudin consectetur. Ultricies diam ligula faucibus elit ac.
                        </p>
                        <div className="btns">
                            <Link to={'/contact'} className="btn btn-primary">GET QUOTE</Link>
                            <Link to={'/contact'} className="btn btn-primary inverse">ABOUT US</Link>
                        </div>
                    </div>
                    <div className="images-row">
                        <div className="images-col">
                            <img src={img} className="w-100" alt="DigiOrbite Services" title='DigiOrbite Services' />
                        </div>
                        <div className="images-col">
                            <img src={img3} className="w-100" alt="DigiOrbite Services" title='DigiOrbite Services' />
                        </div>
                        <div className="images-col">
                            <img src={img2} className="w-100" alt="DigiOrbite Services" title='DigiOrbite Services' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceLocationBanner
