import React from 'react';
import Heading from '../Heading';
import img1 from '../../images/project-1.jpg';
import img2 from '../../images/project-2.jpg';
import img3 from '../../images/project-3.jpg';
import WorkedHome from './WorkedHome';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const HomeWorked = () => {
    var options = {
        nav: true,
        loop: true,
        margin: 25,
        dots: false,
        navText: ["<i class='fa-solid fa-chevron-right'></i>", "<i class='fa-solid fa-chevron-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            769: {
                items: 2.5
            }
        }
    }
    return (
        <section>
            <Heading para="PROJECTS WE HAVE" h2="WORKED ON" />
            <div className="container">
                <div className="worked-on">
                    <OwlCarousel {...options} className='owl-carousel owl-theme sec-1'>
                        <WorkedHome img={img1} head="SEO Services" link="/" />
                        <WorkedHome img={img2} head="UI/UX &Graphic Designing" link="/" />
                        <WorkedHome img={img3} head="1" link="/" />
                        <WorkedHome img={img1} head="2" link="/" />
                        <WorkedHome img={img2} head="3" link="/" />
                        <WorkedHome img={img3} head="4" link="/" />
                        <WorkedHome img={img1} head="5" link="/" />
                        <WorkedHome img={img2} head="6" link="/" />
                        <WorkedHome img={img3} head="7s" link="/" />
                        <WorkedHome img={img1} head="8" link="/" />
                    </OwlCarousel>
                </div>
            </div>
        </section >
    )
}

export default HomeWorked
