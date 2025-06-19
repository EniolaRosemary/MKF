import React from "react";
import axios from 'axios';
import { useEffect } from "react";

const Free = () =>{
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
    <div>
        Free Consultation.
        
    </div>
    )
};

export default Free;