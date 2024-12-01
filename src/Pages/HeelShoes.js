import React, { useState } from 'react';

import P1 from './images/p8.png';
import P2 from './images/p8.png';
import P3 from './images/p8.png';
import P4 from './images/p8.png';
import P5 from './images/p8.png';
import P6 from './images/p8.png';
import P7 from './images/p8.png';
import P8 from './images/p8.png';


const HeelShoes = () => {
  const products = [
    { id: 1, title: "Girls Heel-Shoes", price: "Price: $45.99", image: P1, rating: 5, description: "A smart and elegant formal shirt. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old." },

    { id: 2, title: "Girls Heel-Shoes", price: "Price: $200.50", image: P2, rating: 3, description: "A stylish and comfortable black t-shirt. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old." },

    { id: 3, title: "Girls Heel-Shoes", price: "Price: $500.60", image: P3, rating: 4, description: "A cozy hoodie perfect for winter. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old." },

    { id: 4, title: "Girls Heel-Shoes", price: "Price: $300.70", image: P4, rating: 5, description: "A fashionable suit for parties and events. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old." },

    { id: 5, title: "Girls Heel-Shoes", price: "Price: $500.10", image: P5, rating: 5, description: "Durable and stylish sport shoes for active use. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old." },

    { id: 6, title: "Girls Heel-Shoes", price: "Price: $60.50", image: P6, rating: 3, description: "A beautiful handbag for daily use. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old." },

    { id: 7, title: "Girls Heel-Shoes", price: "Price: $1000.50", image: P7, rating: 3, description: "Premium quality sport shoes for professionals. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old." },

    { id: 8, title: "Girls Heel-Shoes", price: "Price: $100.50", image: P8, rating: 5, description: "Elegant heels for special occasions. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old." },
  ];

  const [modalProduct, setModalProduct] = useState(null);
  const [cart, setCart] = useState([]);


  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i
          key={i}
          className={`bx bxs-star ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}
        ></i>
      );
    }
    return stars;
  };

  // Handle product click to open modal
  const handleProductClick = (product) => {
    setModalProduct(product);
  };

  // Add product to cart with quantity 1
  const handleAddToCart = (product) => {
    const existingItem = cart.find((item) => item.product.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { product, quantity: 0 }]); // Initialize with quantity 1
    }
  };

  // Increase quantity
  const handleIncreaseQuantity = (productId) => {
    const existingItem = cart.find((item) => item.product.id === productId);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Add to cart if not present
      const product = products.find((p) => p.id === productId);
      if (product) handleAddToCart(product);
    }
  };

  // Decrease quantity
  const handleDecreaseQuantity = (productId) => {
    setCart(
      cart
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Get cart quantity for a product
  const getCartQuantity = (productId) => {
    const item = cart.find((item) => item.product.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold text-center">PRODUCTS HEEL-SHOES</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="card border rounded-lg shadow-lg hover:scale-105 transform transition duration-300 cursor-pointer"
            onClick={() => handleProductClick(product)}
          >
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="card-body p-4 text-center">
              <h5 className="card-title text-lg font-semibold text-gray-800">{product.title}</h5>
              <p className="text-gray-600">{product.price}</p>
              <div className="star flex justify-center mt-2 space-x-1">{renderStars(product.rating)}</div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(product);
                }}
                className="bg-yellow-500 text-white font-bold px-4 py-2 mt-4 rounded shadow-md hover:bg-yellow-600 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Product Detail Modal */}
      {modalProduct && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-lg w-full relative">
            <button
              onClick={() => setModalProduct(null)}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2"
            >
              X
            </button>
            <img src={modalProduct.image} alt={modalProduct.title} className="w-full h-60 object-cover mb-4 rounded-lg" />
            <h2 className="text-2xl font-bold mb-2">{modalProduct.title}</h2>
            <p className="text-lg text-gray-700 mb-4">{modalProduct.description}</p>
            <p className="text-xl font-semibold mb-4">{modalProduct.price}</p>
            <div className="flex justify-center space-x-2 mb-4">{renderStars(modalProduct.rating)}</div>

            {/* Quantity Controls */}
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={() => handleDecreaseQuantity(modalProduct.id)}
                className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                -
              </button>
              <span className="text-lg font-semibold">{getCartQuantity(modalProduct.id)}</span>
              <button
                onClick={() => handleIncreaseQuantity(modalProduct.id)}
                className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                +
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeelShoes;