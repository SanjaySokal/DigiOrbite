import React from 'react';
import { Link } from 'react-router-dom';

const WorkedHome = (props) => {
    return (
        <div className="item" style={{ background: `url(${props.img}) no-repeat center center`, backgroundSize: "cover" }}>
            <div className="content">
                <h3>{props.head}</h3>
                <Link to={`${props.link}`} className="btn btn-primary">Get Started <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
        </div>
    )
}

export default WorkedHome
