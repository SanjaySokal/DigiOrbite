import React from 'react';
import Heading from '../Heading';
import img from '../../images/industry-1.png';
import IndustryCol from './IndustryCol';

const ServiceIndustry = () => {
    return (
        <section>
            <Heading h2="industries we have worked for" />
            <div className="container">
                <div className="industry-row">
                    <IndustryCol img={img} p="Banking" />
                    <IndustryCol img={img} p="Banking" />
                    <IndustryCol img={img} p="Banking" />
                    <IndustryCol img={img} p="Banking" />
                    <IndustryCol img={img} p="Banking" />
                </div>
                <div className="industry-row">
                    <IndustryCol img={img} p="Banking" />
                    <IndustryCol img={img} p="Banking" />
                    <IndustryCol img={img} p="Banking" />
                    <IndustryCol img={img} p="Banking" />
                </div>
                <div className="industry-row">
                    <IndustryCol img={img} p="Banking" />
                    <IndustryCol img={img} p="Banking" />
                    <IndustryCol img={img} p="Banking" />
                </div>
            </div>
        </section>
    )
}

export default ServiceIndustry
