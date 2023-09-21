import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What Skills I Have</h5>
      <h2> Services</h2>

      <div className='container services_container'>
        <article className='services'>
          <div className='service_head'>
            <h3>WEB DEVELOPMENT TECHNOLOGIES </h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p> C / C++ </p>
            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p> Android Development ( Flutter) </p>
            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p> Html / CSS / Bootstrap / TailWind</p>
            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>PostgreSQL / SQL </p>
            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>Javascript / ReactJs</p>
            </li>
          </ul>
        </article>

        {/* ------web development------------ */}
        <article className='services'>
          <div className='service_head'>
            <h3> FAMILIAR WITH </h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p> Git / Github </p>
            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>Visual Studio Code</p>
            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p> Postman </p>
            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p> TablePlus</p>
            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>Android Studio</p>
            </li>

          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services
