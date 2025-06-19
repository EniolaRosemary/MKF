
import React, { useRef , useState } from 'react';
import emailjs from '@emailjs/browser';
import cu3 from "../images/cu3.png";
import support from "../images/support.svg";
import as from "../images/as.webp";

const Contacts = ({props}) => {

  const [color,setColor]=useState(false);

  const refreshPage = ()=>{
    window.location.reload();
  }
   const changeColor = ()=> setColor(!color);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_voejvhm',
     'template_3z0sh97',
      form.current, 
      'Wldxz5H3E2NVVu1j6')
      .then((result) => {
          console.log(result.text);
          console.log("Message Sent!")
      }, 
      (error) => {
          console.log(error.text);
      });
  };

  return (

    <div>
    <img src={cu3} alt="" className="mx-auto w-100"/>
     <div className="container mx-auto mt-4">
      <div className="text-center">
      <div className="text-center mx-auto mt-4 text-danger fs-2 fst-italic">We want to hear from you</div>
        <p className="text-center fs-4 lead"></p>
        <hr className="mx-5 bg-dark"></hr>
        <p>
          Feel free to reach out with any questions, comments or business inquiries you may have.
        </p>
        <img src={as} alt="" className="img-fluid mt-2 w-70"/>
        <p className="mt-4">
          Nothing is more important to us than hearing from the people we serve. So we welcome any questions or 
          comments you might have about Mr.Ken's products, our company or our website.
        </p>
        <div>
          <p>Phone: +234 9026345815</p>
          <p>Email: Olaawo1@gmail.com</p>
        </div>
  
        <p>Kuchiko, Bwari, 90001</p>
      </div>
         <div className="card card-body"
         style={{backgroundColor:'whitesmoke'}}
         >
           <h2 className = {color? 'text-dark' : 'text-danger'} style={{textAlign:"center"}}>
            {props['title']}
           </h2>
           <hr/>
           <h4 className= {color? 'text-warning' : 'text-dark' }style={{textAlign:"center"}} >
            {props['description']}
           </h4>
  
          
           <div class="container">
             <div class="row">
            <div class="col-md-8 ">
            
           <form action="" method="post" 
           ref={form} 
           onSubmit={sendEmail}
           >
             <div className="form-group">
               <label htmlFor="name"></label>
               <input type="text"
               placeholder="Enter Name"  
               name="user_name" 
               id="name" 
               className="form-control"
               required></input>
               </div>
  
               <div className="form-group ">
               <label htmlFor="email"></label>
               <input type="email"
               placeholder="Enter E-mail"  
               name="user_email" 
               id="email" 
               className="form-control"
               required ></input>
               </div>
  
             <div className="form-group ">
               <label htmlFor="message"></label>
               <textarea 
               placeholder="Please, leave us a message." 
               name="message" 
               id="message" 
               className="form-control"
               required
               cols="30" 
               rows="10">
               </textarea> 
  
               <button 
               onClick={refreshPage}
               className="btn btn-outline-dark mt-2" 
               type="submit"
               value="send"
               style={{border:"2px solid black", background:"orangered"}}
               
              >
               Send Message              
               </button>
               
               
            
             </div>
            
          </form>
          </div>
          <div class="col-md-4">
          <img src={support} alt="" className="img-fluid mt-2"/>
          </div>
          </div>
          
         </div>
         </div>
          
         
     </div>  
     </div>
       
     )
  };
  
export default Contacts;


 
