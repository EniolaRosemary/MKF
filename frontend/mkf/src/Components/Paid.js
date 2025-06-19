import React from "react";
import axios from 'axios';
import { useEffect } from "react";

const Paid = () =>{
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
        Paid Consultation.
        
    </div>
    )
};

export default Paid;