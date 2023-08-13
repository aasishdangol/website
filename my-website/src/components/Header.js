import React from 'react'
import  './Header.css'
import Image from '../images/plumbing-home.jpg'
// import p1 from '../images/p1.jpg'
import p2 from'../images/PLUMBING.jpg'
import About from './About'
// import p3 from '../images/p4.jpg'
// import p4 from '../images/p5.jpg'
// import {FontAwesomeIcon} from'@fortawesome/react-fontawesome'
// import {faArrowRight} from '@font-awesome/free-solid-svg-icons';
const Header = () => {
  return (
    <div className='head' style={{ backgroundImage:`url(${Image})`}}>
   <nav className="navbar navbar-expand-lg navbar-light ">
  <a className="navbar-brand" href="#">Business Logo</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active ">
        <a className="nav-link " href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Projects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Services</a>
      </li><li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>
    </ul>
    </div>
</nav>
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

export default Header