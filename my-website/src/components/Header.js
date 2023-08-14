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
    <div className='heading'>
      {/* <h1>hi</h1> */}
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
    </div>
    </div>
  
  )
}

export default Header