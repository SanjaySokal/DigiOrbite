import React from 'react';

const ServiceIcon = (props) => {
    return (
        <div className="icon-row">
            <div className="img">
                <img src={props.img} title='DigiOrbite' alt="DigiOrbite" />
            </div>
            <div className="content">
                <h2>{props.h2}</h2>
                <p>{props.p}</p>
            </div>
        </div>
    )
}

export default ServiceIcon
