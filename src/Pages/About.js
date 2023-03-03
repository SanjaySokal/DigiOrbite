import React from 'react';
import img2 from '../images/about-banner.png';
import PageBanner from './PageBanner';
import AboutImage from './Parts/AboutImage';
import AboutTop from './Parts/AboutTop';
// import AboutGang from './Parts/AboutGang';
import AboutService from './Parts/AboutService';
import AboutDigi from './Parts/AboutDigi';
import HomeFaqIcons from "./Parts/HomeFaqIcons";
import AboutVision from "./Parts/AboutVision";

const About = () => {
    return (
        <>
            <PageBanner logo={null} top={["Economical", "Efficient", "Effective"]} h2={"About our company"} h4={"One of the top leading digital marketing agency"} p={"Tortor amet mauris eros enim. Curabitur tincidunt et sollicitudin lorem eu volutpat. In in venenatis elementum est rhoncus suspendisse elementum elit egestas."} img={img2} />
            <AboutImage />
            <AboutTop />
            {/* <AboutGang /> */}
            <AboutService />
            <AboutDigi />
            <AboutVision />
            <HomeFaqIcons />
        </>
    )
}

export default About
