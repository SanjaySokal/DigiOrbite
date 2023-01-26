import React from 'react';

const AwesomeClients = (props) => {
    return (
        <div className="item">
            <div className="clients">
                <div className="about">
                    <h3>{props.name}</h3>
                    <p className="dest">
                        {props.dest}
                    </p>
                    <p className="company">
                        {props.company}
                    </p>
                    <div className="quote">
                        <i className="fa-solid fa-quote-left"></i>
                        <p>
                            {props.content}
                        </p>
                    </div>
                </div>
                <div className="image">
                    <img src={props.image} title="DigiOrbite Client" alt="DigiOrbite Client" className="w-100" />
                </div>
            </div>
        </div>
    )
}

export default AwesomeClients
