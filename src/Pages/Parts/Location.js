import React from 'react';

const Location = (props) => {
    return (
        <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className="location">
                <div className="image">
                    <p>
                        “{props.p}”
                    </p>
                    <div className="country">
                        <img src={props.img} title='DigiOrbite' alt="DigiOrbite" />
                        <p>{props.country}</p>
                    </div>
                    <div className="links">
                        <a href={`tel:${props.phone}`}>
                            <i className="fa-solid fa-phone"></i> {props.phone}
                        </a>
                        <a href={`mailto:${props.email}`}>
                            <i className="fa-solid fa-envelope"></i> {props.email}
                        </a>
                    </div>
                    <span>FIND US</span>
                </div>
                <div className="address">
                    {props.address}
                </div>
            </div>
        </div>
    )
}

export default Location
