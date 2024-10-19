// src/screens/SplashScreen.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/cup1cut.jpg"

export default function SplashScreen() {
  const navigate = useNavigate();

  // Simulate a loading or splash screen effect
  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigate to the Home screen after 3 seconds
      navigate('/onboard');
    }, 5000); // 3 seconds

    return () => clearTimeout(timer); // Clean up the timer
  }, [navigate]);

  return (
    <div className="splash-screen bg-brown-600">
      <div className='h-48 w-48 bg-white rounded-full flex items-center justify-center align-center'>
      <img src={logo} alt="Logo" className='rounded-full h-32 w-32' />
      </div>

      <style>{`
        .splash-screen {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          text-align: center;
          font-family: Arial, sans-serif;
        }
        
      `}</style>
    </div>
  );
}
