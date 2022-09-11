import React, { useRef } from 'react'
import './join.css'

const Join = () => {
    const form = useRef()
  return (
    <div className="join">
        <div className="join-text">
            <hr />
            <div><span className="stroke-text">Ready To</span><span> Level Up</span></div>
            <div><span>Your body</span><span className="stroke-text"> With Us ?</span></div>
        </div>

        <div className='join-email'>
            <form ref={form} className='email-container'>
                <input type="text" name='user_email' placeholder='Enter your Email Address here'/>
                <button className="join-btn">Join Now</button>
            </form>
        </div>

    </div>
  )
}

export default Join