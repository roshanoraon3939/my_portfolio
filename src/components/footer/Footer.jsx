import React from 'react'
import './footer.css'
import {BsWhatsapp} from 'react-icons/bs'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const footer = () => {
  return (
    <footer>
      <a href='#head' className='footer_logo'>Resume</a>
   

      <ul className='permalinks'>
        <li><a href='#head'>HOME</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#education'>Education</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        {/* <li><a href='#testimonials'>Testimonials</a></li> */}
        <li><a href='#contacts'>Contacts</a></li>
      </ul>

      <div className='footer_socials'>
      <a href='http://wa.me/919006360175' target='_blank'><BsWhatsapp /></a>
      <a href='mailto:roshanoraon3939@gmail.com' target='_blank'><MdOutlineEmail /></a>
      <a href='https://www.linkedin.com/in/roshan-oraon/' target='_blank'><BsLinkedin /></a>
      <a href='https://github.com/roshanoraon3939' target='_blank'><FaGithub /></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; Roshan Oraon's Personal Profile. All rights reserved. </small>
      </div>
    </footer>
  )
}

export default footer
