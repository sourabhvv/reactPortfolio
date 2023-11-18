import React from 'react'
import './Header.css'
import CTA from './CTA'
import background from '../../assets/mysite_background.png'
import {AiFillLinkedin } from 'react-icons/ai';
import HeaderSocial from './HeaderSocial';
const Header = () => {
  return (

    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Sourabh Verma</h1>
        <h5 style={{color:'black'}} className="text-light">Full Stack Developer</h5>
        <CTA/>
        <HeaderSocial/>
        

       <a href="#contact" className='scroll__down'>scroll down</a>
      </div>
    </header>
  )
}

export default Header