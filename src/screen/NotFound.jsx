import React from 'react';
import notFoundImage from '../assets/404.png'; // Import the image

const NotFound = () => {
  return (
    <div className="not-found flex flex-col items-center justify-center h-screen text-center">
      <img
        src={notFoundImage}
        alt="404 - Page Not Found"
        className="w-1/2 h-auto mb-6" // Adjust width/height as necessary
      />
      <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-4">The page you are looking for does not exist.</p>
      <a href="/home" className="text-brown-600 hover:underline">Go Back Home</a>
    </div>
  );
};

export default NotFound;
