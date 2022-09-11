import React from 'react'
import './plans.css'
import whiteTick from '../../assets/whiteTick.png'
import { plansData } from '../../data/plansData'
import rightArrow from '../../assets/rightArrow.png'


const Plans = () => {
  return (
    <div className='plans-container'>
        <div className='title'>
            <div >
                <p className='stroke-text'>READY TO START</p>
            </div>
            <div>
                <p>YOUR JOURNEY</p>
            </div>
            <div >
                <p className='stroke-text'>NOW WITHUS</p>
            </div>
        </div>

        <div className="plans-item">
            {plansData.map((plan, index) =>(
                <div key={index} className='plans'>
                    {plan.icon}
                    <span className='plan-title'>{plan.name}</span>
                    <span className='plan-price'>$ {plan.price}</span>

                    <div className='features'>
                        {plan.features.map((feature, index) => (
                            <div className="feature" key={index}>
                                <img src={whiteTick} alt={feature.name} />
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                    
                    <div>
                        <span className="plan-benefits-text">See more benefits</span>
                        <img src={rightArrow} alt='' className='plan-benefits-icon'/>
                    </div>
                    <div>
                        <button className='btn'>Join now</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans