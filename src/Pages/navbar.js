import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import facebookIcon from "./images/facebook.png";
import twitterIcon from "./images/twitter.png";
import googleIcon from "./images/google.png";
import shopIcon from "./images/shop.png";

const NavbarPage = ({
  onScrollToHome,
  onScrollToProducts,
  onScrollToCategory,
  onScrollToAbout,
  onScrollToContact,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleModalToggle = (type) => {
    setIsLogin(type === "login");
    setIsModalOpen(true);
    setSuccessMessage(""); 
  };

  const handleSuccess = () => {
    setSuccessMessage(isLogin ? "Login successful!" : "Registration successful!");
    setIsModalOpen(false); // Close the modal after showing the message
  };

  const handleCategoryClick = (category) => {
    if (category === "Tshirts") {
      navigate("/Tshirts"); 
    } else {
      alert(`Navigate to category: ${category}`);
    }
  };

  return (
    <div className="bg-gray-100">
      {/* Navbar Top */}
      <nav className="bg-black text-white py-2">
        <div className="container mx-auto flex justify-between items-center">
          <h5 className="text-sm m-0">E Shop@info.com</h5>
          <div className="flex items-center">
            <div className="flex space-x-2">
              <button
                className="bg-yellow-500 text-black font-bold px-4 py-2 rounded"
                onClick={() => handleModalToggle("login")}
              >
                Login
              </button>
              <button
                className="bg-yellow-500 text-black font-bold px-4 py-2 rounded"
                onClick={() => handleModalToggle("register")}
              >
                Register
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
          <div className="flex items-center">
            <img src={shopIcon} alt="E-Shop Logo" className="w-8 mr-2" />
            <span className="font-serif text-2xl shadow-md text-white font-bold">E Shop</span>
          </div>
          <div className="hidden md:flex space-x-4">
            <ul className="flex space-x-4">
              {/* Smooth Scroll Buttons */}
              <li>
                <button
                  onClick={onScrollToHome}
                  className="text-black font-bold hover:text-white hover:shadow-md transition"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={onScrollToProducts}
                  className="text-black font-bold hover:text-white hover:shadow-md transition"
                >
                  Product
                </button>
              </li>
              {/* Category Dropdown */}
              <li className="relative group">
                <button
                  className="text-black font-bold hover:text-white hover:shadow-md transition"
                >
                  Category
                </button>
                <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded z-10 w-40">
                  <button
                    onClick={onScrollToCategory}
                    className="block px-4 py-2 text-black hover:bg-yellow-500 hover:text-white font-bold transition"
                  >
                    All Categories
                  </button>
                  {/* Categories List */}
                  <div>
                  <button className="block px-4 py-2 text-black hover:bg-yellow-500 hover:text-white font-bold transition w-full text-left">
                  <Link to="/Tshirts" className="w-full h-full block no-underline">
                    T-Shirts
                  </Link>
                </button>
                <button className="block px-4 py-2 text-black hover:bg-yellow-500 hover:text-white font-bold transition w-full text-left">
                  <Link to="/shoes" className="w-full h-full block no-underline">
                  shoes
                  </Link>
                </button>
                <button className="block px-4 py-2 text-black hover:bg-yellow-500 hover:text-white font-bold transition w-full text-left">
                  <Link to="/Hoodies" className="w-full h-full block no-underline">
                    Hoodies
                  </Link>
                </button>
                <button className="block px-4 py-2 text-black hover:bg-yellow-500 hover:text-white font-bold transition w-full text-left">
                  <Link to="/PartySuits" className="w-full h-full block no-underline">
                    Party Suit
                  </Link>
                </button> 
                <button className="block px-4 py-2 text-black hover:bg-yellow-500 hover:text-white font-bold transition w-full text-left">
                  <Link to="/Shirt" className="w-full h-full block no-underline">
                    shirt
                  </Link>
                </button> 
                <button className="block px-4 py-2 text-black hover:bg-yellow-500 hover:text-white font-bold transition w-full text-left">
                  <Link to="/Handbag" className="w-full h-full block no-underline">
                    handbag
                  </Link>
                </button> 
                <button className="block px-4 py-2 text-black hover:bg-yellow-500 hover:text-white font-bold transition w-full text-left">
                  <Link to="/HeelShoes" className="w-full h-full block no-underline">
                    Heel-shoes
                  </Link>
                </button> 
                  </div>
                </div>
              </li>
              <li>
                <button
                  onClick={onScrollToAbout}
                  className="text-black font-bold hover:text-white hover:shadow-md transition"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={onScrollToContact}
                  className="text-black font-bold hover:text-white hover:shadow-md transition"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Success Message */}
      {successMessage && (
        <div className="bg-green-500 text-white py-2 text-center">
          <p>{successMessage}</p>
        </div>
      )}

      {/* Modal for Login/Register */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">
              {isLogin ? "Login" : "Register"}
            </h2>
            <form>
              <div className="mb-4">
                <label className="block font-bold mb-1">Email:</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-1">Password:</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Enter your password"
                  required
                />
              </div>
              {!isLogin && (
                <div className="mb-4">
                  <label className="block font-bold mb-1">Confirm Password:</label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 border rounded"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              )}
              <button
                type="button"
                className="bg-yellow-500 text-black font-bold px-4 py-2 rounded w-full"
                onClick={handleSuccess}
              >
                {isLogin ? "Login" : "Register"}
              </button>
            </form>
            <button
              className="mt-4 text-red-500 hover:underline"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarPage;
