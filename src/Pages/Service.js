import React from 'react';
import ServiceBanner from './Parts/ServiceBanner';
import HomeServices from './Parts/HomeServices';
import AboutTop from './Parts/AboutTop';
import ServiceHow from './Parts/ServiceHow';
import ServiceIndustry from './Parts/ServiceIndustry';
import ServiceWhy from './Parts/ServiceWhy';
import ContactSection from './Parts/ContactSection';
import HomeAwesome from './Parts/HomeAwesome';
import HomeAbout from './Parts/HomeAbout';
import HomeFaq from './Parts/HomeFaq';
import HomeFaqIcons from './Parts/HomeFaqIcons';

const Service = () => {
    return (
        <>
            <ServiceBanner />
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

export default Service
