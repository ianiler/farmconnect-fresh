import { motion } from "framer-motion";
import { Search, Bell, Home, Clipboard, List, ShoppingCart } from "lucide-react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";

export default function BuyerHome() {
  const navigate = useNavigate();

  // Make sure these images exist in public/images/
  const categories = [
    { name: "Vegetables", image: "/images/vegetables.jpg" },
    { name: "Poultry", image: "/images/poultry.jpg" },
    { name: "Fruits", image: "/images/fruits.jpg" },
    { name: "Fish", image: "/images/fish.jpg" },
  ];

  const recentProducts = [
    {
      name: "Vegetables",
      price: "UGX 2,000",
      farmer: "Sandra..0771182017",
      image: "/images/vegetables.jpg",
    },
    {
      name: "Eggs",
      price: "UGX 12,000",
      farmer: "Bello 0708155525",
      image: "/images/product1.jpg",
    },
    {
      name: "Tomatoes",
      price: "UGX 3,500",
      farmer: "Juma 0772694420",
      image: "/images/fruits.jpg",
    },
    {
      name: "Tilapia",
      price: "UGX 18,000",
      farmer: "Musa Kato",
      image: "/images/fish.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 pb-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-3xl mx-auto px-4 space-y-8"
      >
        {/* Header */}
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-green-800">
            What Would You Like To Buy?
          </h1>
          <Bell className="h-6 w-6 text-green-700 cursor-pointer" />
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
          <Input
            placeholder="Search for products, farms, or categories..."
            className="pl-10 border-green-300 rounded-full w-full shadow-sm"
          />
        </div>

        {/* Offer Banner */}
        <div className="bg-green-200 p-4 rounded-xl shadow text-center">
          <p className="text-green-900 font-semibold text-lg">
            🌾 Great Offers Available!
          </p>
          <p className="text-sm text-green-700">
            Get up to 30% off on your first order.
          </p>
        </div>

        {/* Categories Section */}
        <h2 className="text-lg font-semibold text-green-800 text-center">
          Categories
        </h2>
        <div className="grid grid-cols-2 gap-4 justify-items-center">
          {categories.map((cat) => (
            <motion.div
              key={cat.name}
              whileHover={{ scale: 1.05 }}
              onClick={() =>
                navigate(`/category/${cat.name.toLowerCase().replace(/ /g, "-")}`)
              }
              className="relative w-full max-w-[180px] h-36 rounded-2xl overflow-hidden shadow-md cursor-pointer"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <p className="text-white text-lg font-semibold drop-shadow-md">
                  {cat.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Products Section */}
        <h2 className="text-lg font-semibold text-green-800 text-center">
          Farmers Around You
        </h2>
        <div className="grid grid-cols-2 gap-4 justify-items-center">
          {recentProducts.map((prod) => (
            <motion.div
              key={prod.name}
              whileHover={{ scale: 1.05 }}
              onClick={() =>
                navigate(`/product/${prod.name.toLowerCase().replace(/ /g, "-")}`)
              }
              className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-[180px] cursor-pointer"
            >
              <img
                src={prod.image}
                alt={prod.name}
                className="w-full h-36 object-cover"
              />
              <div className="p-2 text-center">
                <p className="text-sm font-medium text-green-800">{prod.name}</p>
                <p className="text-xs text-gray-600">{prod.farmer}</p>
                <p className="text-xs text-green-700 font-bold">{prod.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-inner py-2 flex justify-around">
        <Button
          variant="ghost"
          onClick={() => navigate("/home")}
          className="flex flex-col items-center"
        >
          <Home className="h-5 w-5 text-green-700" />
          <span className="text-xs mt-0.5 text-green-700">Home</span>
        </Button>

        <Button
          variant="ghost"
          onClick={() => navigate("/my-orders")}
          className="flex flex-col items-center"
        >
          <Clipboard className="h-5 w-5 text-green-700" />
          <span className="text-xs mt-0.5 text-green-700">My Orders</span>
        </Button>

        <Button
          variant="ghost"
          onClick={() => navigate("/saved-items")}
          className="flex flex-col items-center"
        >
          <List className="h-5 w-5 text-green-700" />
          <span className="text-xs mt-0.5 text-green-700">Saved</span>
        </Button>

        <Button
          variant="ghost"
          onClick={() => navigate("/Mycart")}
          className="flex flex-col items-center"
        >
          <ShoppingCart className="h-5 w-5 text-green-700" />
          <span className="text-xs mt-0.5 text-green-700">My Cart</span>
        </Button>
      </div>
    </div>
  );
}
