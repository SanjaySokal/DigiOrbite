import React from 'react'

const Heading = (props) => {
    return (
        <div className="heading">
            <p>{props.para}</p>
            <h2>{props.h2}</h2>
        </div>
    )
}

export default Heading
