// src/pages/auth/UserType.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function UserType() {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-b from-green-50 via-green-100 to-green-200 px-6">
      {/* Decorative background circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-200 rounded-full blur-3xl opacity-30 -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-300 rounded-full blur-3xl opacity-30 -z-10 animate-pulse"></div>

      {/* Header */}
      <motion.h1
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-extrabold text-green-800 mb-4 text-center drop-shadow-sm"
      >
        Join <span className="text-green-600">FarmConnect</span> As
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-700 text-center mb-10 max-w-md leading-relaxed"
      >
        Choose your role to continue — sell your produce as a{" "}
        <span className="font-semibold text-green-700">farmer</span> or shop fresh
        goods as a <span className="font-semibold text-green-700">buyer</span>.
      </motion.p>

      {/* Centered Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-3xl justify-items-center">
        {/* Farmer Card */}
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/signup-farmer")}
          className="cursor-pointer bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center justify-center hover:shadow-2xl transition-all w-72 border border-green-100"
        >
          <img
            src="/images/farmer.png"
            alt="Farmer"
            className="w-28 h-28 mb-5 object-contain drop-shadow-md"
          />
          <h2 className="text-2xl font-semibold text-green-700">Farmer</h2>
          <p className="text-gray-500 text-sm mt-3 text-center leading-snug">
            Sell your farm produce directly to customers.
          </p>
          {/* Dark button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-5 px-5 py-2 bg-green-900 text-white font-semibold rounded-lg shadow hover:bg-green-800 transition"
          >
            Join as Farmer
          </motion.button>
        </motion.div>

        {/* Buyer Card */}
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/signup-buyer")}
          className="cursor-pointer bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center justify-center hover:shadow-2xl transition-all w-72 border border-green-100"
        >
          <img
            src="/images/cart.png"
            alt="Buyer"
            className="w-28 h-28 mb-5 object-contain drop-shadow-md"
          />
          <h2 className="text-2xl font-semibold text-green-700">Buyer</h2>
          <p className="text-gray-500 text-sm mt-3 text-center leading-snug">
            Buy fresh produce from trusted local farmers.
          </p>
          {/* Dark button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-5 px-5 py-2 bg-green-900 text-white font-semibold rounded-lg shadow hover:bg-green-800 transition"
          >
            Join as Buyer
          </motion.button>
        </motion.div>
      </div>

      {/* Already have an account */}
      <p className="text-center text-sm text-gray-600 mt-10">
        Already have an account?{" "}
        <span
          onClick={() => navigate("/login")}
          className="text-green-700 font-semibold cursor-pointer hover:underline"
        >
          Log in
        </span>
      </p>
    </div>
  );
}
