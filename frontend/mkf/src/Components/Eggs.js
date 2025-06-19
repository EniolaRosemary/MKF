import React from "react";
import axios from 'axios';
import { useEffect } from "react";
import slide5 from "../images/slide5.png";
import slide3 from "../images/slide3.png";
import slide4 from "../images/slide4.png";


const Eggs = () =>{
   
    useEffect(()=>{
        axios 
          .get('http://localhost:3000/')
          .then((res)=>{
           console.log(res.data);
          })
          .catch((err)=>{
           console.log(err);
          });
     }, []);
    return(

    <div className="">
      <div 
        id="Slides" className="carousel carousel-fade slide bg-transparent" data-bs-ride="carousel"
      >
         <div className="carousel-inner">

            <div className="carousel-item active">
               <img src={slide3} alt="First Slide" className="d-block shadow rounded w-100 mx-auto"/>
            </div>

            <div className="carousel-item">
               <img src={slide4} alt="Second Slide" className="d-block shadow rounded w-100 mx-auto"/>

            </div>

            <div className="carousel-item">
               <img src={slide5} alt="Third Slide" className="d-block shadow rounded w-100 mx-auto"/>
            </div>

            
         </div>
          <a href="#Slides" 
          className="carousel-control-prev" 
          role={'button'} data-bs-slide='prev' 
          id="control1">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a href="#Slides" 
          className="carousel-control-next" 
          role={'button'} data-bs-slide='next' 
          id="control2">
            <span className="carousel-control-next-icon"></span>  
          </a>
        </div>

        <div>
        <div className="container mt-4 shadow rounded py-4">
            <p>
               Home / Products / <b>Egg Distribution</b>
            </p>
            <p className="fs-4 fst-italic">Eggs</p>
            <p className="text-success">#1,900</p>
            <p> We offer you healthy, fresh and nutricious eggs!</p>

            <p className="px-4">
               <p><b>~</b> They are harvested from a  clean farm environment under good management conditions.</p>
               <p><b>~</b> You will need to book ahead of time. Bookings are on a <b>
                  first-come-first-serve </b>basis.</p> 

                  <hr></hr>
            </p>
            <p><b>Quantity:</b> Wholesale (per crate)</p>
            <p><b>Colour:</b> Brown</p>

            <a className="btn btn-success btn-hover mt-4" href="./Others" role="button">Shop Now</a> 
           </div>
           
         </div>
       
      
     </div>
    ) 
};

export default Eggs;