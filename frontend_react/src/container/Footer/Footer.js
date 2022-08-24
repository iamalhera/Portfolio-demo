import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss' ;

const Footer = () => {
  const [formData, setFormData] = useState({name: '',email:'', message:''}) ;
  const [isFormSubmitted, setIsFormSubmitted] = useState(false) ;
  const [loading, setLoading] = useState(false);

  const {name, email, message} = formData ;

  const handleChangeInput = (e) =>{
    const {name, value} = e.target ;

    setFormData({...formData, [name]: value });

  }
  // const handleSubmit = () =>{
  //   setLoading(true);
  //   const contact = {}
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm('service_gf7hjza', 'template_ldb0h4d', formData, 'DY_bQPRv-zM-MHn4j')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      setLoading(false);
  };


  return (
    <>
    <h2 className='head-text'>Contact with Me</h2>
    <div className='app__footer-cards'>
      <div className='app__footer-card'>
        <img src={images.email} alt="email" />
        <a href="mailto:alheraahmad0786@gmail.com" className='p-text'>Email Address</a>
      </div>
      <div className='app__footer-card'>
        <img src={images.mobile} alt="email" />
        <a href="tel: +91 6392840498" className='p-text'>Phone Number</a>
      </div>
    </div>

    <div className="app__footer-form app__flex">
      <div className="app__flex">
        <input className='p-text' type="text" placeholder='Your Name' name="name" value={name} onChange={handleChangeInput} />
      </div>
      <div className="app__flex">
        <input className='p-text' type="email" placeholder='Your Email' name="email" value={email} onChange={handleChangeInput} />
      </div>
      <div>
        <textarea
        className='p-text'
        placeholder='Your Message'
        value={message}
        name="message"
        onChange={handleChangeInput}
        ></textarea>
      </div>
      <button className="p-text" type="button" onClick={handleSubmit}>{loading ? 'SENDING':'SENT MESSAGE'}</button>
    </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg'
);