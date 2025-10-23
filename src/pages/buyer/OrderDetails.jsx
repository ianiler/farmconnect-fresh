// src/pages/buyer/OrderDetails.jsx
import React from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Package,
  Truck,
  CheckCircle2,
  Clock,
  User,
  Wallet,
} from "lucide-react";
import Button from "@/components/ui/Button";

export default function OrderDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const order = {
    id,
    status: "Processing",
    type: "Delivery",
    item: "Tomatoes",
    category: "Vegetables",
    quantity: "2kg",
    estimatedDelivery: "12:30 PM",
    price: "UGX 2,000",
    farmer: "Ali Kanda",
    transactionHash: "0x29f1aB3cD91f8f21C5e8eD3b0f123...",
  };

  const steps = [
    { label: "Order Placed", icon: <Package className="w-5 h-5" />, active: true },
    { label: "Processing", icon: <Clock className="w-5 h-5" />, active: order.status === "Processing" },
    { label: "On the Way", icon: <Truck className="w-5 h-5" />, active: false },
    { label: "Delivered", icon: <CheckCircle2 className="w-5 h-5" />, active: order.status === "Delivered" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 px-5 pb-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 py-6"
      >
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="text-green-700 hover:bg-green-100 rounded-full p-2"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold text-green-800">Order Details</h1>
      </motion.div>

      {/* Order Summary Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-2xl shadow-md border border-green-100 p-5 mb-6"
      >
        <div className="flex justify-between items-center mb-3">
          <div>
            <h2 className="text-lg font-semibold text-green-800">{order.item}</h2>
            <p className="text-sm text-gray-500">{order.category}</p>
          </div>
          <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-semibold">
            {order.status}
          </span>
        </div>

        <div className="text-sm text-gray-700 space-y-1">
          <p>Quantity: <span className="font-medium">{order.quantity}</span></p>
          <p>Delivery Type: <span className="font-medium">{order.type}</span></p>
          <p>Estimated Delivery: <span className="font-medium text-green-700">{order.estimatedDelivery}</span></p>
          <p>Farmer: <span className="font-medium">{order.farmer}</span></p>
          <p>Price: <span className="font-semibold text-green-700">{order.price}</span></p>
        </div>
      </motion.div>

      {/* Delivery Progress Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-2xl shadow-md border border-green-100 p-5 mb-6"
      >
        <h3 className="text-lg font-semibold text-green-800 mb-3">Delivery Progress</h3>
        <div className="flex items-center justify-between relative">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center relative z-10">
              <div
                className={`p-3 rounded-full ${
                  step.active ? "bg-green-600 text-white" : "bg-gray-200 text-gray-500"
                }`}
              >
                {step.icon}
              </div>
              <p
                className={`text-xs mt-2 ${
                  step.active ? "text-green-700 font-semibold" : "text-gray-500"
                }`}
              >
                {step.label}
              </p>
              {index < steps.length - 1 && (
                <div className="absolute top-5 left-1/2 w-full h-0.5 bg-gray-300 -z-10"></div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Blockchain Transaction Info */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-2xl shadow-md border border-green-100 p-5 mb-6"
      >
        <div className="flex items-center gap-3 mb-3">
          <Wallet className="h-5 w-5 text-green-700" />
          <h3 className="text-lg font-semibold text-green-800">Blockchain Record</h3>
        </div>
        <p className="text-sm text-gray-600">
          Transaction Hash:{" "}
          <span className="font-mono text-green-700 break-all">{order.transactionHash}</span>
        </p>
        <Button
          className="mt-4 w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-lg"
          onClick={() => window.open(`https://basescan.org/tx/${order.transactionHash}`, "_blank")}
        >
          View on BaseScan
        </Button>
      </motion.div>

      {/* Track Button */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Button
          className="w-full bg-gradient-to-r from-green-700 to-green-600 hover:from-green-800 hover:to-green-700 text-white rounded-xl py-3 font-semibold shadow-md"
          onClick={() => navigate("/track-order")}
        >
          Track My Order
        </Button>
      </motion.div>
    </div>
  );
}
