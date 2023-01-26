import React from 'react';
import ServiceInnerBanner from '../Parts/ServiceInnerBanner';
import img from '../../images/web-development.png';
import img2 from '../../images/service-about.png';
import img3 from '../../images/web-dev-1.png';
import ServiceTech from '../Parts/ServiceTech';
import ServiceAbout from '../Parts/ServiceAbout';
import ServiceWhy from '../Parts/ServiceWhy';
import HomeFaq from '../Parts/HomeFaq';
import ServiceInnerDevelopment from '../Parts/ServiceInnerDevelopment';
import ServiceInnerCenter from '../Parts/ServiceInnerCenter';
import ServiceInnerProjects from '../Parts/ServiceInnerProjects';
// import ContactSection from '../Parts/ContactSection';
import HomeFaqIcons from '../Parts/HomeFaqIcons';

const WebDevelopment = () => {
    return (
        <>
            <ServiceInnerBanner h3="Need Help in" h2="Web Development?" p="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" link="/contact" img={img} />
            <ServiceTech />
            <ServiceAbout img={img2} h3="Website Development" p="Web Development refers to the process responsible for the functionality of the websites and can be considered as the primary aspect of a website. Digiorbite is proving itself as Best Website Development Company with the team of highly skilled and experienced developers. We don’t hesitate to walk a mile more when it comes to providing Best Web Development solutions to our clients. We believe in taking immense care to address the details of your business while programing your dream website. Error free and bug-less website has always been our concern while giving Web Development Services." />
            <ServiceInnerProjects />
            <ServiceInnerDevelopment
                heading="services that you can expect in"
                para="web development"
                img={img3} img2={img3} img3={img3}
                h2="Web development part 1"
                h22="Web development part 1"
                h23="Web development part 1"
                p="Mauris arcu vel id tortor netus elementum sit. Dolor turpis eu purus tempor at. Aenean urna turpis egestas ac. Amet lorem ante duis cursus eu vitae sagittis sed. Leo varius maecenas velit augue."
                p2="Mauris arcu vel id tortor netus elementum sit. Dolor turpis eu purus tempor at. Aenean urna turpis egestas ac. Amet lorem ante duis cursus eu vitae sagittis sed. Leo varius maecenas velit augue."
                p3="Mauris arcu vel id tortor netus elementum sit. Dolor turpis eu purus tempor at. Aenean urna turpis egestas ac. Amet lorem ante duis cursus eu vitae sagittis sed. Leo varius maecenas velit augue."
            />
            <ServiceInnerCenter />
            <ServiceWhy />
            <HomeFaq />
            <HomeFaqIcons />
            {/* <ContactSection /> */}
        </>
    )
}

export default WebDevelopment
