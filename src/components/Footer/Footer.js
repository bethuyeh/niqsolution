import React from 'react'
import './footer.css'
// import {NavLink} from 'react-router-dom'
// import useForm from './useForm'
// import validate from './validateInfo'


const Footer = () => {
  // const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);
  


   
  return (
    
        <div>
     
            <section id="contact">
      <div className="container">
          <h1>Get in Touch</h1>
          <div className=" footer-contact">
          {/* <div className=" form">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <input 
              id= "name"
              type="text" 
              name="name"
              className="form-control" 
              placeholder="Your Name"
              value = {values.name}
              onChange = {handleChange}
              />
              {errors.name && <p>{errors.name}</p>}
          </div>  

          <div className="form-group">
            <input 
              id="number"
              type="number" 
              name="number"
              className="form-control" 
              placeholder="Phone no"
              value = {values.number}
              onChange = {handleChange}
              />
              {errors.number && <p>{errors.number}</p>}
          </div>

          <div className="form-group">
            <input 
              id='email'
              type="email" 
              name='email'
              className="form-control" 
              placeholder="Email id"
              value = {values.email}
              onChange = {handleChange}
              />
              {errors.email && <p>{errors.email}</p>}
          </div>

          <div className="form-group">
          <textarea 
              id='message'
              type="text" 
              name='message'
              className="form-control" 
              value = {values.message}
              onChange = {handleChange}
              rows="4" 
              placeholder="Message"></textarea>
              {errors.message && <p>{errors.message}</p>}
          </div>

          <button type="submit" className="btn btn-primary" onSubmit={()=> setShow(!show)} >SEND MESSAGE
        </button>
      </form>
      </div> */}
          <div className=" contact-info">
          <div className="follow"><b>UK Address</b> <i className="fa fa-map-marker"></i> 71-75 Shelton Street, Convent Garden, London, WC2H 9JQ</div>
          <div className="follow"><b>Nigeria Address:</b><i className="fa fa-map-marker"></i> Oladipo Diya Street, Apo Dutse, 110001 Abuja, Nigeria.</div>
         <div className="follow"><b>Phone:</b> <i className="fa fa-map-envelope-o"></i> +44(0)2033761345</div>
         {/* <div className="follow"> */}
         {/* <label><b>Get Social:</b></label> */}
         
          {/* <NavLink to='/'><i className="fa fa-facebook"></i></NavLink>
          <NavLink to='/'><i className="fa fa-youtube-play"></i></NavLink>
          <NavLink to='/'><i className="fa fa-twitter"></i></NavLink>
          <NavLink to='/'><i className="fa fa-google-plus"></i></NavLink> */}
          
          {/* </div> */}
        </div>
      </div>
      </div>
      <div style={{borderTop:"0.5px solid rgba(255, 255, 255, 0.164)", marginTop: "15px"}}></div>
      <div style={{ marginLeft:"7.5vw", marginTop:"10px"}}>NIQ © {new Date().getFullYear()}</div>
    </section>
        </div>
  ) 
}

export default Footer;