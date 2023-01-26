import React from 'react';
import Heading from '../Heading';
import img from '../../images/member.png';
import Member from './Member';

const AboutGang = () => {
    return (
        <section>
            <Heading para="know more" h2="about our Gang members" />
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Member img={img} name="“Andrew Tate”" about="Full stack Developer" />
                    </div>
                    <div className="col-md-3">
                        <Member img={img} name="“Andrew Tate”" about="Full stack Developer" />
                    </div>
                    <div className="col-md-3">
                        <Member img={img} name="“Andrew Tate”" about="Full stack Developer" />
                    </div>
                    <div className="col-md-3">
                        <Member img={img} name="“Andrew Tate”" about="Full stack Developer" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutGang
