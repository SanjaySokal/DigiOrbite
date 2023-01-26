import React from 'react'
import { Link } from 'react-router-dom'

const HomeBanner = () => {
    return (
        <div className="banner-img">
            <div className='banner'>
                <div className="container">
                    <div className="content-banner">
                        <h1>
                            Helping Businesses and Brands in their
                            <span> Digital Growth</span>
                        </h1>
                        <Link to={'/'} className="btn btn-primary">GET IN TOUCH <i className="fa-solid fa-arrow-right"></i></Link>
                        <div>
                            <Link to={'/'} className={'link'}>Learn how can we help you <i className="fa-solid fa-chevron-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner
