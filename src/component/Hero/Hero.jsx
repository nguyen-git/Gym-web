import React from 'react'
import { motion } from 'framer-motion'
import Header from '../Header/Header'
import './hero.css'
import heroImage from '../../assets/hero_image.png'
import heroImageBack from '../../assets/hero_image_back.png'
import heartImage from '../../assets/heart.png'
import caloriesImage from '../../assets/calories.png'

const Hero = () => {
  const transition = { type: 'spring', duration: 2}
  return (
    <div className='hero'>
      <div className='blur hero-blur'></div>
      <div className="left-h">
        <Header />
        {/* Best ad */}
        <div className="the-best-ad">
          <motion.div 
            initial={{left:'200px'}}
            whileInView={{left:'8px'}}
            transition={{...transition, type: 'tween'}}
            className="the-best-ad_children"
          ></motion.div>
          <span className="the-best-ad_text">The Best Fitness Club In The World</span>
        </div>

        {/* Hero heading */}
        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape</span>
            <span> Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
          </div>
          </div>
          <div className='hero-benefit'>
            <div>
              <span>+ 140</span>
              <span>Expert Coaches</span>
            </div>
            <div>
              <span>+ 978</span>
              <span>Member Joined</span>
            </div>
            <div>
              <span>+ 50</span>
              <span>Fitness program</span>
            </div>
          </div>
        
        <div className="hero-button">
          <button className="btn-hero">Get Started</button>
          <button className="btn-hero">Learn More</button>
        </div>

      </div>
      <div className="right-h">
        <button className="btn right-h-btn">Join Now</button>

        <motion.div 
          initial={{right:'0'}}
          whileInView={{right:'70px'}}
          transition={{...transition, type: 'tween'}}
          className="heart-rate">
          <img src={heartImage} alt="Heart rate" className='heart-rate-icon'/>
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        <img src={heroImage} alt="hero image" className='hero-image'/>
        <motion.img 
          initial={{right:'11rem'}}
          whileInView={{right:'20rem'}}
          transition={{...transition, type: 'tween'}}
          src={heroImageBack} 
          alt="hero image" 
          className='hero-image-back'/>

      
        <motion.div 
        initial={{right:'37rem'}}
        whileInView={{right:'28rem'}}
        transition={{...transition, type: 'tween'}}
        className="calories">
            <img src={caloriesImage} alt="Calories" className='calories-icon'/>

          <div>
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero