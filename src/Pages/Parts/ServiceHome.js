import React from 'react'
import { Link } from 'react-router-dom'

const ServiceHome = (props) => {
    return (
        <div className="col-md-4">
            <div className="service-sec">
                <img src={props.image} alt='DigiOrbite Service' title='DigiOrbite Service' />
                <h3>{props.h3}</h3>
                <p>{props.p}</p>
                <Link to={props.link} className={props.class}>Learn More ></Link>
            </div>
        </div>
    )
}

export default ServiceHome
