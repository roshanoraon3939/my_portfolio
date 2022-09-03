import React from 'react'
import './experience.css'
import {BsPatchCheckFill } from 'react-icons/bs'

const Education = () => {
  return (
    <section id='education'>
      <h5>From Where I Come</h5>
      <h2>My Education</h2>

      <div className='container experience_container'>

        <div className='experience_frontend'>
          <h3> Birla Institute Of Technology , Mesra .</h3>
          <div className='experience_content'>

            <article className='experience_details'>
              <BsPatchCheckFill  className='experience_details-icons' />
              <div>
                <h4>B.Tech - Computer Science Engineering</h4>
                <small className='text-light'>
                <ul>
                    <li>July 2019 - (Expected )August 2023</li>
                    <li>C.G.P.A. - 8.51</li>
                  </ul>
                </small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience_frontend'>
          <h3> Saint Xavier's School , Hazaribagh .</h3>
          <div className='experience_content'>

            <article className='experience_details'>
              <BsPatchCheckFill  className='experience_details-icons' />
              <div>
                <h4>CBSE( Central Board of Secondary Education),  Class XII </h4>
                <small className='text-light'>
                <ul>
                    <li>March 2018 - March 2019</li>
                    <li>Percentage - 86.5%</li>
                  </ul>
                </small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience_frontend'>
          <h3> Saint Xavier's School , Hazaribagh . </h3>
          <div className='experience_content'>

            <article className='experience_details'>
              <BsPatchCheckFill  className='experience_details-icons' />
              <div>
                <h4>CBSE( Central Board of Secondary Education),  Class X </h4>
                <small className='text-light'>
                  <ul>
                    <li>March 2016 - March 2017</li>
                    <li>C.G.P.A. - 10.0</li>
                  </ul>
                </small>
              </div>
            </article>
          </div>
        </div>

        

      </div>
    </section>
  )
}

export default Education
