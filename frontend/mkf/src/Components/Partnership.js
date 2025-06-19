import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Partnership=()=>{

   const navigate = useNavigate();
   const [post, setPost] = useState({heading:'', news:'', author:''});
   console.log(post);

   useEffect(()=>{},[])

   return(
   <div className="container mx-auto mt-4">
       <div className="card card-body"
       style={{backgroundColor:'thistle'}}
       >
         <h2 className="text-center">Post Your News</h2>
         <hr/>
         <form action="" method="get" 
            onSubmit={(e)=>{
               e.preventDefault()
               
               axios.patch('http://localhost:3010/',post)
               .then((res)=>
               console.log(res))
               .catch((err)=> console.log(err));

               navigate ('/') 
               /* alert(JSON.stringify(post)); */
            }}
         >
            <div className="form-group ">
               <label htmlFor="heading">Heading</label>
               <input type="text" 
               name="heading" 
               id="heading" 
               className="form-control"
               required
               onChange={(e) => setPost({...post,heading:e.target.value}

               )}
               />

               <label htmlFor="news">News</label>
               <textarea required
                name="news"
                id="news" cols="30" 
                rows="10" 
                className="form-control"
                onChange={(e)=>setPost({...post,news:e.target.value})}>              
                </textarea>

                <label htmlFor="author">Author</label>
                <input type="text"
                id="heading"
                className="form-control "
                required
                name="author"
                onChange={(e)=>setPost({...post,author:e.target.value})}
                />
            </div>

            <button className="btn btn-outline-dark mt-4" 
            type="submit" 
            
            >Post News</button>
         </form>
       </div>
   </div>
   );
};

export default Partnership;