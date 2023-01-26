import React from 'react';
import Heading from '../Heading';
import img from '../../images/sub-service.gif';
import SubService from './SubService';

const SubServices = () => {
    return (
        <section>
            <Heading para="explore our ready-made" h2="packages to boost your business" />
            <div className="container">
                <div className="row justify-content-center">
                    <SubService img={img} data={["and typesetting industry", "and typesetting industry", "and typesetting industry", "and typesetting industry", "and typesetting industry"]} />
                    <SubService img={img} data={["and typesetting industry", "and typesetting industry", "and typesetting industry", "and typesetting industry", "and typesetting industry"]} />
                    <SubService img={img} data={["and typesetting industry", "and typesetting industry", "and typesetting industry", "and typesetting industry", "and typesetting industry"]} />
                </div>
            </div>
        </section>
    )
}

export default SubServices
