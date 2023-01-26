import React from 'react';
import img2 from '../images/contact.png';
import PageBanner from './PageBanner';
import ContactForm from './Parts/ContactForm';
import ContactLocations from './Parts/ContactLocations';
import ContactPageBox from './Parts/ContactPageBox';
import ContactSocial from './Parts/ContactSocial';

const Contact = () => {
    return (
        <>
            <PageBanner top={[]} logo={'@'} h2={"Contact US"} h4={"We will help you realise your idea"} p={"Leo volutpat amet pulvinar viverra leo velit aliquam. Vel risus lacus hendrerit sagittis ultrices aliquam urna et. Nunc dui ut pellentesque massa."} img={img2} />
            <ContactPageBox />
            <ContactForm />
            <ContactSocial />
            <ContactLocations />
        </>
    )
}

export default Contact
