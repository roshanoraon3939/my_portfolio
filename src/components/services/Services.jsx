import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What Skills I Have</h5>
      <h2> Services</h2>

      <div className='container services_container'>
        <article className='services'>
          <div className='service_head'>
            <h3> PROGRAMMING SKILLS </h3>
          </div>
          
          <ul className='service_list'>
            <li>
            <BiCheck className='service_list-icon'/>
            <p> C/C++ </p>
            </li>

            <li>
            <BiCheck className='service_list-icon'/>
            <p> ANDROID DEVELOPMENT (FLUTTER) </p>
            </li>

            <li>
            <BiCheck className='service_list-icon'/>
            <p> HTML / CSS / BOOTSTRAP </p>
            </li>

            <li>
            <BiCheck className='service_list-icon'/>
            <p> GIT / GITHUB </p>
            </li>

            <li>
            <BiCheck className='service_list-icon'/>
            <p> JAVASCRIPT / REACTJS</p>
            </li>

            <li>
            <BiCheck className='service_list-icon'/>
            <p> SQL </p>
            </li>
          </ul>
        </article>
        {/* ------web development------------ */}
        <article className='services'>
          <div className='service_head'>
            <h3> COURSEWORKS </h3>
          </div>
          
          <ul className='service_list'>
            <li>
            <BiCheck className='service_list-icon'/>
            <p> OPERATING SYSTEM </p>
            </li>

            <li>
            <BiCheck className='service_list-icon'/>
            <p> DATABASE MANAGEMENT SYSTEM </p>
            </li>

            <li>
            <BiCheck className='service_list-icon'/>
            <p> DESIGN OF ALGORITHUM AND ANALYSIS </p>
            </li>

            <li>
            <BiCheck className='service_list-icon'/>
            <p> DATA STRUCTURE </p>
            </li>

            <li>
            <BiCheck className='service_list-icon'/>
            <p> OBJECT ORIENTED PROGRAMMING </p>
            </li>

          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services
