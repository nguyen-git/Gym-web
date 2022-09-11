import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'
import {BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer'>
        <hr />
        <div className="blur footer-blur-left"></div>
        <div className="blur footer-blur-right"></div>
        <div className="footer-icon">
            <BsGithub />
            <BsInstagram />
            <BsLinkedin />
        </div>
        <div className="footer-logo">
            <img src={logo} alt="" />
        </div>
    </div>
  )
}

export default Footer