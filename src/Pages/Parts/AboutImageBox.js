import React from 'react'

const AboutImageBox = (props) => {
    return (
        <div className="image-about-box">
            <h2>{props.h2}<span>{props.span}</span></h2>
            <h4>{props.h4}</h4>
            <p>
                {props.p}
            </p>
        </div>
    )
}

export default AboutImageBox
