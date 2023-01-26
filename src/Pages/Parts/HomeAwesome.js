import React from 'react';
import AwesomeClients from './AwesomeClients';
import img from '../../images/client-1.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const HomeAwesome = () => {
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
                items: 1.065
            }
        }
    }
    return (
        <section>
            <div className="heading">
                <h2>some of our awesome clients</h2>
            </div>
            <div className="container">
                <OwlCarousel {...options} className='owl-carousel owl-theme sec-2'>
                    <AwesomeClients name="Name" dest="Seo Expert" company="XYZ Company" content="Faucibus scelerisque suspendisse eget ut duis viverra velit sagittis. Consequat at sed risus massa ac. Mollis dolor ultricies ultrices tortor. Adipiscing neque donec scelerisque diam sem. Tincidunt dui sed morbi non vulputate eu facilisis diam tincidunt." image={img} />
                    <AwesomeClients name="Name" dest="Seo Expert" company="XYZ Company" content="Faucibus scelerisque suspendisse eget ut duis viverra velit sagittis. Consequat at sed risus massa ac. Mollis dolor ultricies ultrices tortor. Adipiscing neque donec scelerisque diam sem. Tincidunt dui sed morbi non vulputate eu facilisis diam tincidunt." image={img} />
                    <AwesomeClients name="Name" dest="Seo Expert" company="XYZ Company" content="Faucibus scelerisque suspendisse eget ut duis viverra velit sagittis. Consequat at sed risus massa ac. Mollis dolor ultricies ultrices tortor. Adipiscing neque donec scelerisque diam sem. Tincidunt dui sed morbi non vulputate eu facilisis diam tincidunt." image={img} />
                    <AwesomeClients name="Name" dest="Seo Expert" company="XYZ Company" content="Faucibus scelerisque suspendisse eget ut duis viverra velit sagittis. Consequat at sed risus massa ac. Mollis dolor ultricies ultrices tortor. Adipiscing neque donec scelerisque diam sem. Tincidunt dui sed morbi non vulputate eu facilisis diam tincidunt." image={img} />
                    <AwesomeClients name="Name" dest="Seo Expert" company="XYZ Company" content="Faucibus scelerisque suspendisse eget ut duis viverra velit sagittis. Consequat at sed risus massa ac. Mollis dolor ultricies ultrices tortor. Adipiscing neque donec scelerisque diam sem. Tincidunt dui sed morbi non vulputate eu facilisis diam tincidunt." image={img} />
                    <AwesomeClients name="Name" dest="Seo Expert" company="XYZ Company" content="Faucibus scelerisque suspendisse eget ut duis viverra velit sagittis. Consequat at sed risus massa ac. Mollis dolor ultricies ultrices tortor. Adipiscing neque donec scelerisque diam sem. Tincidunt dui sed morbi non vulputate eu facilisis diam tincidunt." image={img} />
                </OwlCarousel>
            </div>
        </section>
    )
}

export default HomeAwesome
