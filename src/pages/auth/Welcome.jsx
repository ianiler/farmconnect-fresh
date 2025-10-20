// src/pages/auth/Welcome.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-100 to-green-200 px-4 sm:px-6">
      {/* App Logo */}
      <motion.img
        src="/images/logo.png"
        alt="FarmConnect Logo"
        className="w-32 h-32 rounded-full shadow-md mb-6 sm:mb-8 object-cover"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Title */}
      <motion.h1
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-2xl sm:text-3xl font-bold text-green-800 mb-2 text-center"
      >
        Buy farm produce
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-gray-700 text-center mb-6 sm:mb-8 max-w-xs sm:max-w-sm"
      >
        Buying fresh and organic farm produce made easy.
      </motion.p>

      {/* Hero Image */}
      <motion.img
        src="/images/welcome-hero.png"
        alt="Welcome Illustration"
        className="w-64 sm:w-72 h-64 sm:h-72 rounded-2xl shadow-inner mb-6 sm:mb-10 object-cover"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      />

      {/* Get Started Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/choose")}
        className="w-full max-w-xs sm:max-w-sm bg-green-600 text-white py-3 rounded-xl font-semibold shadow-md hover:bg-green-700 transition-all"
      >
        Get Started
      </motion.button>
    </div>
  );
}
