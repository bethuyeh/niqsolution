import React from 'react'
import thanksimg from '../../Images/thanksimg.svg'
import {NavLink} from 'react-router-dom'
import './footer.css'

const FooterSuccess = () => {

 
  return (
        <div>
            <div>
            <section id="contact">
      <div className="container">
        
          <div className="footer-contact">
          <div className="form">
          <div className="contact-form">
                <h3>We have recieved your request!</h3>
                
                <img src={thanksimg} height="auto" width="400px"/>
            </div>
      </div>
          <div className="contact-info">
          <div className="follow"><b>Address:</b><i className="fa fa-map-marker"></i> Oladipo Diya Street Abuja, Nigeria.</div>
         <div className="follow"><b>Phone:</b> <i className="fa fa-phone"></i> +234</div>
         <div className="follow"><b>Email:</b> <i className="fa fa-map-envelope-o"></i> abc@website.com</div>
         <div className="follow"><label><b>Get Social:</b></label>
          <NavLink to='/'><i className="fa fa-facebook"></i></NavLink>
          <NavLink to='/'><i className="fa fa-youtube-play"></i></NavLink>
          <NavLink to='/'><i className="fa fa-twitter"></i></NavLink>
          <NavLink to='/'><i className="fa fa-google-plus"></i></NavLink></div>
          
          </div>
      </div>
      </div>
    </section>
        </div>
  


        </div>
  )
}

export default FooterSuccess