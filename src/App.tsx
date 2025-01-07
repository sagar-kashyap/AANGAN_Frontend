import { useState,useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import LayoutComponent from './components/Layout'
import NavbarComponent from './components/Navbar';
import ProductComponent from './components/Product';
import CartComponent from './components/Cart';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const [cart,setCart]=useState(0)
console.log(cart)
  return (
    <div>
      <Router>
      <NavbarComponent cartQty={cart} />
      <Routes>
      <Route path="/" element= {<LayoutComponent />} />
      {/* <Route path="/about" element= {<LayoutComponent />} /> */}
      {/* <Route path="/contact" element= {<LayoutComponent />} /> */}
      <Route path="/product/:productId" element= {<ProductComponent cartQty={setCart} />} />
      {/* <div className='cart'> */}

      <Route path="/cart" element= {<CartComponent cartQty={setCart}  />} />
      {/* </div> */}
      
      </Routes>
      </Router>
    </div>
  )
}

export default App
