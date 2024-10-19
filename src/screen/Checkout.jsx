import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CheckoutScreen() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');

  // Simulate the product total from the cart (could come from props or context)
  const totalAmount = 120.00; // Example total amount

  const handlePayment = (e) => {
    e.preventDefault();
    // Handle payment logic here
    alert('Payment successful!');
  };

  return (
    <div className="checkout-screen w-full min-h-screen flex flex-col items-center  py-8">
      {/* Payment Summary */}
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg  mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Summary</h2>

        {/* Total */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-700">Total Amount:</h3>
          <p className="text-lg font-bold text-gray-800">${totalAmount.toFixed(2)}</p>
        </div>

        <div className="border-t pt-4">
          <p className="text-sm text-gray-500">
            You are about to make a payment for the total above. Please fill in your payment details to proceed.
          </p>
        </div>
      </div>

      {/* Payment Form */}
      <form onSubmit={handlePayment} className="w-full max-w-2xl bg-white p-8  rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Payment Information</h2>

        {/* Card Number */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium">Card Number</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:border-brown-600"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="1234 5678 9123 4567"
            required
          />
        </div>

        {/* Expiry Date and CVV */}
        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label className="block text-gray-700 text-sm font-medium">Expiry Date</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:border-brown-600"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="MM/YY"
              required
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-700 text-sm font-medium">CVV</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:border-brown-600"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="123"
              required
            />
          </div>
        </div>

        {/* Name on Card */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium">Name on Card</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:border-brown-600"
            value={nameOnCard}
            onChange={(e) => setNameOnCard(e.target.value)}
            placeholder="John Doe"
            required
          />
        </div>

        {/* Submit Button */}
        <Link to='/success'>
        <button
          type="submit"
          className="w-full bg-brown-600 text-white py-3 rounded-lg hover:bg-brown-700 transition duration-200 text-lg"
        >
          Pay ${totalAmount.toFixed(2)}
        </button>
        </Link>
      </form>
    </div>
  );
}

export default CheckoutScreen;
