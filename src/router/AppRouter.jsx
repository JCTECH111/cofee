// src/navigation/AppNavigator.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from '../screen/SplashScreen';
import HomeScreen from '../screen/HomeScreen';
import ProductDetailScreen from '../screen/ProductDetailScreen';
import VerifyCodeScreen from '../screen/VerifyCodeScreen';
import ReviewSubmissionScreen from '../screen/ReviewSubmissionScreen';
import CartScreen from '../screen/CartScreen';
import ReviewsScreen from '../screen/ReviewsScreen';
import Profile from '../screen/Profile';
import OnBoard from '../authentication/OnBoard';
import SignIn from '../authentication/SignIn';
import SignUp from '../authentication/SignUp';
import CheckoutScreen from '../screen/Checkout';
import PaymentSuccessScreen from '../screen/PaymentSuccessScreen';
import NotFound from '../screen/NotFound';

export default function AppNavigator() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/product/:id" element={<ProductDetailScreen />} />
        <Route path="/verify" element={<VerifyCodeScreen />} />
        <Route path="/review-submission" element={<ReviewSubmissionScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/reviews" element={<ReviewsScreen />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/onboard" element={<OnBoard />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/checkout" element={<CheckoutScreen />} />
        <Route path="/success" element={<PaymentSuccessScreen />} />
        {/* Catch-all route for 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
