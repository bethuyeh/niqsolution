import React from 'react'
import './Services.css'
// Images
import dataSecurity from '../../Images/dataSecurity.svg'
import softwareEngineer from '../../Images/softwareEngineer.svg'
import digitalSecurity from '../../Images/digitalSecurity.svg'
import productEngineering from '../../Images/productEngineering.svg'
import businessAppropriation from '../../Images/businessAppropriation.jpg'
import dataOrganisation from '../../Images/dataOrganisation.jpg'
import dataSecurityImage from '../../Images/dataSecurityImage.jpg'
import dataInvestment from '../../Images/dataInvestment.jpg'

import {AiOutlineArrowRight} from 'react-icons/ai'



const Services = () => {


  return (
        <div className='services'>
            <div className='compartment-one'>
                <h2>What We Do</h2>
                <p>We assist clients in using data to solve real-world problems. Our strategy focuses on establishing value based gorvenance, implementing a results-driven product approach to data initiative and 
                establishing the competences and culture required to become a data-driven business.</p>
                
                <div className='grid-items'>
                     <div className='card-two'>
                        <img src= {dataSecurity} alt="imghere"/>
                        <div className='card-content' >
                            <h4>Data Security</h4>
                            <p>We ensure security posture through proactive monitoring by using the best tools and processes.</p>
                        </div>
                    </div>

                    <div className='card-two'>
                        <img src = {softwareEngineer} alt="imghere" />
                        <div className='card-content'>
                            <h4>Software Engineering</h4>
                            <p>We specialise in handling the design, prototype, development and support of your web and software applications.</p>
                        </div>
                    </div>



                    <div className='card-two'>
                        <img src = {productEngineering} alt="imghere" />
                        <div className='card-content'>
                            <h4>Product Design/ UI/UX</h4>
                            <p>We provide budget friendly yet effective UX strategies, graphics and corperate designs.  </p>
                        </div>
                    </div>

                    <div className='card-two'>
                        <img src = {digitalSecurity} alt="imghere"/>
                        <div className='card-content'>
                            <h4>Digital Marketing</h4>
                            <p>Promote, Manage and expand your brand and innovation using proven and tested modern techniques.</p>
                        </div>
                    </div>
                 </div>

            </div>
            <div className='compartment-two'>
                <button >
                <a href="#contact" className="learn">Learn More</a>
                <AiOutlineArrowRight style={{fontWeight: 600}}/></button>
            </div>

            <div className="compartment-three">

                <div className="compart-three-content">
                    <img src={businessAppropriation} alt="imghere"/>
                    <div className="compart-three-text">
                        <h4>Businesss Appropriation</h4>
                        <blockquote>
                        To determine the appropriate 
                        technological decisions and investments 
                        needed to support future data capabilities.
                        </blockquote>
                    </div>
                </div>

                <div className="compart-three-content">
                    <img src = {dataOrganisation} alt="imghere"/>
                    <div className="compart-three-text">
                        <h4>Data Organisation</h4>
                        <blockquote>
                        Create a word-class data organisation 
                        and culture, and teach employees how 
                        to use data as a decision-
                        making tool on a daily basis.
                        </blockquote>
                    </div>
                </div>

                <div className="compart-three-content">
                    <img src = {dataSecurityImage} alt="img-here"/>
                    <div className="compart-three-text">
                        <h4>Data Security</h4>
                        <blockquote >
                        We create world-class data organisation 
                        and culture whilst teaching employees the 
                        use of data as a decision-
                        making tool on a daily basis.
                        </blockquote>
                    </div>
                </div>

                <div className="compart-three-content">
                    <img src={dataInvestment} alt="img-here"/>
                    <div className="compart-three-text">
                    <h4>Data Investment</h4>
                    <blockquote>
                    We create successful data 
                    strategies and grasp the importance 
                    of data to aquire business, 
                    ensuring data investments pay off.
                    </blockquote>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Services