// src/pages/buyer/BuyerHome.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Search, Bell, Home, Clipboard, List, ShoppingCart } from "lucide-react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function BuyerHome() {
  const navigate = useNavigate();

  const addToCart = (prod) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(prod);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
  };

  const categories = [
    { name: "Vegetables", image: "/images/Vegetables.jpg" },
    { name: "Poultry", image: "/images/poultry.jpg" },
    { name: "Fruits", image: "/images/fruits.jpg" },
    { name: "Fish", image: "/images/fish.jpg" },
  ];

  const recentProducts = [
    { name: "Vegetables", price: "UGX 2,000", farmer: "Sandra 0771182017", image: "/images/Vegetables.jpg" },
    { name: "Eggs", price: "UGX 12,000", farmer: "Bello 0708155525", image: "/images/eggs.jpg" },
    { name: "Tomatoes", price: "UGX 3,500", farmer: "Juma 0772694420", image: "/images/Tomatoes.jpg" },
    { name: "Tilapia", price: "UGX 18,000", farmer: "Musa Kato 0781234567", image: "/images/fish.jpg" },
    { name: "Bananas", price: "UGX 5,000", farmer: "Aisha 0756789123", image: "/images/Banana.jpg" },
    { name: "Maize", price: "UGX 4,000", farmer: "Kato 0712345678", image: "/images/Maize.jpg" },
    { name: "Cassava", price: "UGX 2,500", farmer: "Nalwanga 0778765432", image: "/images/Cassava.jpg" },
    { name: "Potatoes", price: "UGX 3,000", farmer: "Okello 0709876543", image: "/images/Potatoes.jpg" },
    { name: "Milk", price: "UGX 2,500", farmer: "Fatima 0787654321", image: "/images/milk.jpg" },
  ];

  const allItems = [
    ...categories.map(cat => ({ ...cat, price: "", farmer: "" })),
    ...recentProducts
  ];

  // Staggered animation variants for cards
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 200, damping: 20 } },
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] pb-32 px-4 sm:px-6 lg:px-12">
      {/* Header */}
      <div className="flex justify-between items-center py-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">
          What Would You Like To Buy?
        </h1>
        <Bell className="h-6 w-6 text-[var(--color-primary)] cursor-pointer" />
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
        <Input
          placeholder="Search for products, farms, or categories..."
          className="pl-10 border border-[var(--color-primary-light)] rounded-full w-full shadow-sm"
        />
      </div>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {allItems.map((item, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ scale: 1.06, y: -3, boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }}
            onClick={() => {
              if (item.price) {
                navigate(`/product/${item.name.toLowerCase().replace(/ /g, "-")}`);
              } else {
                navigate(`/category/${item.name.toLowerCase().replace(/ /g, "-")}`);
              }
            }}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer border border-[var(--color-primary-light)] flex flex-col"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-28 md:h-24 lg:h-24 object-cover rounded-t-lg"
            />
            <div className="p-2 flex flex-col justify-between flex-1">
              <div>
                <p className="text-sm font-bold text-[var(--color-primary)] truncate">{item.name}</p>
                {item.farmer && (
                  <p className="text-xs text-gray-600 truncate">
                    <a href={`tel:${item.farmer.split(" ")[1]}`} className="hover:underline">
                      {item.farmer}
                    </a>
                  </p>
                )}
                {item.price && (
                  <p className="text-sm font-bold text-[var(--color-primary)]">{item.price}</p>
                )}
              </div>
              {item.price && (
                <Button
                  onClick={(e) => { e.stopPropagation(); addToCart(item); }}
                  className="mt-1 bg-[var(--color-primary)] text-white font-bold text-sm py-2 rounded w-full shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-xl hover:bg-[var(--color-primary-light)]"
                >
                  Add to Cart
                </Button>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-inner py-2 flex justify-around z-50">
        {[
          { icon: Home, label: "Home", path: "/home" },
          { icon: Clipboard, label: "Orders", path: "/my-orders" },
          { icon: List, label: "Saved", path: "/saved-items" },
          { icon: ShoppingCart, label: "Cart", path: "/mycart" },
        ].map((navItem, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.2, y: -2 }}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => navigate(navItem.path)}
          >
            <navItem.icon className="h-5 w-5 text-[var(--color-primary)]" />
            <span className="text-xs mt-0.5 text-[var(--color-primary)] font-bold">{navItem.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
