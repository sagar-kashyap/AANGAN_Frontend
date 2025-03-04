import { useState,useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import LayoutComponent from './components/Layout'
import NavbarComponent from './components/Navbar';
import ProductComponent from './components/Product';
import CartComponent from './components/Cart';
import FooterComponent from "./components/Footer";
import AboutUsComponent from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
    <div>
      <Router>
      <NavbarComponent />
      <Routes>
      <Route path="/" element= {<LayoutComponent />} />
      {/* <Route path="/about" element= {<LayoutComponent />} /> */}
      {/* <Route path="/contact" element= {<LayoutComponent />} /> */}
      <Route path="/product/:productId" element= {<ProductComponent />} />
      {/* <div className='cart'> */}

      <Route path="/cart" element= {<CartComponent />} />
      {/* </div> */}
      <Route path="/about" element= {<AboutUsComponent />} />
      </Routes>
      </Router>
      <div>
                <FooterComponent />
            </div>
    </div>
  )
}

export default App
