import React from 'react';

const AllCategory = () => {
  const categories = [
    'T-Shirts',
    'Shoes',
    'Hoodies',
    'Cap',
    'Pants',
    'Laptop',
    'Keyboard',
    'Cameras',
    'Computer Mouse',
    'iPad & Tablets',
  ];

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-center mt-12">All Category</h1>
      <div className="flex flex-wrap justify-around mt-6 gap-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className="bg-blue-400 text-white font-semibold py-2 px-4 rounded shadow-lg hover:bg-blue-600 transition duration-300"
          >
            <a href="#" className="nav-link">
              {category}
            </a>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllCategory;
