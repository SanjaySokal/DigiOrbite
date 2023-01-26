import React from 'react';
import Heading from '../Heading';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img from '../../images/back-inner-slider-1.jpg';
import client from '../../images/company-inner-1.png';
import ServiceInnerPageSilderItem from './ServiceInnerPageSilderItem';

const ServiceInnerProjects = () => {
    var options = {
        nav: true,
        margin: 35,
        loop: true,
        dots: true,
        navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            769: {
                items: 1.08
            }
        }
    }
    return (
        <section>
            <Heading para="we have done these" h2="projects" />
            <div className="container">
                <div className="container">
                    <OwlCarousel {...options} className='owl-carousel owl-theme service-inner'>
                        <ServiceInnerPageSilderItem
                            img={img}
                            h2="Web development project 1"
                            p="Eget vel nisi tincidunt enim metus dolor orci aliquam enim. Aliquet euismod nullam nunc nunc quisque. Senectus viverra habitasse elit tristique in vulputate tristique. Volutpat in vitae netus velit. Sem nibh vitae lacus non elit. Sem amet nunc sed scelerisque pretium aliquam. Diam purus non diam convallis tellus aliquam."
                            client={client}
                            company="company name"
                        />
                        <ServiceInnerPageSilderItem
                            img={img}
                            h2="Web development project 1"
                            p="Eget vel nisi tincidunt enim metus dolor orci aliquam enim. Aliquet euismod nullam nunc nunc quisque. Senectus viverra habitasse elit tristique in vulputate tristique. Volutpat in vitae netus velit. Sem nibh vitae lacus non elit. Sem amet nunc sed scelerisque pretium aliquam. Diam purus non diam convallis tellus aliquam."
                            client={client}
                            company="company name"
                        />
                        <ServiceInnerPageSilderItem
                            img={img}
                            h2="Web development project 1"
                            p="Eget vel nisi tincidunt enim metus dolor orci aliquam enim. Aliquet euismod nullam nunc nunc quisque. Senectus viverra habitasse elit tristique in vulputate tristique. Volutpat in vitae netus velit. Sem nibh vitae lacus non elit. Sem amet nunc sed scelerisque pretium aliquam. Diam purus non diam convallis tellus aliquam."
                            client={client}
                            company="company name"
                        />
                    </OwlCarousel>
                </div>
            </div>
        </section>
    )
}

export default ServiceInnerProjects
