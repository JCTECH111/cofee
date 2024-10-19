// src/screens/HomeScreen.js
import React from 'react';
import { Link } from 'react-router-dom';
import { IoHome, IoCart, IoStar, IoPerson } from 'react-icons/io5';

export default function BottomTabs() {
  return (
    <div className="home-screen">

      {/* Bottom Tabs */}
      <div className="bottom-tabs bg-white">
      <Link to="/home" className={`tab-link flex flex-col items-center `}>
        <IoHome size={45} className={`hover:text-brown-700 ${
            location.pathname === '/home' ? 'text-brown-600' : 'text-gray-700'
         } hover:text-brown-700`}/>
        <span className={`${
            location.pathname === '/home' ? 'text-brown-600' : 'text-gray-700'
         } hover:text-brown-700`}>Home</span>
      </Link>
      <Link to="/cart" className="tab-link flex flex-col items-center">
        <IoCart size={45} className={`hover:text-brown-700 ${
            location.pathname === '/cart' ? 'text-brown-600' : 'text-gray-700'
         } hover:text-brown-700`} />
        <span className={`${
            location.pathname === '/cart' ? 'text-brown-600' : 'text-gray-700'
         } hover:text-brown-700`}>Cart</span>
      </Link>
      <Link to="/reviews" className="tab-link flex flex-col items-center">
        <IoStar size={45} className={`hover:text-brown-700 ${
            location.pathname === '/reviews' ? 'text-brown-600' : 'text-gray-700'
         } hover:text-brown-700`} />
        <span className={`${
            location.pathname === '/reviews' ? 'text-brown-600' : 'text-gray-700'
         } hover:text-brown-700`}>Reviews</span>
      </Link>
      <Link to="/profile" className="tab-link flex flex-col items-center text-gray-700">
        <IoPerson size={45} className={`hover:text-brown-700 ${
            location.pathname === '/profile' ? 'text-brown-600' : 'text-gray-700'
         } hover:text-brown-700`} />
        <span className={`${
            location.pathname === '/profile' ? 'text-brown-600' : 'text-gray-700'
         } hover:text-brown-700`}>Profile</span>
      </Link>
      </div>

      {/* Tab Styling */}
      <style>{`
        .bottom-tabs {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          height: 67px;
          display: flex;
          justify-content: space-around;
        }
        .tab-link {
          text-align: center;
          padding: 10px;
          font-size: 16px;
          text-decoration: none;
          flex-grow: 1;
        }
        .tab-link:hover {
          color: #763b2a;
        }
      `}</style>
    </div>
  );
}
