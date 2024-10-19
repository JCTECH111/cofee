import React, { useState } from 'react';
import BottomTabs from '../components/BottomTabs';
import { IoRemove, IoAdd, IoTrash } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import image1 from "../assets/slide1.jpeg"
import image2 from "../assets/slide2.jpeg"
import image3 from "../assets/slide3.jpeg"

function CartScreen() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'laravasca', price: 20.00, quantity: 1, image: image1 },
    { id: 2, name: 'Zakarto', price: 35.00, quantity: 2, image: image2 },
    { id: 3, name: 'bopatota', price: 15.00, quantity: 5, image: image3 },
  ]);

  const incrementQuantity = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrementQuantity = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-screen w-full h-full flex flex-col">
      <h2 className="text-2xl font-bold text-gray-800 p-4">Your Cart</h2>

      {/* Cart Items */}
      <div className="cart-items flex flex-col gap-4 p-4">
        {cartItems.map(item => (
          <div
            key={item.id}
            className="cart-item flex justify-between items-center bg-white shadow-md p-4 rounded-lg"
          >
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">{item.name}</h4>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                <div className="flex items-center gap-4 ">
              <button
                onClick={() => decrementQuantity(item.id)}
                className="text-brown-600 bg-gray-200 p-2 rounded-full"
              >
                <IoRemove size={20} />
              </button>
              <span className="text-lg font-bold">{item.quantity}</span>
              <button
                onClick={() => incrementQuantity(item.id)}
                className="text-brown-600 bg-gray-200 p-2 rounded-full"
              >
                <IoAdd size={20} />
              </button>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-600 bg-gray-200 p-2 rounded-full"
              >
                <IoTrash size={20} />
              </button>
              </div>
              </div>
              
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="cart-summary bg-white p-4 rounded-lg shadow-md m-4 mb-16">
        <div className="flex justify-between">
          <h3 className="text-lg font-bold text-gray-800">Total:</h3>
          <p className="text-lg font-bold text-gray-800">${totalPrice.toFixed(2)}</p>
        </div>
        <Link to="/checkout">
          <button className="w-full mt-4 bg-brown-600 text-white py-3 rounded-lg hover:bg-brown-700 transition duration-200">
            Proceed to Checkout
          </button>
        </Link>
      </div>

      {/* Bottom Navigation */}
      <BottomTabs />
    </div>
  );
}

export default CartScreen;
