import React from 'react';
import HowCol from './HowCol';
import img from '../../images/choose-service.png';
import img2 from '../../images/get-quote.png';
import img3 from '../../images/virtual-meeting.png';
import img4 from '../../images/confirmation.png';

const ServiceHow = () => {
    return (
        <section>
            <div className="heading">
                <span className='small'>how it works</span>
                <h4>booking a service takes 3 working steps</h4>
                <p>
                    Non pellentesque in nisi etiam etiam. Curabitur nunc feugiat rutrum sit. Nunc eu id dui aliquam consectetur dis.
                </p>
            </div>
            <div className="container">
                <div className="how-row">
                    <HowCol
                        img={img}
                        title={"Choose Service"}
                        content={"Aliquet arcu dui fermentum a enim sed penatibus tortor. Ac sagittis tincidunt"}
                    />
                    <HowCol
                        img={img2}
                        title={"get quote"}
                        content={"Aliquet arcu dui fermentum a enim sed penatibus tortor. Ac sagittis tincidunt"}
                    />
                    <HowCol
                        img={img3}
                        title={"virtual meeting"}
                        content={"Aliquet arcu dui fermentum a enim sed penatibus tortor. Ac sagittis tincidunt"}
                    />
                    <HowCol
                        img={img4}
                        title={"confirmation"}
                        content={"Aliquet arcu dui fermentum a enim sed penatibus tortor. Ac sagittis tincidunt"}
                    />
                </div>
            </div>
        </section>
    )
}

export default ServiceHow
