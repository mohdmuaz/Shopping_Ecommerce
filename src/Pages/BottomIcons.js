import React from 'react';
import FreeShipping from './images/free-shipping.png';
import FastDelivery from './images/fast-delivery.png';
import BigChoice from './images/Big-choice.png';;

const FooterOffers = () => {
  return (
    <div className="w-full border-t border-b py-8 mt-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Free Shipping */}
        <div className="flex items-center p-6 bg-gray-800 rounded-lg">
          <div className="flex-shrink-0">
            <img src={FreeShipping} alt="Free Shipping" className="w-16 h-16" />
          </div>
          <div className="ml-4 text-white">
            <h3 className="text-lg font-semibold">Free Shipping</h3>
            <p className="text-sm text-gray-400">on orders over $100</p>
          </div>
        </div>

        {/* Fast Delivery */}
        <div className="flex items-center p-6 bg-gray-800 rounded-lg">
          <div className="flex-shrink-0">
            <img src={FastDelivery} alt="Fast Delivery" className="w-16 h-16" />
          </div>
          <div className="ml-4 text-white">
            <h3 className="text-lg font-semibold">Fast Delivery</h3>
            <p className="text-sm text-gray-400">World Wide</p>
          </div>
        </div>

        {/* Big Choice */}
        <div className="flex items-center p-6 bg-gray-800 rounded-lg">
          <div className="flex-shrink-0">
            <img src={BigChoice} alt="Big Choice" className="w-16 h-16" />
          </div>
          <div className="ml-4 text-white">
            <h3 className="text-lg font-semibold">Big Choice</h3>
            <p className="text-sm text-gray-400">of Products</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterOffers;
