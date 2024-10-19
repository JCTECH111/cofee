import React, { useState, useEffect } from 'react';
import image4 from "../assets/slide4.jpeg"
import { Link } from 'react-router-dom';
function ProductDetailScreen() {
  // State to trigger the animations
  const [animate, setAnimate] = useState(false);

  // Trigger animations on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);  // Adjust delay as needed
    return () => clearTimeout(timer);
  }, []);
  const [quantity, setQuantity] = useState(1);
  const unitPrice = 50.00; // Assuming the price is $50.00 for this example
  const [totalPrice, setTotalPrice] = useState(unitPrice);

  // Update the total price whenever the quantity changes
  useEffect(() => {
    setTotalPrice(quantity * unitPrice);
  }, [quantity]);

  const increaseQuantity = () => {
    setQuantity(prevQty => prevQty + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQty => prevQty - 1);
    }
  };
  return (
    <div className="min-h-screen  flex flex-col items-center">
      {/* Product Image Section */}
      <div
        className={`product-image w-full h-[25rem]  rounded-b-[2rem] flex items-center justify-center overflow-hidden transition-all duration-1000 ${
          animate ? 'slide-down' : 'translate-y-[-100%]'
        }`}
      >
        <img
          src={image4}
          alt="Product"
          className="h-[20rem] w-full object-cover rounded-lg"
        />
      </div>

      {/* Product Details Section */}
      <div
        className={`product-details w-full max-w-2xl p-6 h-[38rem] bg-white rounded-t-[2rem]  rounded-lg relative bottom-14 transition-all duration-1000 ${
          animate ? 'slide-up' : 'translate-y-[100%]'
        }`}
      >
        <h2 className="text-3xl font-bold text-gray-800">laravasca</h2>
        <p className="text-xl text-brown-600 font-semibold mt-2">${unitPrice.toFixed(2)}</p>

        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-700">Description</h3>
          <p className="text-gray-600 mt-2">
          Indulge in the rich, bold flavor of our Colombian Dark Roast Coffee, expertly sourced from the finest coffee farms in Colombia. Each bean is carefully handpicked and slow-roasted to perfection, ensuring a robust and aromatic brew that coffee enthusiasts will love. This dark roast blend offers deep, smoky undertones with hints of chocolate and caramel, giving you a full-bodied experience in every sip. Ideal for those who appreciate a strong, smooth coffee with minimal acidity, it's the perfect way to start your day or enjoy a pick-me-up any time.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700">Details</h3>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Very Sweet</li>
            <li>Suitable for Programmers</li>
            <li>Joy Giver</li>
          </ul>
        </div>

        {/* Quantity Selector */}
        <div className="mt-6 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-700">Quantity</h3>
          <div className="flex items-center gap-4">
            <button
              className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
              onClick={decreaseQuantity}
              disabled={quantity <= 1}
            >
              -
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
              onClick={increaseQuantity}
            >
              +
            </button>
          </div>
        </div>

        {/* Display Total Price */}
        <div className="mt-4 text-lg font-bold text-gray-800">
          Total Price: ${totalPrice.toFixed(2)}
        </div>

        <Link to='/cart'>
        <button className="w-full mt-8 bg-brown-600 text-white py-3 rounded-lg hover:bg-brown-700 transition duration-200">
          Add to Cart
        </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetailScreen;
