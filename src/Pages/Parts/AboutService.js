import React from 'react';
import ServiceHome from './ServiceHome';

const AboutService = () => {
    return (
        <section>
            <div className="heading"><h2>OUR best SERVICES</h2></div>
            <div className="container">
                <div className="service about">
                    <ServiceHome image="https://cdn-icons-png.flaticon.com/512/1378/1378598.png" h3={"SEO"} p="We invent and create beautiful brands, digital products and offer most relevant digital things." class={"bluiesh col-4"} />
                    <ServiceHome image="https://cdn-icons-png.flaticon.com/512/1378/1378598.png" h3={"SEO"} p="We invent and create beautiful brands, digital products and offer most relevant digital things." class={"yellow col-4"} />
                    <ServiceHome image="https://cdn-icons-png.flaticon.com/512/1378/1378598.png" h3={"SEO"} p="We invent and create beautiful brands, digital products and offer most relevant digital things." class={"blue col-4"} />
                    <ServiceHome image="https://cdn-icons-png.flaticon.com/512/1378/1378598.png" h3={"SEO"} p="We invent and create beautiful brands, digital products and offer most relevant digital things." class={"blue col-4"} />
                </div>
            </div>
        </section>
    )
}

export default AboutService
