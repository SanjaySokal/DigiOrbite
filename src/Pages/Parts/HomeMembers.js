import React from 'react';
import Heading from '../Heading';
import img from '../../images/member.png';
import Member from './Member';

const HomeMembers = () => {
    return (
        <section>
            <Heading para="know more" h2="about our Gang members" />
            <div className="container">
                <div className="member-row">
                    <Member img={img} name="“Andrew Tate”" about="Full stack Developer" />
                    <Member img={img} name="“Andrew Tate”" about="Full stack Developer" />
                    <Member img={img} name="“Andrew Tate”" about="Full stack Developer" />
                </div>
                <div className="who-we-are">
                    <h1>
                        WHO WE ARE ?
                    </h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus velit voluptatum eum sit cupiditate, consectetur maxime eligendi veniam perferendis est natus iste nisi ullam odio fugiat quos expedita at nesciunt quae! Laboriosam, dolores necessitatibus ullam saepe laudantium eligendi at placeat asperiores error expedita amet molestiae hic, atque ducimus debitis nulla, sit rerum voluptatibus rem eaque cupiditate facilis illum nostrum fugiat! Dignissimos minus nisi, amet cum possimus repellendus? Temporibus, veritatis eligendi!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default HomeMembers
