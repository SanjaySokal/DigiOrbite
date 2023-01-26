import React from 'react'

const Member = (props) => {
    return (
        <div className="member-col">
            <div className="member">
                <div className="content">
                    <img src={props.img} className='w-100' alt="DigiOrbite Member" title='DigiOrbite Member' />
                    <div className="details">
                        <p>{props.name}</p>
                        <h3>{props.about}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Member
