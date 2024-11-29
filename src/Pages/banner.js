import React, { useState, useEffect } from "react";


function DynamicText() {
  const products = [
    "T SHIRT",
    "SHOES",
    "HOODIES",
    "CAP",
    "PANTS",
    "LAPTOP",
    "KEYBOARD",
    "CAMERAS",
    "COMPUTER MOUSE",
    "GAMING PC",
    "WATCH",
    "IPAD & TABLETS",
    "HEADPHONES",
  ];

  const [currentText, setCurrentText] = useState(0);

  function updateText() {
    setCurrentText(function (prevIndex) {
      return (prevIndex + 1) % products.length;
    });
  }

  useEffect(function () {
    const interval = setInterval(updateText, 1000);

    return function cleanup() {
      clearInterval(interval); // Cleanup interval on unmount
    };
  }, [products.length]);

  return (
    <span className="text-yellow-500 font-bold">
      {products.map(function (product, index) {
        if (index === currentText) {
          return product; // Render the current product only
        }
        return null; // Render nothing for all other products
      })}
    </span>
  );
}

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
      <div className="text-center">
      <h1 className="text-4x2 font-bold mb-4">
      UP TO 50% OFF
        </h1>
        <h1 className="text-4xl font-bold mb-2">
          Best Deal <DynamicText />
        </h1>
        <div className="mt-2">
          <button className="w-52 h-8 bg-yellow-500 border-none tracking-widest font-bold transition duration-300 ease-in-out cursor-pointer hover:shadow-[0_0_5px_rgba(245,181,0,1),0_0_20px_rgba(245,181,0,1),0_0_60px_rgba(245,181,0,1),0_0_150px_rgba(245,181,0,1)]">
            SHOP NOW
          </button>
        </div>
        <div className="relative mt-12">
          <div className="relative bg-gray-800 h-14 w-96 rounded-full px-3 flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-white text-lg outline-none transition-all duration-300 ease-in-out w-0 focus:w-44"
            />
            <a className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 cursor-pointer ml-auto">
              <i className="bx bx-search text-white text-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
