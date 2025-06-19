import React from "react";
import img4 from '../images/img4.jpg';
import egg from '../images/egg.jpg';
import farm from "../images/farm.webp";
import opt from '../images/opt.jpg';
import logo4 from '../images/logo4.png';
import abt from '../images/abt.png';




const About=()=>{

   return(

   <div>
       <img src={abt} alt="" className="mx-auto w-100"/>
   
     <div className="container mt-2">

      <div className="text-center  fst-italic text-dark mx-2 " >
      <p id="about">About Mr.Ken Farms </p>
      </div>
         <hr></hr>

      <div className="mx-auto  mt-2 ">
         <div>
         Inspired by lessons from Nature, Mr.ken Farms offers a wide range of Agro Activities:
         <ul>
            <li>Agriculture</li>
            <li>Poultry Management</li>
            <li>Farm Consultancy</li>
            <li>Construction and Development</li>
         </ul>

         We help people, organizations and communities become more mindful, creative and resourceful. Here, we ensure a clean
         and conducive environment for our birds and eggs. 
           <div className="text-center  mt-2">
             <img src={img4} alt="..." srcSet="" 
             className="img-fluid mx-auto mt-4 w-50 h-auto" 
           />
           </div>
         </div>
         
         <div className="container text-center bg-light mt-5" >
         <div class="row">
          <div class="col-md-8 ">
         <p className="fs-2 mt-4 text-dark lead">Who We Are</p>
         <i className="bi bi-building fs-2"></i>
         <p className="mt-2 py-2">
            Mr.Ken Farms (MKF) was established in 2021 to produce high-quality, fresh and healthy eggs.
            We have a vision to be the market leader in the poultry market; through exceptional quality products
            and services that will guarantee profitable poultry farming.

         </p>
         <p>
            We are located at Bwari, Abuja. Nigeria.   
         </p>
         </div>
         <div class="col-md-4">
        <img src={farm} alt="" className="img-fluid"/>
        </div>
         </div>
         </div>

         <div className="container text-center bg-secondary text-light mt-5" >
         <div class="row">
          <div class="col-md-4">
          <img src={opt} alt="" className="img-fluid"/>
         
         </div>
         <div class="col-md-8">
         <p className="fs-2 mt-4 lead">Our Objective</p>
         <i className="bi bi-lightbulb-fill fs-2"></i>
         <p className="mt-2 py-2">
            Our objective is to produce and deliver healthiest eggs with a primary aim of satisfying
            our customers and consumers. We hope to bring a development in the agricultural as well as the 
            economical sector of our country.
         </p>
         </div>
         </div>
         </div>
      
         <div className="container text-center bg-light mt-5" >
         <div class="row">
          <div class="col-md-8 ">
         <p className="fs-2 mt-4 text-dark lead">Our Commitment</p>
         <i className="bi bi-gem fs-2"></i>
         <p className="mt-2 px-2">
            Excellence, Experience and Narure are at the heart of everything we do.
            The synergy between these values is the essence of Mr Ken Farms.
         </p>
         <p>   
            Our commitment to premium quality and the abundance of benefits derived from Us, has made our eggs 
            every Wise Consumer's Choice. The source you can trust for your quality, healthy eggs!

         </p>
         </div>
         <div class="col-md-4">
         <img src={logo4} alt="" className="img-fluid"/>
         </div>
         </div>
         </div>

         <img src={egg} alt="" className=" w-100 mt-4 "/>

        <div className="text-center mt-4 fs-2"> Active Hours</div>
        <p className="text-center">Please, feel free to reach us on our call line or visit our farm.</p>
        <table className="table table-striped mt-4 text-center table-bordered">
           <thead>
            <tr>
               <th>Days</th>
               <th>Opening Hour (WAT)</th>
               <th>Closing Hour (WAT)</th>
            </tr>
           </thead>
           <tbody>
            <tr>
               <td>Monday</td>
               <td>9:00am</td>
               <td>6:00pm</td>
            </tr>

            <tr>
               <td>Tuesday</td>
               <td>9:00am</td>
               <td>6:00pm</td>
            </tr>

            <tr>
               <td>Wednesay</td>
               <td>9:00am</td>
               <td>6:00pm</td>
            </tr>

            <tr>
               <td>Thursday</td>
               <td>9:00am</td>
               <td>6:00pm</td>
            </tr>

            <tr>
               <td>Friday</td>
               <td>9:00am</td>
               <td>5:00pm</td>
            </tr>

            <tr>
               <td>Saturday</td>
               <td>10:00am</td>
               <td>7:00pm</td>
            </tr>
           </tbody>
        </table>
      </div>
   </div>
   </div>
   )
};

export default About;