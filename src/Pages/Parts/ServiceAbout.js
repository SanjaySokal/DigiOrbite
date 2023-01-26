import React from 'react'
import { Link } from 'react-router-dom'

const ServiceAbout = (props) => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <img src={props.img} className='w-100' title='DigiOrbite Service' alt="DigiOrbite Service" />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="service-about-content">
                            <h3>{props.h3}</h3>
                            <p>{props.p}</p>
                            <Link to={"/contact"} className="btn btn-primary">GET STARTED <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceAbout
