import React from 'react';
import ServiceLocationBanner from './Parts/ServiceLocationBanner';
import HomeServices from './Parts/HomeServices';
import AboutTop from './Parts/AboutTop';
import ServiceHow from './Parts/ServiceHow';
import ServiceIndustry from './Parts/ServiceIndustry';
import ServiceWhy from './Parts/ServiceWhy';
import ContactSection from './Parts/ContactSection';
import HomeAwesome from './Parts/HomeAwesome';
import HomeAbout from './Parts/HomeAbout';
import HomeFaqIcons from './Parts/HomeFaqIcons';
import HomeFaq from './Parts/HomeFaq';

const ServiceLocation = () => {
    return (
        <>
            <ServiceLocationBanner />
            <ServiceHow />
            <HomeServices />
            <HomeAbout />
            <ServiceIndustry />
            <AboutTop />
            <HomeAwesome />
            <ServiceWhy />
            <div style={{ display: "none" }} className="reverce-row">
                <ContactSection />
            </div>
            <HomeFaq />
            <HomeFaqIcons />
        </>
    )
}

export default ServiceLocation
