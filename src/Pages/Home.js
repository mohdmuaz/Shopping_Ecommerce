import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-gray-800 bg-opacity-90">
      <div
        className="w-full h-screen bg-cover bg-no-repeat bg-right shadow-lg bg-[url('./Page/images/watch2.png')]"
        style={{
          backgroundPosition: '80%',
        }}
      >
        <div className="w-3/5 pt-52 ml-5">
          <h1 className="text-white text-4xl font-bold drop-shadow-md">Best Deal</h1>
          <h1 className="text-white text-4xl font-bold drop-shadow-md">Awesome Product</h1>
          <p className="text-white text-lg drop-shadow-md text-left mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>
          <div className="mt-2">
            <button className="w-52 h-8 bg-yellow-500 border-none tracking-widest font-bold transition duration-300 ease-in-out cursor-pointer hover:shadow-[0_0_5px_rgba(245,181,0,1),0_0_20px_rgba(245,181,0,1),0_0_60px_rgba(245,181,0,1),0_0_150px_rgba(245,181,0,1)]">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
