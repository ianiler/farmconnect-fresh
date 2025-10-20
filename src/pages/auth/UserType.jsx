import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function UserType() {
  const navigate = useNavigate();

  const handleSelect = (role) => {
    navigate(`/login?role=${role}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 via-green-200 to-green-300 px-4 sm:px-6">
      
      {/* Header */}
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl font-bold text-green-800 mb-6 text-center drop-shadow-md"
      >
        Choose your role
      </motion.h1>

      <motion.p
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-700 mb-10 text-center text-sm sm:text-base max-w-xs sm:max-w-md"
      >
        Select your profile type to continue
      </motion.p>

      {/* Cards Container */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        
        {/* Farmer Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => handleSelect("farmer")}
          className="w-full sm:w-64 bg-white rounded-3xl p-6 cursor-pointer transition-all shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-green-400 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-green-50 via-green-100 to-green-50 opacity-30 rounded-3xl pointer-events-none"></div>
          <div className="flex flex-col items-center relative z-10">
            <div className="w-20 h-20 mb-4">
              <img
                src="/images/farmer.png"
                alt="Farmer"
                className="w-full h-full object-cover rounded-full shadow-md"
              />
            </div>
            <h2 className="text-xl font-semibold text-green-800 mb-2">Farmer</h2>
            <p className="text-gray-600 text-center text-sm sm:text-base">
              Sell your crops and connect directly with buyers.
            </p>
          </div>
        </motion.div>

        {/* Buyer Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => handleSelect("buyer")}
          className="w-full sm:w-64 bg-white rounded-3xl p-6 cursor-pointer transition-all shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-green-400 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-green-50 via-green-100 to-green-50 opacity-30 rounded-3xl pointer-events-none"></div>
          <div className="flex flex-col items-center relative z-10">
            <div className="w-20 h-20 mb-4">
              <img
                src="/images/cart.png"
                alt="Buyer Cart"
                className="w-full h-full object-cover rounded-full shadow-md"
              />
            </div>
            <h2 className="text-xl font-semibold text-green-800 mb-2">Buyer</h2>
            <p className="text-gray-600 text-center text-sm sm:text-base">
              Buy fresh farm produce directly from trusted farmers.
            </p>
          </div>
        </motion.div>

      </div>

      {/* Skip */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/login")}
        className="mt-10 text-green-700 font-medium hover:underline transition-colors"
      >
        Skip for now
      </motion.button>
    </div>
  );
}
