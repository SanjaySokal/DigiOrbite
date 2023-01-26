import React from 'react';
import Heading from '../Heading';
import Location from './Location';
import img from '../../images/canada-location.png';
import img2 from '../../images/aus-location.png';
import img3 from '../../images/usa-location.png';

const ContactLocations = () => {
    return (
        <section className='locations-contact'>
            <Heading para="our world-wide" h2="foot prints" />
            <div className="container">
                <div className="row">
                    <Location
                        p="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
                        img={img2}
                        country="Australia"
                        phone="+91 8295541618"
                        email="connect@digiorbite.com"
                        address="205 N Michigan Ave Suite 810, Chicago, IL 60601, United States"
                    />
                    <Location
                        p="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
                        img={img3}
                        country="United States"
                        phone="+91 8295541618"
                        email="connect@digiorbite.com"
                        address="205 N Michigan Ave Suite 810, Chicago, IL 60601, United States"
                    />
                    <Location
                        p="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
                        img={img}
                        country="Canada"
                        phone="+91 8295541618"
                        email="connect@digiorbite.com"
                        address="205 N Michigan Ave Suite 810, Chicago, IL 60601, United States"
                    />
                </div>
            </div>
        </section>
    )
}

export default ContactLocations
