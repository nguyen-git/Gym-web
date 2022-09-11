import React, { useState} from 'react'
import { testimonialsData } from '../../data/testimonialsData'
import { motion } from 'framer-motion'
import './testimonial.css'
import  rightArrow  from '../../assets/rightArrow.png'
import leftArrow from '../../assets/leftArrow.png'

const Testimonial = () => {
    const transition = { type: "spring", duration: 2}
    const  [selected, setSelected] = useState(0)
    const testimonialLength = testimonialsData.length

    console.log(selected);

  return (
    <div className='testimonial'>
        <div className="left-t">
            <span>Testimonials</span>
            <span className="stroke-text">what they</span>
            <span>Say About Us</span>
            <motion.p
            key={selected}
            initial={{opacity:0, x: -100}}
            animate={{opacity:1, x: 0}}
            exit={{opacity:0, x: 100}}
            transition={transition}>
                {testimonialsData[selected].review}
            </motion.p>

            <p>
                <span style={{color: 'var(--orange)'}}>{testimonialsData[selected].name} {" - "} </span>
                <span> 
                    {testimonialsData[selected].status}
                </span>
            </p>
        </div>
        <div className="right-t">
            <motion.div
                initial={{opacity: 0, x: -100}}
                whileInView={{opacity: 1, x: 0}}
                transition={{...transition, duration: 2}}
            ></motion.div>
            <motion.div
                initial={{opacity: 0, x: 100}}
                whileInView={{opacity: 1, x: 0}}
                transition={{...transition, duration: 2}}
            ></motion.div>
            <motion.img 
                key={selected}
                initial={{opacity:0, x: 100}}
                animate={{opacity:1, x: 0}}
                exit={{opacity:0, x: -100}}
                transition={transition}
                src={testimonialsData[selected].image} 
                alt="Testimonials Image" />

            <div className="arrows">
                <img 
                    onClick={() => {
                        selected === 0 ? setSelected(testimonialLength - 1) : setSelected((prev) => prev - 1)
                    }}
                    src={leftArrow} 
                    alt="left arrow" 
                />
                <img 
                    onClick={() => {
                        selected === testimonialLength - 1 ? setSelected(0) : setSelected((prev) => prev + 1)
                    }}
                    src={rightArrow} 
                    alt="right arrow" 
                />
            </div>
        </div>
    </div>
  )
}

export default Testimonial