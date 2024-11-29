import React from 'react';
import { Link } from 'react-router-dom';
import { BsCart, BsHeart, BsPerson } from 'react-icons/bs';


import facebookIcon from './images/facebook.png';
import twitterIcon from "./images/twitter.png";
import googleIcon from "./images/google.png";
import shopIcon from "./images/shop.png";
import menuIcon from "./images/menu.png";



const NavbarPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Navbar Top */}
      <nav className="bg-black text-white py-2">
        <div className="container mx-auto flex justify-between items-center">
          <h5 className="text-sm m-0">E Shop@info.com</h5>
          <div className="flex items-center">
            <div className="flex space-x-2">
              <button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded">
                <Link to="/login">Login</Link>
              </button>
              <button className="bg-yellow-500 text-black font-bold px-4 py-2 rounded">
                <Link to="/login">Register</Link>
              </button>
            </div>
            <div className="ml-4 flex space-x-2">
              <img src={facebookIcon} alt="facebook" className="w-5 cursor-pointer" />
              <img src={twitterIcon} alt="twitter" className="w-5 cursor-pointer" />
              <img src={googleIcon} alt="google" className="w-5 cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Navbar */}
      <nav className="bg-yellow-500 py-3">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center text-white text-xl font-bold">
            <img src={shopIcon} alt="E-Shop Logo" className="w-8 mr-2" />
            <span className="font-serif text-2xl shadow-md">E Shop</span>
          </Link>
          <button
            className="md:hidden border-none bg-transparent focus:outline-none"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <img src={menuIcon} alt="menu" className="w-8" />
          </button>
          <div className="hidden md:flex space-x-4" id="collapsibleNavbar">
            <ul className="flex space-x-4">
              <li>
                <Link className="text-black font-bold hover:text-white hover:shadow-md transition" to= "/Home">
                  HOME
                </Link>
              </li>
              <li>
                <Link className="text-black font-bold hover:text-white hover:shadow-md transition" to= "/products">
                  Product
                </Link>
              </li>
              <li className="relative group">
                <Link className="text-black font-bold hover:text-white hover:shadow-md transition" to= "/AllCategory">
                  Category
                </Link>
                <div className="absolute hidden group-hover:block bg-white shadow-lg mt-1 rounded">
                  <Link className="block px-4 py-2 text-black hover:bg-yellow-500 hover:text-white font-bold transition" to="#">
                    T-Shirts
                  </Link>
                  <Link className="block px-4 py-2 text-black hover:bg-yellow-500 hover:text-white font-bold transition" to="#">
                    Shoes
                  </Link>
                  <Link className="block px-4 py-2 text-black hover:bg-yellow-500 hover:text-white font-bold transition" to="#">
                    Hoodies
                  </Link>
                  <Link className="block px-4 py-2 text-black hover:bg-yellow-500 hover:text-white font-bold transition" to="#">
                    Cap
                  </Link>
                  <Link className="block px-4 py-2 text-black hover:bg-yellow-500 hover:text-white font-bold transition" to="#">
                    Pants
                  </Link>
                  <Link className="block px-4 py-2 text-black hover:bg-yellow-500 hover:text-white font-bold transition" to="#">
                    Laptop
                  </Link>
                  <Link className="block px-4 py-2 text-black hover:bg-yellow-500 hover:text-white font-bold transition" to="#">
                    Keyboard
                  </Link>
                  <Link className="block px-4 py-2 text-black hover:bg-yellow-500 hover:text-white font-bold transition" to="#">
                    Cameras
                  </Link>
                  <Link className="block px-4 py-2 text-black hover:bg-yellow-500 hover:text-white font-bold transition" to="#">
                    Computer Mouse
                  </Link>
                  <Link className="block px-4 py-2 text-black hover:bg-yellow-500 hover:text-white font-bold transition" to="#">
                    Watch
                  </Link>
                  <Link className="block px-4 py-2 text-black hover:bg-yellow-500 hover:text-white font-bold transition" to="#">
                    iPad & Tablets
                  </Link>
                  <Link className="block px-4 py-2 text-black hover:bg-yellow-500 hover:text-white font-bold transition" to="#">
                    Headphones
                  </Link>
                  <Link className="block px-4 py-2 text-black hover:bg-yellow-500 hover:text-white font-bold transition" to="#">
                    Other
                  </Link>
                </div>
              </li>
              <li>
                <Link className="text-black font-bold hover:text-white hover:shadow-md transition" to= "/About">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="text-black font-bold hover:text-white hover:shadow-md transition" to= "/ContactUs">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex space-x-4">
            <BsCart className="text-black text-lg cursor-pointer hover:text-white transition" />
            <BsHeart className="text-black text-lg cursor-pointer hover:text-white transition" />
            <BsPerson className="text-black text-lg cursor-pointer hover:text-white transition" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarPage;