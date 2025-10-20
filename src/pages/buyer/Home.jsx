import React from "react";
import { motion } from "framer-motion";
import { Search, Bell, Home, Clipboard, List, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Input from "@/components/ui/Input"; // ✅ Default import (no curly braces)
import Button from "@/components/ui/Button"; // ✅ Default import (no curly braces)

export default function BuyerHome() {
  const navigate = useNavigate();

  const farmers = [
    { name: "Ali Kanda", image: "/images/farmer1.jpg" },
    { name: "Sandra Bullock", image: "/images/farmer2.jpg" },
    { name: "Yayha Bello", image: "/images/farmer3.jpg" },
    { name: "Esther Lade", image: "/images/farmer4.jpg" },
  ];

  const categories = [
    { name: "Vegetables", image: "/images/vegetables.jpg" },
    { name: "Poultry", image: "/images/poultry.jpg" },
    { name: "Fruits", image: "/images/fruits.jpg" },
    { name: "Fish", image: "/images/fish.jpg" },
  ];

  const popularProducts = [
    { name: "Cabbages", price: "₦1,200", farmer: "Ali Kanda", image: "/images/cabbage.jpg" },
    { name: "Sweet potatoes", price: "₦1,200", farmer: "Ali Kanda", image: "/images/sweet-potatoes.jpg" },
    { name: "Crate of eggs", price: "₦1,200", farmer: "Ali Kanda", image: "/images/eggs.jpg" },
  ];

  return (
    <div className="min-h-screen bg-[#F7FAF7] flex flex-col items-center pb-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-sm px-4 py-4 space-y-6"
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-600 text-sm">Akindele,</p>
            <p className="text-xs text-gray-400">24th May 2022</p>
          </div>
          <Bell className="h-5 w-5 text-gray-700" />
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            placeholder="Search product, farmer, category"
            className="pl-12 py-2.5 rounded-full bg-white border border-gray-200 text-sm"
          />
        </div>

        {/* Offer Section */}
        <div className="bg-[#E8F5E9] rounded-xl flex justify-between items-center p-4">
          <div className="text-left">
            <p className="text-green-800 font-semibold text-sm">Offer Offer!!</p>
            <p className="text-xs text-gray-600">Get 30% off your first purchase above ₦10,000</p>
          </div>
          <img src="/images/offer.png" alt="offer" className="w-14 h-14" />
        </div>

        {/* Farmers near you */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-base font-semibold text-gray-800">Farmers near you</h2>
            <button className="text-green-700 text-sm font-medium">See all</button>
          </div>
          <div className="flex space-x-3 overflow-x-auto scrollbar-hide">
            {farmers.map((farmer) => (
              <div key={farmer.name} className="flex flex-col items-center">
                <img
                  src={farmer.image}
                  alt={farmer.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <p className="text-xs text-gray-600 mt-1">{farmer.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-base font-semibold text-gray-800 mb-2">Categories</h2>
          <div className="grid grid-cols-4 gap-3">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="bg-white rounded-xl shadow-sm p-2 text-center cursor-pointer hover:shadow-md transition"
                onClick={() =>
                  navigate(`/category/${cat.name.toLowerCase().replace(/ /g, "-")}`)
                }
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-12 object-cover rounded-md mb-1"
                />
                <p className="text-[11px] font-medium text-gray-700">{cat.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Products */}
        <div>
          <h2 className="text-base font-semibold text-gray-800 mb-2">Popular product</h2>
          <div className="grid grid-cols-2 gap-4">
            {popularProducts.map((prod) => (
              <div
                key={prod.name}
                className="bg-white rounded-xl shadow-sm p-2 cursor-pointer hover:shadow-md transition"
                onClick={() => navigate(`/product/${prod.name.toLowerCase().replace(/ /g, "-")}`)}
              >
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-24 object-cover rounded-md"
                />
                <p className="text-sm font-semibold text-gray-800 mt-1">{prod.name}</p>
                <p className="text-xs text-gray-500">{prod.farmer}</p>
                <p className="text-xs font-semibold text-green-700 mt-0.5">{prod.price}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-inner py-2 flex justify-around">
        <Button variant="ghost" onClick={() => navigate("/home")} className="flex flex-col items-center">
          <Home className="h-5 w-5" />
          <span className="text-xs mt-0.5">Home</span>
        </Button>
        <Button variant="ghost" onClick={() => navigate("/buyer/orders")} className="flex flex-col items-center">
          <Clipboard className="h-5 w-5" />
          <span className="text-xs mt-0.5">Orders</span>
        </Button>
        <Button variant="ghost" onClick={() => navigate("/buyer/list")} className="flex flex-col items-center">
          <List className="h-5 w-5" />
          <span className="text-xs mt-0.5">List</span>
        </Button>
        <Button variant="ghost" onClick={() => navigate("/buyer/profile")} className="flex flex-col items-center">
          <User className="h-5 w-5" />
          <span className="text-xs mt-0.5">Profile</span>
        </Button>
      </div>
    </div>
  );
}
