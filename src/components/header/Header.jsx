import React from 'react'
import './header.css'
import './CTA'
import ME from '../../assests/profile.jpg'
import CTA from './CTA'
import Ta from './Tags'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
     <header id='head'>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1> Roshan Oraon</h1>
        <Ta />
        <CTA />
        <HeaderSocials />
        <div className="container_me">
          <div className="card">
             <img src={ME} alt="" />
          </div>
        </div>

        {/* <div className='me'>
          <img src={ME} alt='asas' />
        </div> */}

       
        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
     </header>
  )
}

export default Header
