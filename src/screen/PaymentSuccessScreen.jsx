import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoCheckmarkCircle } from 'react-icons/io5';

function PaymentSuccessScreen() {
  const navigate = useNavigate();

  // Redirect to homepage after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup timer when the component unmounts
  }, [navigate]);

  return (
    <div className="success-screen w-full min-h-screen flex flex-col justify-center items-center ">
      {/* Success Message and Icon */}
      <div className="bg-white p-8 rounded-lg  flex flex-col items-center">
        <IoCheckmarkCircle size={100} className="text-green-500 mb-6" />
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Payment Successful!</h2>
        <p className="text-lg text-gray-600">
          Thank you for your purchase. You will be redirected to the homepage shortly.
        </p>
      </div>
    </div>
  );
}

export default PaymentSuccessScreen;
