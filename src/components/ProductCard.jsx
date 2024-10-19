import React from 'react';
import { IoStar, IoAdd } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

function ProductCard({ productname, productimage, price, ratings }) {
  const navigate = useNavigate();

  // Function to handle Add button click
  const handleAddClick = () => {
    // Navigate to the ProductDetailScreen and pass the product details via state
    navigate('/product/:id', {
      state: { 
        productname, 
        productimage, 
        price, 
        ratings 
      },
    });
  };

  return (
    <div className='items'>
      <div className='image relative h-36'>
        <img src={productimage} className='w-full h-full rounded-xl' alt={productname} />
        <div className='ratings absolute top-3 left-2 bg-white text-brown-600 px-2 py-1 rounded-xl flex items-center justify-center gap-2'>
          <IoStar size={15} />
          <span className='font-bold text-[1rem]'>{ratings}</span>
        </div>
      </div>
      <div className='cart_env flex gap-2 items-center justify-between p-3 shadow-lg'>
        <div>
          <h4 className='text-brown-600 font-bold text-[1.03rem]'>{productname}</h4>
          <span className='text-brown-600'>{price}</span>
        </div>
        <div 
          className='circle h-12 w-12 bg-brown-600 text-white rounded-full flex items-center justify-center cursor-pointer'
          onClick={handleAddClick}
        >
          <IoAdd />
        </div>
      </div>
    </div>
  );
}

// Default props to provide fallback values if no props are passed
ProductCard.defaultProps = {
  productname: "Product Name",
  price: "00.00",
  ratings: 0,
  productimage: "https://via.placeholder.com/150",  // Placeholder image
};

export default ProductCard;
