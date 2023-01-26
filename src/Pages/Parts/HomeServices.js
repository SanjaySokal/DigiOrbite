import React from 'react'
import ServiceHome from './ServiceHome'

const HomeServices = () => {
    return (
        <section>
            <div className="heading">
                <h2>our services</h2>
                <h4>We Offer <span>Best Service</span> to our customers</h4>
                <p>We working hard to provide the best quality for you and we never choose easy and faster way to quickly break up with your project.</p>
            </div>
            <div className="container">
                <div className="service">
                    <ServiceHome image="https://cdn-icons-png.flaticon.com/512/1378/1378598.png" h3={"SEO"} p="We invent and create beautiful brands, digital products and offer most relevant digital things." class={"bluiesh"} link="/service/web-development" />
                    <ServiceHome image="https://cdn-icons-png.flaticon.com/512/1378/1378598.png" h3={"SEO"} p="We invent and create beautiful brands, digital products and offer most relevant digital things." class={"yellow"} link="/service/web-development" />
                    <ServiceHome image="https://cdn-icons-png.flaticon.com/512/1378/1378598.png" h3={"SEO"} p="We invent and create beautiful brands, digital products and offer most relevant digital things." class={"blue"} link="/service/web-development" />
                    <ServiceHome image="https://cdn-icons-png.flaticon.com/512/1378/1378598.png" h3={"SEO"} p="We invent and create beautiful brands, digital products and offer most relevant digital things." class={"brown"} link="/service/web-development" />
                    <ServiceHome image="https://cdn-icons-png.flaticon.com/512/1378/1378598.png" h3={"SEO"} p="We invent and create beautiful brands, digital products and offer most relevant digital things." class={"bluiesh"} link="/service/web-development" />
                    <ServiceHome image="https://cdn-icons-png.flaticon.com/512/1378/1378598.png" h3={"SEO"} p="We invent and create beautiful brands, digital products and offer most relevant digital things." class={"red"} link="/service/web-development" />
                </div>
            </div>
        </section>
    )
}

export default HomeServices
