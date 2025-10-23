// src/pages/buyer/OrderSuccess.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";

export default function OrderSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    // Optional: Clear cart after successful order
    localStorage.removeItem("cart");
  }, []);

  const total = 3500; // Example total — can pass via state or context later

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-green-100 p-6 text-center"
    >
      {/* Success Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="bg-green-100 rounded-full p-6 shadow-md mb-6"
      >
        <CheckCircle2 className="w-16 h-16 text-green-700" />
      </motion.div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-green-800 mb-2">
        Payment Successful!
      </h1>
      <p className="text-gray-600 mb-6">
        Your order has been placed successfully on the <b>Base Testnet</b>.
      </p>

      {/* Order Summary Card */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md space-y-3 border border-green-100"
      >
        <h2 className="text-lg font-semibold text-green-800 text-left">
          Order Summary
        </h2>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Items:</span>
          <span>3</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Delivery Fee:</span>
          <span>UGX 500</span>
        </div>
        <div className="border-t border-green-200 my-2"></div>
        <div className="flex justify-between font-bold text-green-800">
          <span>Total Paid:</span>
          <span>UGX {total.toLocaleString()}</span>
        </div>
      </motion.div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <Button
          onClick={() => navigate("/buyer/home")}
          className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-all shadow-md"
        >
          Continue Shopping
        </Button>
        <Button
          onClick={() => navigate("/buyer/orders")}
          className="bg-white border border-green-600 text-green-700 px-6 py-3 rounded-lg hover:bg-green-50 transition-all shadow-md"
        >
          View My Orders
        </Button>
      </div>
    </motion.div>
  );
}
