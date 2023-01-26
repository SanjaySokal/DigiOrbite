import React from 'react';
import Heading from '../Heading';
import img from '../../images/html.png';
import img2 from '../../images/css.png';
import img3 from '../../images/javascript.png';
import img4 from '../../images/react.png';
import img5 from '../../images/sass.png';
import img6 from '../../images/node.png';
import img7 from '../../images/angular.png';
import img8 from '../../images/python.png';

const ServiceTech = () => {
    return (
        <section>
            <Heading para="we use these" h2="tech stacks" />
            <div className="container">
                <div className="tech-row">
                    <div className="tech-col">
                        <img src={img} className="w-100" title="DigiOrbite Technologies" alt="DigiOrbite Technologies" />
                    </div>
                    <div className="tech-col">
                        <img src={img2} className="w-100" title="DigiOrbite Technologies" alt="DigiOrbite Technologies" />
                    </div>
                    <div className="tech-col">
                        <img src={img3} className="w-100" title="DigiOrbite Technologies" alt="DigiOrbite Technologies" />
                    </div>
                    <div className="tech-col">
                        <img src={img4} className="w-100" title="DigiOrbite Technologies" alt="DigiOrbite Technologies" />
                    </div>
                    <div className="tech-col">
                        <img src={img5} className="w-100" title="DigiOrbite Technologies" alt="DigiOrbite Technologies" />
                    </div>
                    <div className="tech-col">
                        <img src={img6} className="w-100" title="DigiOrbite Technologies" alt="DigiOrbite Technologies" />
                    </div>
                    <div className="tech-col">
                        <img src={img7} className="w-100" title="DigiOrbite Technologies" alt="DigiOrbite Technologies" />
                    </div>
                    <div className="tech-col">
                        <img src={img8} className="w-100" title="DigiOrbite Technologies" alt="DigiOrbite Technologies" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceTech