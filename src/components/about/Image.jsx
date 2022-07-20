import React from 'react'
import './image.css'
import ME from'../../assests/profile1.jpg'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const image = () => {
  return (
    <>
        <div className="col-lg-4 employee-1">
        <div className="employee">
          <div className="employee-image">
            <img src={ME} className="img-fluid d-block m-auto" alt="employee" />
            </div>
          <div className="employee-details">
            <div className="employee-social-link">
                <ul>
                  <li><a href='http://wa.me/919006360175' target='_blank'><BsWhatsapp /></a></li>
                  <li><a href='mailto:roshanoraon3939@gmail.com' target='_blank'><MdOutlineEmail /></a></li>
                  <li><a href='https://www.linkedin.com/in/roshan-oraon/' target='_blank'><BsLinkedin /></a></li>
                  <li><a href='https://github.com/roshanoraon3939' target='_blank'><FaGithub /></a></li>
              </ul>
          </div>
          </div>
        </div>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
    </>
  )
}

export default image
