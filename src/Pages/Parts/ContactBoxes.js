import React from 'react';
import { Link } from 'react-router-dom';

const ContactBoxes = (props) => {
    return (
        <div className="box">
            <img src={props.image} title='DigiOrbite' alt="DigiOrbite" />
            <Link to={props.link}>{props.text}</Link>
        </div>
    )
}

export default ContactBoxes
