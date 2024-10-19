import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ReviewModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle review submission logic here
    console.log({ name, rating, comment });
    // Close the modal after submission
    onClose();
  };

  return (
    <motion.div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-lg p-6 w-96"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
      >
        <h2 className="text-lg font-bold mb-4">Write a Review</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded px-2 py-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Rating</label>
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="w-full border rounded px-2 py-1"
            >
              <option value={1}>1 Star</option>
              <option value={2}>2 Stars</option>
              <option value={3}>3 Stars</option>
              <option value={4}>4 Stars</option>
              <option value={5}>5 Stars</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-1">Comment</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full border rounded px-2 py-1"
              rows="4"
              required
            />
          </div>
          <div className="flex justify-end">
            <button type="button" className="mr-2 bg-gray-300 text-gray-700 py-2 px-4 rounded" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="bg-brown-600 text-white py-2 px-4 rounded">
              Submit
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ReviewModal;
