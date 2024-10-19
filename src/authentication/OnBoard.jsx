import React, { useState, useEffect } from 'react';
import woman from '../assets/woman-removebg-preview.png';
import { Link } from 'react-router-dom';

function OnBoard() {
  // State to trigger the animations
  const [animate, setAnimate] = useState(false);

  // Use useEffect to start animations on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);  // Trigger animation after a small delay
    }, 100);  // You can adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div
        className={`head h-[23rem] w-full p-4 bg-brown-600 rounded-b-[2rem] overflow-hidden flex items-center justify-center transition-all duration-1000 ${
          animate ? 'slide-down' : 'translate-y-[-100%]'
        }`}
      >
        <img src={woman} className="h-[24rem] w-[25rem]" alt="woman" />
      </div>
      <div
        className={`w-full p-4 flex flex-col gap-4 items-center bg-white rounded-lg transition-all duration-1000 ${
          animate ? 'slide-up' : 'translate-y-[100%]'
        }`}
      >
        <h2 className="text-2xl font-bold text-gray-800">
          Step Into Our World of Coffee Delight
        </h2>
        <p className="text-gray-600 text-center">
          Discover the finest coffee blends and enjoy the perfect brew every day.
        </p>
        <button className="w-full bg-brown-600 text-white py-3 rounded-lg hover:bg-brown-700 transition duration-200">
          <Link to="/signup" className="block w-full text-center">
            Get Started
          </Link>
        </button>
        <div className="text-gray-700">
          Already have an account?{' '}
          <Link to="/signin" className="text-brown-600 hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OnBoard;
