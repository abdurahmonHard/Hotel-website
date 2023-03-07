import React from 'react'
import HeadTitle from '../../common/HeadTitle/HeadTitle'
import AboutCard from './AboutCard'

const About = () => {
    return (
    <>
    <HeadTitle/>
        <section className='about top'>
            <div className='container'>
                <AboutCard/>
            </div>
        </section>
        <section className='features top'>
            <div className='container aboutCard flex_space'>
                <div className='row row1'>
                    <h1>Our <span>Features</span></h1>
                    <p>Lorem ipsum dollor sit amet consektetur adipsing alit amet concectetur dgfdfgdfgfgdfg gd gdf dg  dgdg g g dfg fgd gd gd gd fgd gdf dg dg g dg gdgd gd gdgd g fdgdfgdfg dg gd g</p>
                    <p>Lorem ipsum dollor sit amet consektetur adipsing alit amet concectetur</p>
                    <button className='secondary-btn'>
                        Explore More <i className='fas fa-long-arrow-alt-right'></i>
                    </button>
                </div>
                <div className='row image'>
                    <img src='/images/feature-img-1.jpg' alt=''/>
                    <div className='control-btn'>
                        <button className='prev'>
                            <i className='fas fa-play'></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About