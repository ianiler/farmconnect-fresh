// src/pages/Home.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Home as HomeIcon,
  Clipboard,
  List,
  Wallet as WalletIcon,
  Bell,
  ShoppingCart,
  Search,
} from "lucide-react";

import { ethers } from "ethers";
import { toast } from "sonner";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function Home() {
  const navigate = useNavigate();

  // ✅ Get active user for wallet
  const activeUser = JSON.parse(localStorage.getItem("activeUser")) || {};
  const [walletAddress, setWalletAddress] = useState(activeUser.wallet || "");

  // Connect to MetaMask
  const connectWallet = async () => {
    if (!window.ethereum) {
      toast.error("Please install MetaMask to connect your wallet!");
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      const wallet = accounts[0];

      // ✅ Update state
      setWalletAddress(wallet);

      // ✅ Update activeUser in localStorage
      const updatedUser = { ...activeUser, wallet };
      localStorage.setItem("activeUser", JSON.stringify(updatedUser));

      // ✅ Update users array
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const idx = users.findIndex((u) => u.email === updatedUser.email);
      if (idx >= 0) {
        users[idx].wallet = wallet;
        localStorage.setItem("users", JSON.stringify(users));
      }

      toast.success(`Wallet connected: ${wallet.slice(0, 6)}...${wallet.slice(-4)}`);
    } catch (err) {
      console.error(err);
      toast.error("Failed to connect wallet.");
    }
  };

  // Add to cart locally
  const addToCart = (prod) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(prod);
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success("✅ Added to cart!");
  };

  // Categories
  const categories = [
    { name: "Vegetables", image: "/images/Vegetables.jpg" },
    { name: "Poultry", image: "/images/poultry.jpg" },
    { name: "Fruits", image: "/images/fruits.jpg" },
    { name: "Fish", image: "/images/fish.jpg" },
  ];

  // Products
  const recentProducts = [
    {
      name: "Vegetables",
      price: "UGX 2,000",
      farmer: "Sandra 0771182017",
      image: "/images/Vegetables.jpg",
    },
    {
      name: "Eggs",
      price: "UGX 12,000",
      farmer: "Bello 0708155525",
      image: "/images/eggs.jpg",
    },
    {
      name: "Tomatoes",
      price: "UGX 3,500",
      farmer: "Juma 0772694420",
      image: "/images/Tomatoes.jpg",
    },
    {
      name: "Tilapia",
      price: "UGX 18,000",
      farmer: "Musa Kato 0781234567",
      image: "/images/fish.jpg",
    },
    {
      name: "Bananas",
      price: "UGX 5,000",
      farmer: "Aisha 0756789123",
      image: "/images/Banana.jpg",
    },
    {
      name: "Maize",
      price: "UGX 4,000",
      farmer: "Kato 0712345678",
      image: "/images/Maize.jpg",
    },
    {
      name: "Cassava",
      price: "UGX 2,500",
      farmer: "Nalwanga 0778765432",
      image: "/images/Cassava.jpg",
    },
    {
      name: "Potatoes",
      price: "UGX 3,000",
      farmer: "Okello 0709876543",
      image: "/images/potatoes.jpg",
    },
    {
      name: "Milk",
      price: "UGX 2,500",
      farmer: "Fatima 0787654321",
      image: "/images/milk.jpg",
    },
  ];

  const allProducts = [
    ...categories.map((cat) => ({ ...cat, price: "", farmer: "" })),
    ...recentProducts,
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 text-[var(--color-text)] pb-32 px-4 sm:px-6 lg:px-12">
      {/* Header */}
      <div className="flex items-center justify-between py-5">
        <h1 className="text-2xl sm:text-3xl font-bold text-green-800">
          What Would You Like To Buy?
        </h1>

        <div className="flex items-center gap-4">
          {/* Wallet */}
          {walletAddress ? (
            <span className="text-sm font-medium text-green-700 bg-green-100 px-3 py-1 rounded-full shadow-sm">
              {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
            </span>
          ) : (
            <button
              onClick={connectWallet}
              className="flex items-center gap-2 bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-colors shadow-md"
            >
              <WalletIcon className="h-4 w-4" /> Connect Wallet
            </button>
          )}

          {/* Icons */}
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

      {/* Search */}
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
            whileHover={{
              scale: 1.03,
              y: -2,
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            }}
            onClick={() => {
              if (prod.price) {
                navigate(
                  `/product/${prod.name.toLowerCase().replace(/ /g, "-")}`
                );
              } else {
                navigate(
                  `/category/${prod.name.toLowerCase().replace(/ /g, "-")}`
                );
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

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg py-3 flex justify-around z-[9999] pb-[env(safe-area-inset-bottom)]">
        <Button
          variant="ghost"
          onClick={() => navigate("/home")}
          className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
        >
          <HomeIcon className="h-5 w-5 text-green-700" />
          <span className="text-xs mt-0.5 text-green-700 font-bold">Home</span>
        </Button>

        <Button
          variant="ghost"
          onClick={() => navigate("/my-orders")}
          className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
        >
          <Clipboard className="h-5 w-5 text-green-700" />
          <span className="text-xs mt-0.5 text-green-700 font-bold">Orders</span>
        </Button>

        <Button
          variant="ghost"
          onClick={() => navigate("/saved-items")}
          className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
        >
          <List className="h-5 w-5 text-green-700" />
          <span className="text-xs mt-0.5 text-green-700 font-bold">Saved</span>
        </Button>

        <Button
          variant="ghost"
          onClick={() => navigate("/mycart")}
          className="flex flex-col items-center hover:scale-125 transition-transform duration-300"
        >
          <div className="relative">
            <ShoppingCart className="h-5 w-5 text-green-700" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1 rounded-full animate-bounce">
              3
            </span>
          </div>
          <span className="text-xs mt-0.5 text-green-700 font-bold">Cart</span>
        </Button>
      </div>
    </div>
  );
}
