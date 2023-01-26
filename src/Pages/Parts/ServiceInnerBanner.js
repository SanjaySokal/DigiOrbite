import React from 'react'
import { Link } from 'react-router-dom'

const ServiceInnerBanner = (props) => {
    return (
        <div className='inner-service-banner'>
            <div className="container">
                <div className="background">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="service-banner-content">
                                <h3>{props.h3}</h3>
                                <h2>{props.h2}</h2>
                                <p>{props.p}</p>
                                <Link to={props.link} className="btn btn-primary">GET STARTED <i className="fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <img src={props.img} className="w-100" title={"DigiOrbite Services"} alt={"DigiOrbite Services"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceInnerBanner
