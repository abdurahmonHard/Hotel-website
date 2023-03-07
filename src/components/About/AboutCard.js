import React from 'react'
import "./About.css"

const AboutCard = () => {         
    return (
        <>
            <div className='aboutCard mtop flex_space'>
                <div className='row row1'>
                    <h4>About Us</h4>
                    <h1>
                        We <span>provide Solution</span> ti grow your business
                    </h1>
                    <p>Lorem ipsum dollor sit amet consektetur adipsing alit amet concectetur dgfdfgdfgfgdfg gd gdf dg  dgdg g g dfg fgd gd gd gd fgd gdf dg dg g dg gdgd gd gdgd g fdgdfgdfg dg gd g</p>
                    <p>Lorem ipsum dollor sit amet consektetur adipsing alit amet concectetur</p>
                    <button className='secondary-btn'>
                        Explore More <i className='fas fa-long-arrow-alt-right'></i>
                    </button>
                </div>
                <div className='row image'>
                    <img src='/images/about-img-1.jpg' alt=''/>
                    <div className='control-btn'>
                        <button className='prev'>
                            <i className='fas fa-play'></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutCard












































