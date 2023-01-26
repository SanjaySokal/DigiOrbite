import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/service-banner.png';

const ServiceBanner = () => {
    return (
        <section className='service-banner'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-6">
                        <h2>
                            Fast and easy way <br /> to make your service <br /> top rank.
                        </h2>
                        <p>
                            Sit maecenas donec netus posuere sed tincidunt lectus. Vivamus ut pharetra risus arcu viverra morbi maecenas pellentesque. Vulputate scelerisque pharetra rhoncus suspendisse lectus. Elementum pretium id ut dignissim urna a tincidunt. Ultrices purus maecenas scelerisque donec tincidunt massa posuere semper. Euismod justo quam varius scelerisque lectus.
                        </p>
                        <Link className='btn btn-primary' to="/contact">
                            GET IN TOUCH <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <img className='w-100' src={img} title='DigiOrbite Services' alt="DigiOrbite Services" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceBanner
