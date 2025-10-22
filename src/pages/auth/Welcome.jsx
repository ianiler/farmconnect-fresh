import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-100 to-green-200 px-6">
      
      {/* 🌾 App Logo */}
      <motion.img
        src="/images/logo.png" // ✅ Make sure this exists in public/images/
        alt="FarmConnect Logo"
        className="w-28 h-28 sm:w-32 sm:h-32 rounded-full shadow-lg mb-6 sm:mb-8 object-cover border-2 border-white"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* 🌱 Title */}
      <motion.h1
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-3xl sm:text-4xl font-bold text-green-800 mb-3 text-center drop-shadow-md"
      >
        Buy Farm Produce
      </motion.h1>

      {/* 🍅 Subtitle */}
      <motion.p
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-gray-700 text-center mb-6 sm:mb-10 max-w-xs sm:max-w-md leading-relaxed"
      >
        Fresh, organic, and locally sourced food — connecting farmers and buyers directly.
      </motion.p>

      {/* 🖼️ Hero Image */}
      <motion.img
        src="/images/welcome-hero.png" // ✅ Make sure you have this in /public/images/
        alt="Welcome to FarmConnect"
        className="w-64 sm:w-80 h-64 sm:h-80 rounded-3xl shadow-inner mb-8 object-cover"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      />

      {/* 🚀 Get Started Button – Made black, bold, and positioned below like a standard Android button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/choose")}
        className="w-full max-w-xs sm:max-w-sm bg-black text-white py-3 rounded-xl font-bold shadow-md hover:bg-gray-900 transition-all mt-4" // Black bg, bold font, extra margin below for "below" positioning
      >
        Get Started
      </motion.button>

      {/* 🔐 Optional Login Shortcut */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="text-sm text-gray-700 mt-4"
      >
        Already have an account?{" "}
        <span
          onClick={() => navigate("/login")}
          className="text-green-700 font-semibold cursor-pointer hover:underline"
        >
          Log in
        </span>
      </motion.p>
    </div>
  );
}