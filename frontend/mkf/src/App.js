import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Free from './Components/Free';
import Paid from './Components/Paid';
import Layers from './Components/Layers';
import Eggs from './Components/Eggs';
import About from './Components/About';
import Contacts from './Components/Contacts';
import Landing from './Components/Landing';
import Partnership from './Components/Partnership';
import Others from './Components/Others';
import Cart from './Components/Cart';
import { CartProvider } from 'react-use-cart';
import Layout from './Components/Layout';
import { Route, Routes } from 'react-router-dom';


const my_props = {title: 'Contact Us' , 
description:'How can we help you?'
};

function App(){
  return(
    <>
      
      <Routes>
      
        <Route path="/about" 
        element={<Layout title={'about'}><About/></Layout>}
        />
        <Route path="/contacts"
         element={<Layout title={'contacts'}><Contacts props={my_props}/></Layout>}
         />
         <Route path="/layers"
         element={<Layout title={'layers'}><Layers/></Layout>}
         />
         <Route path="/eggs"
         element={<Layout title={'eggs'}><Eggs/></Layout>}
         />
         <Route path="/partnership"
         element={<Layout title={'partnership'}><Partnership/></Layout>}
         />
         <Route path="/free"
         element={<Layout title={'free'}><Free/></Layout>}
         />

         <Route path="/paid"
         element={<Layout title={'paid'}><Paid/></Layout>}
         />
         
        <Route path='/' 
        element={<Layout><Landing/></Layout>}
        />

         <Route path='/others' 
          element={<Layout title={'others'}>
          <CartProvider>
            <Others />
            <Cart />
          </CartProvider></Layout>}
        />
      </Routes>
      

    </>
  )
  
}

export default App;