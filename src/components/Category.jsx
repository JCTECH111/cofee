import React, { useState } from 'react';

const categoriesData = [
  { id: 1, name: 'Espresso' },
  { id: 2, name: 'Cappuccino' },
  { id: 3, name: 'Latte' },
  { id: 4, name: 'Macchiato' },
  { id: 5, name: 'Mocha' },
  { id: 6, name: 'Americano' },
  { id: 7, name: 'Flat White' },
  { id: 8, name: 'Affogato' }
];

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.name);
    // Additional functionality can be added here
  };

  return (
    <div className='categories p-4 flex flex-col gap-4 w-full'>
      {/* Title */}
      <h2 className='text-2xl text-gray-700 font-bold'>
        Categories
      </h2>

      {/* Scrollable Categories */}
      <div className='overflow-x-scroll w-full flex gap-4 pb-4'>
        {categoriesData.map((category) => (
          <div
            key={category.id}
            className={`category-item flex items-center justify-center h-12 px-3 w-auto bg-white shadow-md rounded-2xl text-sm font-bold text-gray-700 border-2 
            ${selectedCategory === category.name ? 'text-brown-600 border-brown-600' : 'hover:text-brown-600 hover:border-brown-600 border-gray-300'} 
            transition-colors cursor-pointer`}
            onClick={() => handleCategoryClick(category)}
          >
            <span>{category.name}</span>
          </div>
        ))}
      </div>

      {/* Display Selected Category */}
      {selectedCategory && (
        <div className="mt-4">
          <h3 className="text-xl text-brown-600 font-semibold">
            Selected Category: {selectedCategory}
          </h3>
        </div>
      )}
    </div>
  );
};

export default Categories;
