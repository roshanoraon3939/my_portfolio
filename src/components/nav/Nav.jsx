import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#head')
  return (
    <nav>
      <a href="#head" onClick={() => setActiveNav('#head')} className={activeNav === '#head' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#education" onClick={() => setActiveNav('#education')} className={activeNav === '#education'?'active':''}><BiBook/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services'?'active':''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact'?'active':''}><BiMessageSquareDetail/></a>
   
      {/* <a href="#"  className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about"  ><AiOutlineUser/></a>
      <a href="#experience"  ><BiBook/></a>
      <a href="#services"  ><RiServiceLine/></a>
      <a href="#contact" ><BiMessageSquareDetail/></a> */}
    
    </nav>
  )
}

export default Nav
