import React from 'react'
import Heading from '../Heading'

const ServiceInnerDevelopment = (props) => {
    return (
        <section>
            <Heading para={props.heading} h2={props.para} />
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="service-development">
                            <img src={props.img} className="w-100" title={props.h2} alt={props.h2} />
                            <h2>{props.h2}</h2>
                            <p>{props.p}</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="service-development">
                            <img src={props.img2} className="w-100" title={props.h22} alt={props.h22} />
                            <h2>{props.h22}</h2>
                            <p>{props.p2}</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="service-development">
                            <img src={props.img3} className="w-100" title={props.h23} alt={props.h23} />
                            <h2>{props.h23}</h2>
                            <p>{props.p3}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceInnerDevelopment
