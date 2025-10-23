// src/pages/buyer/MyOrders.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  CheckCircle2,
  Clock,
  XCircle,
  Home,
  Clipboard,
  List,
  User,
} from "lucide-react";
import Button from "@/components/ui/Button";

export default function MyOrders() {
  const navigate = useNavigate();

  const orders = [
    {
      id: 1,
      date: "Sun 19th May 2023",
      farmer: "Kanda Fresh Produce",
      items: 3,
      total: "UGX 12,500",
      status: "Processing",
      icon: <Clock className="text-blue-500 w-5 h-5" />,
      color: "bg-blue-100 text-blue-700",
    },
    {
      id: 2,
      date: "Mon 20th May 2023",
      farmer: "Green Valley Farms",
      items: 5,
      total: "UGX 18,000",
      status: "Delivered",
      icon: <CheckCircle2 className="text-green-600 w-5 h-5" />,
      color: "bg-green-100 text-green-700",
    },
    {
      id: 3,
      date: "Tue 21st May 2023",
      farmer: "EcoHarvest Uganda",
      items: 2,
      total: "UGX 7,000",
      status: "Cancelled",
      icon: <XCircle className="text-red-500 w-5 h-5" />,
      color: "bg-red-100 text-red-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 pb-20 px-4 sm:px-6">
      {/* Header */}
      <div className="flex justify-between items-center py-6">
        <h1 className="text-2xl font-bold text-green-800">My Orders</h1>
        <Clipboard className="h-6 w-6 text-green-700" />
      </div>

      {/* Orders List */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        {orders.map((order, index) => (
          <motion.div
            key={order.id}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={() => navigate(`/order/${order.id}`)}
            className="bg-white rounded-2xl shadow-md border border-green-100 p-5 cursor-pointer hover:shadow-lg transition-all"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="font-semibold text-green-800 text-lg">
                  {order.farmer}
                </h2>
                <p className="text-sm text-gray-500">{order.date}</p>
              </div>
              <span
                className={`flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full ${order.color}`}
              >
                {order.icon}
                {order.status}
              </span>
            </div>

            <div className="mt-3 flex justify-between items-center text-sm text-gray-700">
              <p>{order.items} items</p>
              <p className="font-semibold text-green-700">{order.total}</p>
            </div>

            <div className="mt-3 text-xs text-gray-500">
              Tap to view details and blockchain tracking
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-inner py-2 flex justify-around">
        <NavButton
          icon={<Home className="h-5 w-5" />}
          label="Home"
          onClick={() => navigate("/buyer/home")}
        />
        <NavButton
          icon={<Clipboard className="h-5 w-5 text-green-700" />}
          label="Orders"
        />
        <NavButton
          icon={<List className="h-5 w-5" />}
          label="List"
          onClick={() => navigate("/buyer/saved-items")}
        />
        <NavButton
          icon={<User className="h-5 w-5" />}
          label="Profile"
          onClick={() => navigate("/buyer/profile")}
        />
      </div>
    </div>
  );
}

function NavButton({ icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center text-gray-600 hover:text-green-700"
    >
      {icon}
      <span className="text-xs mt-0.5">{label}</span>
    </button>
  );
}
