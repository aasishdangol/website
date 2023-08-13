import React from 'react'
import bottom from '../images/watertreatment.jpg'
import top from '../images/p3.jpg'
import './About.css'

const About = () => {
  return (
    <div className='about'>
        <div className='left'>
            <img src={bottom}/>
        </div>
        <div className='right'>
            <h6>About Our Company</h6>
            <h1>Your Business <br/> Name LLc</h1>
            <p></p>
        </div>
    </div>
  )
}

export default About;