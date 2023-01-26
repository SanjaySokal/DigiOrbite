import React from 'react'

const HowCol = (props) => {
    return (
        <div className="how-col">
            <img src={props.img} title='DigiOrbite' alt="DigiOrbite" />
            <h5>{props.title}</h5>
            <p>
                {props.content}
            </p>
        </div>
    )
}

export default HowCol
