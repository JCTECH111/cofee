import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ReviewModal from './ReviewModal'; // Import the modal component
import BottomTabs from '../components/BottomTabs'
const reviews = [
  {
    name: "JoeCode",
    rating: 5,
    comment: "The product is absolutely amazing! The quality exceeded my expectations, and I couldn't be happier.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuNw1fDzeYGH2BFi4ufuCv2EORvqxoEMDdoA&s",
  },
  {
    name: "Jane Smith",
    rating: 4,
    comment: "Great product! I love the design, but shipping was a little slow.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRXxfn1j1vKFy8yJeBGl2AS6Dcah-lKgHofg&s",
  },
  {
    name: "Michael Brown",
    rating: 5,
    comment: "Fantastic! Customer service was excellent, and the product is worth every penny.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRezkhZEGyU-SbkR5X1RGxo8OxQFLfKonocyg&s",
  },
];

const ReviewsScreen = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="reviews-container min-h-screen p-6 bg-gray-100 flex flex-col items-center">
      <motion.h2
        className="text-3xl font-bold text-gray-800 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Customer Reviews
      </motion.h2>

      <div className="reviews-grid w-full max-w-4xl grid gap-6 grid-cols-1 md:grid-cols-2">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="review-card bg-white p-6 rounded-lg shadow-lg flex gap-4 items-start"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img src={review.image} alt={review.name} className="w-16 h-16 rounded-full" />
            <div className="flex-1">
              <div className="review-header flex items-center justify-between mb-2">
                <h3 className="font-semibold text-lg text-gray-800">{review.name}</h3>
                <div className="rating flex items-center gap-1 text-yellow-500">
                  {Array.from({ length: review.rating }, (_, i) => (
                    <motion.span key={i} className="text-xl">★</motion.span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="cta mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: reviews.length * 0.2 }}
      >
        <button
          onClick={toggleModal}
          className="bg-brown-600 text-white py-3 px-6 mb-14 rounded-lg hover:bg-brown-700 transition duration-200"
        >
          Write a Review
        </button>
      </motion.div>

      {/* Modal for writing a review */}
      <ReviewModal isOpen={isModalOpen} onClose={toggleModal} />
      <BottomTabs />
    </div>

  );
};

export default ReviewsScreen;
