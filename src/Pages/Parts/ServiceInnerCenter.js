import React from 'react'
import { Link } from 'react-router-dom'

const ServiceInnerCenter = () => {
    return (
        <section>
            <div className="container">
                <div className="service-inner-center">
                    <h2>We are away just as a distance of Click!</h2>
                    <p>
                        Make a click and let us talk upon the development process of your personalized website and expand your business roots in the global market.
                    </p>
                    <Link to={'/contact'} className="btn btn-primary" >GET STARTED</Link>
                </div>
            </div>
        </section>
    )
}

export default ServiceInnerCenter
