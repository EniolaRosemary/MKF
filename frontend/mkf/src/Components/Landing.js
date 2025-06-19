import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import layers from "../images/layers.jpg";
import R from "../images/R.jpg";
import hen from "../images/hen.jpg";
import head from "../images/head.png";


const Landing=()=>{
  const [news, setNews] = useState([])

  useEffect(()=>{
    axios
      .get('http://localhost:3010/')
      .then((res) =>{
        setNews(res.data);
        console.log(news);
      })
      .catch((err)=>{
        console.log(err);
      });
  }, []);

   

   return(

  <div className="">

    <div>
    <img src={head} alt="" className="w-100 h-auto mt-6" id="head" />
    </div>

    <div className="container">
      <div>
        <div className="text-center mx-auto mt-4 text-danger fs-2 fst-italic">What We Do</div>
        <p className="text-center fs-4 lead">From Chicken to Agro-industriallisation</p>
        <hr className="mx-5 bg-dark"></hr>
      </div>
      <div className="text-center">
        <div>
        We offer some of the best poultry products in the market for more than 2 decades. We have 
        pioneered agrictultural systems that develop, grow and enlarge our industry in Nigeria.
        Our priority is you, our workers and economy.
        <p className="fs-5 lead mt-4 text-danger">No Additives. No Preservatives</p> 
        <p>We make sure there are no use of preservatives or chemicals on our birds and products. We breed our chickens naturally and
          groom them responsibly so that our eggs are as healthy as they should be!
        </p>
    
        <p className="fs-5 lead mt-4 text-danger">No Steroids. No Hormones</p> 
        <p>As pioneers in this space, we have no need to pump our animals full of hormones to grow or produce big eggs.
          We assure you a healthy working space, healthy birds, healthy produce and of course... a healthy meal!
        </p>

        <p className="fs-5 lead mt-4 text-danger">No Less. Only The Best</p>
        <p> We believe that delicious, quality chicken and eggs should be able to stand on it's own, Always. 
          At Mr.Ken's Farms Nigeria, we take pride in offering nothing but the <b>best</b> and <b>safest </b> 
          product(s) for you.</p> 
          <a className="btn btn-secondary" href="./About" role="button">Learn More</a>
          <img src={hen} alt="" className=" w-100 mt-4 "/>
      </div>

      <div>
        <div className="text-center mx-auto mt-4 text-danger fs-2 fst-italic">Our Products</div>
        <p className="text-center fs-4 lead">From healthy birds to fresh eggs and more!</p>
        <hr className="mx-5 bg-dark"></hr>

        <p>We have your perfect protein. Our selection of premium hens and all-time favourites are sure to 
          please you and your household.
        </p>
        <div className="text-success fs-3"><i class="bi bi-egg"></i></div>
        <p className="mt-2">
          Inspired from years after years of experience and experiment we also deal in other areas such as:
          <ul className="list-group list-group-item mt-1">
            <li className="list-group-item list-group-item-primary">Farm Consultancy</li>
            <li className="list-group-item list-group-item-primary mt-1">Poultry Management</li>
            <li className="list-group-item list-group-item-primary mt-1">Farm Development</li>
          </ul> 
        </p>
        <a className="btn btn-secondary" mt-2 href="./Eggs" role="button">View Our Products</a>
        

      </div>

      <div>
        <div className="text-center mx-auto mt-4 text-danger fs-2 fst-italic">Why Our Products Are Good</div>
         <p className="text-center fs-4 lead">Grown without Compromise</p>
         <hr className="mx-5 bg-dark"></hr>

         <p>
          Our Commitment is to your health and satisfaction. Our poultry is fed on an entirely vegetarian diet, free
          of hormones, additives and meat by-products. We're only a success if you are completely pleased. 

          If you're unhappy or you have any complaints regarding our products, please let us know. 
         </p>
         <a className="btn btn-secondary" href="./Contacts" role="button">Contact Us</a>
        </div>
        <img src={R} alt="" className=" w-100 h-auto mt-4"/>
     </div>
      
    </div>

   </div>  
   )
};

export default Landing;