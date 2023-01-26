import React from 'react'

const ServiceInnerPageSilderItem = (props) => {
    return (
        <div className="item">
            <div className="image-background" style={{
                backgroundImage: `url(${props.img})`
            }}>
                <div className="inner-box">
                    <h3>{props.h2}</h3>
                    <p>{props.p}</p>
                    <div className="company">
                        <div className="img">
                            <img src={props.client} title={props.company} alt={props.company} />
                        </div>
                        <div className="reating">
                            <p className='name'>{props.company}</p>
                            <p>Rating</p>
                            <span>
                                4
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceInnerPageSilderItem
