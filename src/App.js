import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarPage from './Pages/navbar';
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
import Tshirt from './Pages/Tshirts.js';




import Arrow from './Pages/images/arrow.png';

function App() {
  // Refs for each section
  const homeRef = useRef(null);
  const productsRef = useRef(null);
  const categoryRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      {/* Navbar with scroll functions */}
      <NavbarPage
        onScrollToHome={() => scrollToSection(homeRef)}
        onScrollToProducts={() => scrollToSection(productsRef)}
        onScrollToCategory={() => scrollToSection(categoryRef)}
        onScrollToAbout={() => scrollToSection(aboutRef)}
        onScrollToContact={() => scrollToSection(contactRef)}
      />

      {/* Main Content with Section Refs */}
      <div ref={homeRef}>
        <Home />
      </div>
      <Banner />
      <div ref={productsRef}>
        <Products />
      </div>
      <div ref={categoryRef}>
        <AllCategory />
      </div>
      <Slider />
      <ProductInfo />
      <div ref={aboutRef}>
        <AboutPage />
      </div>
      <div ref={contactRef}>
        <ContactPage />
      </div>
      <BottomIcons />
      <Subscribe />
      <Footer />
      

      <Routes>
      <Route path="./Tshirt.js" element={<Tshirt />} />
      </Routes>
      

      {/* Scroll Arrow */}
      <a
        href="#"
        className="fixed bottom-10 right-12 w-12 h-12 flex items-center justify-center bg-green-500 text-white rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-yellow-500"
        aria-label="Scroll to top"
        onClick={() => scrollToSection(homeRef)}
      >
        <img src={Arrow} alt="Scroll to top arrow" />
      </a>
    </Router>
  );
}

export default App;
