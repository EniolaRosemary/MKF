import React from "react";
import Footer from "./Footer";
import Header from "./Header";


const Layout=({children, title})=>{
    return(
        <div>
           <head>
            <title>{title? title:'Home'}</title>
           </head>
           <header>
               <Header/>
           </header>
           <div>{children}
            
           </div>
           <footer>
            <Footer/>
           </footer>
        </div>
    );
};

export default Layout;