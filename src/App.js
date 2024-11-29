import React from 'react';
import ReactDom from "react-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { BsCart, BsHeart, BsPerson } from 'react-icons/bs';



import Navbar from './Pages/navbar';
import Home from './Pages/Home.js';
import Banner from './Pages/banner';
import Products from './Pages/products';
import AllCategory from './Pages/AllCategory';
import Slider from './Pages/Slider';
import ProductInfo from './Pages/ProductInfo.js';
import AboutPage from './Pages/About.js';
import ContactPage from './Pages/ContactUs.js';
import BottomIcons from './Pages/BottomIcons.js';
import Subscribe from './Pages/Subscribe.js';
import Footer from './Footer.js';


import Arrow from './Pages/images/arrow.png';

function App() {
  return (
    <Router>

      {/* Navbar*/}
      <Routes>
        <Route path="/" element={<Navbar/>} />
      </Routes>
      {/* Navbar */}



      {/* Hero Section */}
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      {/* Hero Section */}


      {/* Banner */}
      <Routes>
        <Route path="/" element={<Banner/>} />
      </Routes>
      {/* Banner */}


      {/* Card Content */}
      <Routes>
        <Route path="/" element={<Products/>} />
      </Routes>
      {/* Card Content */}


      {/* All category */}
      <Routes>
        <Route path="/" element={<AllCategory/>} />
      </Routes>
      {/* All category */}


      {/* Slider */}
      <Routes>
        <Route path="/" element={<Slider/>} />
      </Routes>
      {/* Slider */}


      {/* Product info */}
      <Routes>
        <Route path="/" element={<ProductInfo/>} />
      </Routes>
      {/* Product info */}

      {/* About Page */}
      <Routes>
        <Route path="/" element={<AboutPage/>} />
      </Routes>
      {/* About Page */}

      {/*Contact Us*/}
      <Routes>
        <Route path="/" element={<ContactPage/>} />
      </Routes>
      {/*Contact Us*/}


      {/* Bottom Icons */}
      <Routes>
        <Route path="/" element={<BottomIcons/>} />
      </Routes>
      {/* Bottom Icons */}


      {/* Subscribe */}
      <Routes>
        <Route path="/" element={<Subscribe/>} />
      </Routes>
      {/* Subscribe */}


      {/* Footer */}
      <Routes>
        <Route path="/" element={<Footer/>} />
      </Routes>
      {/* Footer */}



      return (
        <a
          href="#"
          className="fixed bottom-10 right-12 w-12 h-12 flex items-center justify-center bg-green-500 text-white rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-yellow-500"
        >
          <i>
            <img src={Arrow} alt="Scroll Arrow" />
          </i>
        </a>
      );

      
    </Router>
  );
}

export default App;
