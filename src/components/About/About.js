import React from 'react'
import maleAbout from '../../Images/maleAbout.png'
import './About.css'

const About = () => {
  return (
        <div className="about-section" id="about">

            <div className="about-text">
                <h2>About Us</h2>
                <blockquote>
                NIQ solutions is a global integrated managed service solutions providing company with 
                catering for the IT , Energy and Mining, Oil and gas and financial industry.
                </blockquote>
            </div>

            <div className="about-image">
                <img src={maleAbout} alt="img-here"/>
            </div> 
        </div>
)
}

export default About