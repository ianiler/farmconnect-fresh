import { motion } from "framer-motion";
import { Search, Bell, Home, Clipboard, List, User } from "lucide-react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";

export default function BuyerHome() {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Vegetables",
      image:
        "https://images.unsplash.com/photo-1572441710534-680c64cc43f9?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Poultry",
      image:
        "https://images.unsplash.com/photo-1590080875839-3e5d58d9a59e?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Fruits",
      image:
        "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Fish",
      image:
        "https://images.unsplash.com/photo-1617196037302-0b8b2d58b7f3?auto=format&fit=crop&w=400&q=80",
    },
  ];

  const recentProducts = [
    {
      name: "Aki Kindele",
      price: "₦1,000",
      farmer: "Sanda Balik",
      image:
        "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Asa Kanda",
      price: "₦800",
      farmer: "Bello Abio",
      image:
        "https://images.unsplash.com/photo-1604908177522-0400231a8ee8?auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-3xl mx-auto px-4 space-y-6"
      >
        {/* Header */}
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-green-700">
            FarmConnect
          </h1>
          <Bell className="h-6 w-6 text-green-600 cursor-pointer" />
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
          <Input
            placeholder="Search product, farm, category"
            className="pl-10 border-green-300 rounded-full w-full"
          />
        </div>

        {/* Offer */}
        <div className="bg-green-100 p-4 rounded-xl shadow-sm text-center">
          <p className="text-green-800 font-semibold">Good Offer!</p>
          <p className="text-sm text-gray-600">30% off on first purchase</p>
        </div>

        {/* Categories */}
        <h2 className="text-lg font-semibold text-green-800">Categories</h2>
        <div className="flex overflow-x-auto space-x-4 pb-2 justify-center">
          {categories.map((cat) => (
            <Button
              key={cat.name}
              variant="ghost"
              className="flex flex-col items-center min-w-[80px]"
              onClick={() =>
                navigate(`/category/${cat.name.toLowerCase().replace(/ /g, "-")}`)
              }
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-16 h-16 rounded-full mb-2 object-cover shadow-md"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/100";
                }}
              />
              <p className="text-xs text-gray-700">{cat.name}</p>
            </Button>
          ))}
        </div>

        {/* Recent Products */}
        <h2 className="text-lg font-semibold text-green-800">
          Farmers around you
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-center">
          {recentProducts.map((prod) => (
            <div
              key={prod.name}
              className="bg-white rounded-2xl shadow-md cursor-pointer flex flex-col items-center p-3 transition hover:scale-105"
              onClick={() =>
                navigate(`/product/${prod.name.toLowerCase().replace(/ /g, "-")}`)
              }
            >
              <img
                src={prod.image}
                alt={prod.name}
                className="w-full h-24 object-cover rounded-lg mb-2"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/100";
                }}
              />
              <p className="text-sm font-medium text-green-800 text-center">
                {prod.name}
              </p>
              <p className="text-xs text-gray-600 text-center">{prod.farmer}</p>
              <p className="text-xs text-green-700 font-bold mt-1">
                {prod.price}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-inner py-2 flex justify-around">
        <Button variant="ghost" onClick={() => navigate("/home")} className="flex flex-col items-center">
          <Home className="h-5 w-5 text-green-700" />
          <span className="text-xs mt-0.5 text-green-700">Home</span>
        </Button>
        <Button variant="ghost" onClick={() => navigate("/buyer/orders")} className="flex flex-col items-center">
          <Clipboard className="h-5 w-5 text-green-700" />
          <span className="text-xs mt-0.5 text-green-700">Orders</span>
        </Button>
        <Button variant="ghost" onClick={() => navigate("/buyer/list")} className="flex flex-col items-center">
          <List className="h-5 w-5 text-green-700" />
          <span className="text-xs mt-0.5 text-green-700">List</span>
        </Button>
        <Button variant="ghost" onClick={() => navigate("/buyer/profile")} className="flex flex-col items-center">
          <User className="h-5 w-5 text-green-700" />
          <span className="text-xs mt-0.5 text-green-700">Profile</span>
        </Button>
      </div>
    </div>
  );
}
