import React from 'react'
import './Footer.scss'
import { motion } from 'framer-motion'
import {images} from '../../constants'
import {AppWrap, MotionWrap} from '../../wrapper'
import {client} from '../../client'
import { useState } from 'react'

const Footer = () => {

  const [formData, setFormData]=useState({name:'',email:'',message:''})
  const [isFormSubmitted, setIsFormSubmitted]=useState(false)
  const [loading, setLoading]=useState(false)

  const {name,email,message}=formData;

  const handleChangeInput=(e)=>{
    const{name,value}=e.target;
    setFormData({...formData,[name]:value})
  }

  const handleSubmit=()=>{
    setLoading(true);

    const contact={
      _type:'contact',
      name:name,
      email:email,
      message:message,
    }
    client.create(contact)
    .then(()=>{
      setLoading(false);
      setIsFormSubmitted(true);
    })
  }


  return (
    <>
        <h2 className="head-text">Chat with Me</h2>
        <div className='app__footer-cards'>
          <div className="app__footer-card">
            <img src={images.email} alt="email" />
            <a href="mailto:aashish1111@gmail.com"  className='p-text'>aashishupreti1111@gmail.com</a>
          </div>
          <div className="app__footer-card">
            <img src={images.mobile} alt="email" />
            <a href="tel:+1(123)456-789"  className='p-text'>+1(123)456-789</a>
          </div>
        </div>

      {!isFormSubmitted ?
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input type="text" className="p-text" placeholder='Your Name' value={name} name='name' onChange={handleChangeInput}/>
          </div>
          <div className="app__flex">
            <input type="email" className="p-text" placeholder='Your Email' value={email} name='email' onChange={handleChangeInput}/>
          </div>
          <div>
            <textarea className='p-text'
              placeholder='Your Message'
              value={message}
              name='message'
              onChange={handleChangeInput}
            />
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'SENDING':'SEND MESSAGE'}</button>
        </div>
      :<div >
        <h3 className='head-text'>Thank you For getting in touch!</h3>
      </div>
      
      }
    </>
  )
}

export default AppWrap(MotionWrap(Footer,'app__footer'),'contact','app__whitebg')