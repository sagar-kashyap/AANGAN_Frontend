
import './App.css'
import LayoutComponent from './components/Layout'
import NavbarComponent from './components/Navbar';
import ProductComponent from './components/Product';
import CartComponent from './components/Cart';
import FooterComponent from "./components/Footer";
import AboutUsComponent from './components/About';
import ContactUsComponent from './components/Contact';
// import PolicyPageComponent from './components/policy';
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
      <Route path="/contact" element= {<ContactUsComponent />} />
      {/* <Route path="/policy" element= {<PolicyPageComponent />} /> */}
      </Routes>
      </Router>
      
      <div className='footer' >
          <FooterComponent />
            </div>
    </div>
  )
}

export default App
