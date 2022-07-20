import React from 'react'
import './about.css'
import {MdSportsEsports} from 'react-icons/md'
import {MdSportsFootball} from 'react-icons/md'
import {AiFillCar} from 'react-icons/ai'

import IMG from './Image'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <IMG />
    
        <div className='about_content'>

          <p>Hi , I am Roshan Oraon. Currently , i'm an Under-Grad student at BIT MESRA , currently pursuing Computer Science and Engineering .<br/><br/>
              Web Development and App development are fields which captivated me . Hence I'm Extremely motivated to constantly develop my skills and grow professionally . I'm also confident in my ability to come up with interesting ideas for solving problems .</p>
          <br />
          <p> What I love to do in my free time . </p>
          
          <div className='about_cards'>
            <article className='about_card'>
              <MdSportsFootball className='about_icon'/>
              <h5>Play Sports</h5>
              <small>Football , Volleyball , Basketball , etc..</small>
            </article>

            <article className='about_card'>
              <MdSportsEsports className='about_icon'/>
              <h5>Play ESports</h5>
              <small>Valorant , Apex Legends , FIFA , etc..</small>
            </article>

            <article className='about_card'>
              <AiFillCar className='about_icon'/>
              <h5>Travel</h5>
              <small>Go to new places , hangout , etc..</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
