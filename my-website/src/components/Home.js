import React from 'react'
import './Header.css'
import p2 from'../images/PLUMBING.jpg'


const Home = () => {
  return (
    <div>
        <div className='head-text'>
    <h6>Building with confidence</h6>
    <h1>Building <font style={{color:'white'}}>And</font> <br/> Maintaining <br/> <font style={{color:'white'}}>Your Dreams</font> </h1>
    <h6>Fast, friendly home repair service done right the first time!!</h6>
    <button>Explore More</button>
    </div>
    
    <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={p2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={p2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={p2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={p2} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className='contain'>
        <h2>20+ Years of Experience</h2>
    </div>
    </div>
    
  )
}

export default Home