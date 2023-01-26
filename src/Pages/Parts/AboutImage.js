import React from 'react'
import AboutImageBox from './AboutImageBox'

const AboutImage = () => {
    return (
        <div className='about-img'>
            <div className="container">
                <div className="image-here">
                    <div className='image-content'>
                        <AboutImageBox h2="99" span="%" h4="Data Accuracy" p="Body Heading.. Lacinia consectetur velit natoque vel. Scelerisque ornare" />
                        <AboutImageBox h2="100" span="+" h4="Projects Done" p="Body Heading.. Lacinia consectetur velit natoque vel. Scelerisque ornare" />
                        <AboutImageBox h2="500" span="+" h4="HappyClients" p="Body Heading.. Lacinia consectetur velit natoque vel. Scelerisque ornare" />
                        <AboutImageBox h2="20" span="+" h4="Products" p="Body Heading.. Lacinia consectetur velit natoque vel. Scelerisque ornare" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutImage
