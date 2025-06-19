import React from "react";
import axios from 'axios';
import { useEffect } from "react";
import lay from "../images/lay.png";
import lay5 from "../images/lay5.png";
import lay4 from "../images/lay4.png";
import lay8 from "../images/lay8.png";
import lay7 from "../images/lay7.png";



const Layers = () =>{
   
    useEffect(()=>{
        axios 
          .get('http://localhost:3010/')
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
               <img src={lay} alt="First Slide" className="d-block shadow rounded w-100 mx-auto"/>
            </div>

            <div className="carousel-item">
               <img src={lay4} alt="Second Slide" className="d-block shadow rounded w-100 mx-auto"/>

            </div>

            <div className="carousel-item">
               <img src={lay5} alt="Third Slide" className="d-block shadow rounded w-100 mx-auto"/>
            </div>

            <div className="carousel-item">
               <img src={lay8} alt="Third Slide" className="d-block shadow rounded w-100 mx-auto"/>
            </div>

            <div className="carousel-item">
               <img src={lay7} alt="Third Slide" className="d-block shadow rounded w-100 mx-auto"/>
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
        {/* <hr></hr>  */}

        <div>
           <div className="container mt-4 shadow rounded py-4">
            <p>
               Home / Products / <b>Old layers</b>
            </p>
            <p className="fs-4 fst-italic">Old Layers</p>
            <p className="text-success">#2,960</p>
            <p> We offer you healthy, strong, well-fed and disease-free old layers.</p>

            <p className="px-4">
               <p><b>~</b> They have been raised in a clean farm environment under good management conditions.</p>
               <p><b>~</b> You will need to book ahead of festive seasons to secure your birds. Bookings are on a <b>
                  first-come-first-serve </b>basis.</p> 

                  <hr></hr>
            </p>
            <p><b>Age:</b> Spent layers (End of laying cycle)</p>
            <p><b>Colour:</b> Brown</p>

           </div>

           <div className="container mt-4 shadow rounded py-4">
             <p className="fs-4 fst-italic">Description</p>
             <p>
               'Spent layers' or old hens are egg-laying birds that are past their prime whose output
               is increasingly irregular, rendering them economically inefficient. The cost of feed and inputs 
               remains the same but their earning capacity is greatly reduced. Thus, the birds which have 
               completed their whole 75-weeks laying phase is termed as "spent hen". These birds need to be culled to give 
               room for the introduction of new batch of grower birds/chicks. 
             </p>
             <p className="px-4">
               <b>~</b> In the intensive egg industry, which is all about efficiency and return, these hens are often 
               given off for sale to a thriving old layer market in Nigeria especially targetted at the festive seasons.
             </p>
           </div>
            
            <div className="container mt-4 shadow rounded py-4">
            <p className="fs-4 fst-italic">Benefits of Purchasing Old Layers</p>

            <p><b>~</b> They are sold at comparatively cheaper prices than other mature birds.</p>
            <p><b>~</b> healthy and strong old layers have been inspected and well scruitinized for deformities
            and infections.</p>
            <p><b>~</b> Age is from 75 weeks.</p>
            <p><b>~</b>Thriving market.</p>

            <a className="btn btn-success mt-4" href="./Others" role="button">Shop Now</a>  
            </div>

            
        </div>
       
      
     </div>
    ) 
};

export default Layers;