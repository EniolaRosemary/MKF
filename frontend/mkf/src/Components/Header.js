import React from "react";
/* import { Link } from "react-router-dom";
import { navLinks } from "../constants/constants"; */
import logo4 from '../images/logo4.png';
import { useState } from "react";
 

const Header = () =>{
  const [toggle, setToggle] = useState(false);
  const isToggle = () => setToggle(!toggle);
    return( 
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
     
       <img src={logo4} alt="" srcSet="" 
        className="navbar-brand mx-2" style={{height:'70px'}}
       /> 
       
        <button 
        onClick={isToggle}
        class="navbar-toggler" type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
          <i className= {
           toggle 
           ?"bi bi-x-lg"
           :"bi bi-justify"
        }></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mx-2 mb-lg-0 text-center">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/About">About</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="/Products" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Products
              </a>
              <ul class="dropdown-menu text-center" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="./Eggs">Egg Distribution</a></li>
                <li><hr class="dropdown-divider"/></li>
                <li><a class="dropdown-item" href="./Layers">Old Layers</a></li>
                <li><hr class="dropdown-divider"/></li>
                <li><a class="dropdown-item" href="./Others">Others</a></li>
                
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="/Partner" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Partnership
              </a>
              <ul class="dropdown-menu text-center" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item">Invest</a></li>
                <li><hr class="dropdown-divider"/></li>
                <li><a class="dropdown-item fs-2" >Coming Soon</a></li>
              </ul>
            </li>
           
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="/Consult" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Consult
              </a>
              <ul class="dropdown-menu text-center" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="/Free">Free Consultation</a></li>
                <li><hr class="dropdown-divider"/></li>
                <li><a class="dropdown-item" href="/Paid">Paid Consultation</a></li>
                
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Contacts">Contact Us</a>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    


    )
};

export default Header;