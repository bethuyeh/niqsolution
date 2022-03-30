import React, { useState } from 'react';
import './footer.css';
import Footer from './Footer';
import FooterSuccess from './FooterSuccess';

const ContactFooter = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(!isSubmitted);
  }
  return (
    <>
      <div className='form-container'>
        {isSubmitted ? (
            <FooterSuccess />
        ) : (
          
          <Footer submitForm={submitForm} />
        )}
      </div>
    </>
  );
};

export default ContactFooter;
