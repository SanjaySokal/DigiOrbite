import React from 'react';
import img from '../../images/service-why.png';
import img2 from '../../images/call-icon.png';
import img3 from '../../images/best-icon.png';
import img4 from '../../images/location-icon.png';
import img5 from '../../images/ph-contact-icon.png';
import ServiceIcon from './ServiceIcon';

const ServiceWhy = () => {
    return (
        <section>
            <div className="heading main">
                <span className='small'>best services</span>
                <h2>why choose us</h2>
                <p>
                    Non pellentesque in nisi etiam etiam. Curabitur nunc feugiat rutrum sit. Nunc eu id dui aliquam consectetur dis.
                </p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <img src={img} className="w-100" title='Why Choose DigiOrbite?' alt="Why Choose DigiOrbite?" />
                    </div>
                    <div className="col-md-5">
                        <div className="icons-why">
                            <ServiceIcon p="Proin ac semper eu suspendisse sed sit ut. Sed erat massa rutrum curabitur purus nisl pharetra." h2="customer support" img={img2} />
                            <ServiceIcon p="Proin ac semper eu suspendisse sed sit ut. Sed erat massa rutrum curabitur purus nisl pharetra." h2="customer support" img={img3} />
                            <ServiceIcon p="Proin ac semper eu suspendisse sed sit ut. Sed erat massa rutrum curabitur purus nisl pharetra." h2="customer support" img={img4} />
                            <ServiceIcon p="Proin ac semper eu suspendisse sed sit ut. Sed erat massa rutrum curabitur purus nisl pharetra." h2="customer support" img={img5} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceWhy
