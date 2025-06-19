import React from "react";
import { useEffect } from "react";
import axios from "axios";
import Itemcard from "./Itemcard";
import data from "./data";


const Others = () => {

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
    <>
    
    <h1 className='text-center mt-3'>All Items</h1>
     <section className='py-4 container'>
        <div className='row justify-content-center'>
            
            {data.productData.map((item, index)=>{
                return(
                    <Itemcard
                       img={item.img}
                       title={item.title}
                       desc={item.desc}
                       price={item.price}
                       item={item}
                       key={index}
                   />
                
                );
            })}
         
        </div>
        
    </section>
    
    </>

    
);

}
export default Others;
