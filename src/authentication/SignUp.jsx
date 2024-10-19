import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white p-6 rounded-lg  max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-4">Sign Up</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-gray-700">First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="John"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-600"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="Doe"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-600"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              placeholder="example@mail.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-600"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-600"
            />
          </div>

          <div className='!mb-3'>
            <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-600"
            />
          </div>
          <Link to="/verify" >
            <button className="w-full bg-brown-600 text-white py-2 rounded-lg hover:bg-brown-700 transition duration-200">
            Sign Up
            </button>
          </Link>

          <div className="text-center mt-4">
            <span className="text-gray-700">Already have an account?</span>
            <Link to="/signin" className="text-brown-600 hover:underline ml-1">Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
