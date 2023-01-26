import React from 'react';
import img from '../../images/wordpress.png';
import img2 from '../../images/about-2.png';
import img3 from '../../images/tesla.png';
import img4 from '../../images/jaguar.png';
import img5 from '../../images/ikea.png';

const AboutTop = () => {
    return (
        <section>
            <div className="heading"><h2>Trusted by top companies</h2></div>
            <div className="container">
                <div className="about-top-img">
                    <div className="image">
                        <img src={img} title='DigiOrbite' alt="DigiOrbite" />
                    </div>
                    <div className="image">
                        <img src={img2} title='DigiOrbite' alt="DigiOrbite" />
                    </div>
                    <div className="image">
                        <img src={img3} title='DigiOrbite' alt="DigiOrbite" />
                    </div>
                    <div className="image">
                        <img src={img4} title='DigiOrbite' alt="DigiOrbite" />
                    </div>
                    <div className="image">
                        <img src={img5} title='DigiOrbite' alt="DigiOrbite" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutTop
