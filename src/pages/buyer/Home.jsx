// src/pages/buyer/BuyerHome.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Bell,
  Home,
  Clipboard,
  List,
  ShoppingCart,
} from "lucide-react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function BuyerHome() {
  const navigate = useNavigate();

  const addToCart = (prod) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(prod);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("✅ Added to cart!");
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
    { name: "Potatoes", price: "UGX 3,000", farmer: "Okello 0709876543", image: "/images/potatoes.jpg" },
    { name: "Milk", price: "UGX 2,500", farmer: "Fatima 0787654321", image: "/images/milk.jpg" },
  ];

  const allProducts = [
    ...categories.map((cat) => ({ ...cat, price: "", farmer: "" })),
    ...recentProducts,
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 text-[var(--color-text)] pb-20 px-4 sm:px-6 lg:px-12">
      {/* Header with title and icons */}
      <div className="flex items-center justify-between py-5">
        <h1 className="text-2xl sm:text-3xl font-bold text-green-800">
          What Would You Like To Buy?
        </h1>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/mycart")}
          >
            <ShoppingCart className="h-6 w-6 text-green-700" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/saved-items")}
          >
            <List className="h-6 w-6 text-green-700" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/myorders")}
          >
            <Clipboard className="h-6 w-6 text-green-700" />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-6 w-6 text-green-700" />
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
        <Input
          placeholder="Search for products, farms, or categories..."
          className="pl-10 border border-green-200 rounded-full w-full shadow-sm focus:ring-2 focus:ring-green-400"
        />
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mb-10 px-1 sm:px-2">
        {allProducts.map((prod, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03, y: -2 }}
            onClick={() => {
              if (prod.price) {
                navigate(`/product/${prod.name.toLowerCase().replace(/ /g, "-")}`);
              } else {
                navigate(`/category/${prod.name.toLowerCase().replace(/ /g, "-")}`);
              }
            }}
            className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer border border-green-100 flex flex-col hover:shadow-lg transition-all duration-200"
          >
            <img
              src={prod.image}
              alt={prod.name}
              className="w-full h-28 md:h-32 lg:h-36 object-cover rounded-t-2xl"
            />
            <div className="p-3 sm:p-4 flex flex-col justify-between flex-1">
              <div>
                <p className="text-sm sm:text-base font-bold text-green-700 truncate">
                  {prod.name}
                </p>
                {prod.farmer && (
                  <p className="text-xs text-gray-600 truncate mt-0.5">
                    <a
                      href={`tel:${prod.farmer.split(" ")[1]}`}
                      className="hover:underline"
                    >
                      {prod.farmer}
                    </a>
                  </p>
                )}
                {prod.price && (
                  <p className="text-sm font-bold text-green-700 mt-1">
                    {prod.price}
                  </p>
                )}
              </div>
              {prod.price && (
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(prod);
                  }}
                  className="mt-2 bg-green-700 text-white font-bold text-xs sm:text-sm py-1.5 px-2 rounded-md w-full hover:bg-green-600 transition-all"
                >
                  Add to Cart
                </Button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
