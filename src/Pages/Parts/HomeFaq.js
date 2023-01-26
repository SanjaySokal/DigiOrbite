import React from 'react';
import Heading from '../Heading';
import FaqItem from './FaqItem';
import img from '../../images/faq.png';

const HomeFaq = () => {
    return (
        <section>
            <Heading para="checkout some of our" h2="faq’s" />
            <div className="container">
                <div className="row faq-section">
                    <div className="col-md-12 col-lg-6">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading1">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">Accordion Item #1</button>
                                </h2>
                                <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the, though the transition does limit overflow.</div>
                                </div>
                            </div>
                            <FaqItem id="2" question="Accordion Item #2" answer="It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the, though the transition does limit overflow." />
                            <FaqItem id="3" question="Accordion Item #3" answer="It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the, though the transition does limit overflow." />
                            <FaqItem id="4" question="Accordion Item #4" answer="It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the, though the transition does limit overflow." />
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <img src={img} className="w-100" title='DigiOrbite FAQ`s' alt="DigiOrbite FAQ`s" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeFaq
