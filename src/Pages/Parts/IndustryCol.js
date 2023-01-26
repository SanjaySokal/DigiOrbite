import React from 'react'

const IndustryCol = (props) => {
    return (
        <div className="industry-col">
            <div className="industry-content">
                <img src={props.img} title='DigiOrbite Service' alt="DigiOrbite Service" />
                <span>{props.p}</span>
            </div>
        </div>
    )
}

export default IndustryCol
