import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v4u43mm', 'template_oyahty1', form.current, 'OQ2Xk8fWJJDpx3mmY')
    
    e.target.reset();
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>roshanoraon3939@gmail.com</h5>
            <a href='mailto:roshanoraon3939@gmail.com' target='_blank'>Send A Mail</a>
          </article>

          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 900*******</h5>
            <a href='http://wa.me/919006360175' target='_blank'>Send A Message</a>
          </article>

          <article className='contact_option'>
            <BsLinkedin className='contact_option-icon' />
            <h4>Linkedin</h4>
            <h5>roshan-oraon</h5>
            <a href='https://www.linkedin.com/in/roshan-oraon/' target='_blank'>Send A Message</a>
          </article>
        </div>
        {/* End of Contact Options */}

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
