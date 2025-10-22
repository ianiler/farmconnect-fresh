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
    { name: "Potatoes", price: "UGX 3,000", farmer: "Okello 0709876543", image: "/images/potatoes.jpg" },
    { name: "Milk", price: "UGX 2,500", farmer: "Fatima 0787654321", image: "/images/milk.jpg" },
  ];

  // Combine all products (including categories) into a single consistent grid
  const allProducts = [
    ...categories.map(cat => ({ ...cat, price: "", farmer: "" })),
    ...recentProducts
  ];

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

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
        {allProducts.map((prod, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02, y: -1 }}
            onClick={() => {
              if (prod.price) {
                navigate(`/product/${prod.name.toLowerCase().replace(/ /g, "-")}`);
              } else {
                navigate(`/category/${prod.name.toLowerCase().replace(/ /g, "-")}`);
              }
            }}
            className="bg-white rounded-lg shadow overflow-hidden cursor-pointer border border-[var(--color-primary-light)] flex flex-col"
          >
            <img
              src={prod.image}
              alt={prod.name}
              className="w-full h-24 md:h-28 lg:h-28 object-cover rounded-t-lg"
            />
            <div className="p-2 flex flex-col justify-between flex-1">
              <div>
                <p className="text-sm font-bold text-[var(--color-primary)] truncate">{prod.name}</p>
                {prod.farmer && (
                  <p className="text-xs text-gray-600 truncate">
                    <a href={`tel:${prod.farmer.split(" ")[1]}`} className="hover:underline">
                      {prod.farmer}
                    </a>
                  </p>
                )}
                {prod.price && (
                  <p className="text-sm font-bold text-[var(--color-primary)]">{prod.price}</p>
                )}
              </div>
              {prod.price && (
                <Button
                  onClick={(e) => { e.stopPropagation(); addToCart(prod); }}
                  className="mt-1 bg-[var(--color-primary)] text-white font-bold text-sm py-1 px-2 rounded w-full hover:bg-[var(--color-primary-light)]"
                >
                  Add to Cart
                </Button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-inner py-2 flex justify-around z-50">
        <Button variant="ghost" onClick={() => navigate("/home")} className="flex flex-col items-center">
          <Home className="h-5 w-5 text-[var(--color-primary)]" />
          <span className="text-xs mt-0.5 text-[var(--color-primary)]">Home</span>
        </Button>
        <Button variant="ghost" onClick={() => navigate("/my-orders")} className="flex flex-col items-center">
          <Clipboard className="h-5 w-5 text-[var(--color-primary)]" />
          <span className="text-xs mt-0.5 text-[var(--color-primary)]">Orders</span>
        </Button>
        <Button variant="ghost" onClick={() => navigate("/saved-items")} className="flex flex-col items-center">
          <List className="h-5 w-5 text-[var(--color-primary)]" />
          <span className="text-xs mt-0.5 text-[var(--color-primary)]">Saved</span>
        </Button>
        <Button variant="ghost" onClick={() => navigate("/mycart")} className="flex flex-col items-center">
          <ShoppingCart className="h-5 w-5 text-[var(--color-primary)]" />
          <span className="text-xs mt-0.5 text-[var(--color-primary)]">Cart</span>
        </Button>
      </div>
    </div>
  );
}
