import React from "react";

const Footer = () =>{

    const date=new Date().getFullYear();
   return(
    <div className="bg-secondary mt-2 text-center py-2">
        <div className="container mt-6">
              <a className="text-light mx-2 text-decoration-none" href="/" role="link">Home</a>
              <a className="text-light mx-2 text-decoration-none" href="./About" role="link">About</a>
              <a className="text-light mx-2 text-decoration-none" href="./Contacts" role="link">Contact Us</a>
        </div>

        <div className="mt-2 text-light textdecoration-none">
                Copyright &copy; {date}.
                All rights reserved. 
                
                <div className="mt-2">
                    <i className="bi bi-facebook mx-2"></i>
                    <i className="bi bi-whatsapp mx-2"></i>
                    <i className="bi bi-instagram mx-2"></i>
                    <i className="bi bi-linkedin mx-2"></i>
                    <i className="bi bi-twitter mx-2"></i>
                </div>
                <a href="##" text="danger">Terms</a> and {' '} 
                <a href="##">Conditions</a>
                
            </div>
    </div>
      
   );
}

export default Footer;



 {/*   <div>
              <a className="text-light mx-2 text-decoration-none" href="/" role="link">Home</a>
              <a className="text-light mx-2 text-decoration-none" href="./About" role="link">About</a>
              <a className="text-light mx-2 text-decoration-none" href="./Contacts" role="link">Contact Us</a>
            </div>   */}  
{/*             <div className="mt-2">
                Copyright &copy; {date}.
                All rights reserved. 
                
                <div className="mt-2">
                    <i className="bi bi-facebook mx-2"></i>
                    <i className="bi bi-whatsapp mx-2"></i>
                    <i className="bi bi-instagram mx-2"></i>
                    <i className="bi bi-linkedin mx-2"></i>
                    <i className="bi bi-twitter mx-2"></i>
                </div>
                <a href="##" text="danger">Terms</a> and {' '} 
                <a href="##">Conditions</a>
                
            </div>
 */}