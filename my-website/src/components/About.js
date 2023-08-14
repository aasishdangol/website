import React from 'react'
import bottom from '../images/watertreatment.jpg'
import top from '../images/p3.jpg'
import back from '../images/p4.jpg'
import './About.css'

const About = () => {
  return (
    <div className='contain'>
    <div className='about' style={{ backgroundImage:`url(${back})`}}>
   
        <div className='left'>
            <img className="img1" src={bottom}/>
            <img className="img2" src={top}/>
        </div>
        <div className='right'>
            <h6>About Our Company <hr className='line' /> </h6>
            
            <h2 >Your Business <br/> Name LLc</h2>
            <p className='pagraph'>We are a locally owned and operated with 20 year of <br/> industry experience.
                We value honesty and integrity in all ascepts of <br/> our business.We offer 
                a variety of Home improvement services that <br/> are customizable to each individual
                project.
                <br/>
                <br/>
                We specializee in handyman work and a variety service and <br/> repair projects. Wepride ourselves on the quality of our work as well <br/> as our commitment
                to outstanding results. We look forward to <br/> buliding lasting relationships
                with our cilents and guarantee your <br/> satisfaction!.
            </p>
            <button>Read More</button>
        </div>
        
    </div>
     </div>
    
  )
}

export default About;