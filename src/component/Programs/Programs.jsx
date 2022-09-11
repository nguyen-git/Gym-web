import React from 'react'
import './programs.css'
import rightArrow from '../../assets/rightArrow.png'
import { programsData } from '../../data/programsData'

const Programs = () => {
  return (
    <div className='container-program'>
        <div className='title'>
            <div >
                <p className='stroke-text'>EXPLORE OUR</p>
            </div>
            <div>
                <p>PROGRAMS</p>
            </div>
            <div >
                <p className='stroke-text'>TO SHAPE YOU</p>
            </div>
        </div>
        <div className="program-category">
            {programsData.map((program, index) => (
                <div key={index} className='category'>
                    <div className='category-icon'>{program.image}</div>
                    <span className='category-heading'>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className='join-now'>
                        <span>Join Now</span>
                        <img src={rightArrow} alt="" />
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Programs