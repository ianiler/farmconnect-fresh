// src/pages/buyer/Mycart.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, Plus, Minus, Home, Clipboard, List, User, ShoppingBag } from "lucide-react";
import Button from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function Mycart() {
  const navigate = useNavigate();
  const [items, setItems] = useState([
    { id: 1, name: "Fresh Tomatoes - 2kg", price: "N1,200", quantity: 1, image: "/images/tomatoes.jpg" },
    { id: 2, name: "Organic Spinach - 500g", price: "N500", quantity: 2, image: "/images/vegetables.jpg" },
  ]);

  const subtotal = items.reduce(
    (sum, item) =>
      sum + parseInt(item.price.replace("N", "").replace(/,/g, "")) * item.quantity,
    0
  );

  const updateQuantity = (id, change) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
      )
    );
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    toast.success("🗑️ Item removed", { description: "Removed from your cart." });
  };

  const handleCheckout = () => {
    toast.info("🛒 Redirecting to checkout...", { description: "Almost there!" });
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 bg-white shadow-sm sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-green-800 flex items-center gap-2">
          <ShoppingBag className="h-6 w-6 text-green-700" /> My Cart
        </h1>
        <span className="text-sm font-medium text-gray-500">
          {items.length} {items.length === 1 ? "item" : "items"}
        </span>
      </div>

      {/* Cart Items */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="p-4 space-y-4"
      >
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-20 text-center">
            <img src="/images/empty-cart.svg" alt="Empty cart" className="w-40 h-40 mb-4" />
            <p className="text-gray-500">Your cart is empty.</p>
            <Button
              className="mt-4 bg-green-700 text-white rounded-lg"
              onClick={() => navigate("/home")}
            >
              Shop Now
            </Button>
          </div>
        ) : (
          <AnimatePresence>
            {items.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-white p-4 rounded-2xl shadow-md flex items-center gap-4 hover:shadow-lg transition-shadow"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg border border-green-100"
                />
                <div className="flex-1">
                  <p className="font-semibold text-green-800 text-sm sm:text-base">{item.name}</p>
                  <p className="text-green-700 font-medium text-sm">{item.price}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-green-300 hover:bg-green-100"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      <Minus className="h-4 w-4 text-green-700" />
                    </Button>
                    <span className="text-sm font-semibold text-gray-700">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-green-300 hover:bg-green-100"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      <Plus className="h-4 w-4 text-green-700" />
                    </Button>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeItem(item.id)}
                  className="hover:bg-red-100 rounded-full"
                >
                  <Trash2 className="h-5 w-5 text-red-500" />
                </Button>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </motion.div>

      {/* Subtotal & Checkout */}
      {items.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-16 left-0 right-0 px-5 py-4 bg-white border-t shadow-md"
        >
          <div className="flex justify-between items-center mb-3">
            <p className="text-green-800 font-semibold text-lg">Subtotal</p>
            <p className="text-green-700 font-bold text-lg">N{subtotal.toLocaleString()}</p>
          </div>
          <Button
            className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl shadow-md"
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </Button>
        </motion.div>
      )}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-green-800 border-t border-green-700 p-2 flex justify-around">
        <NavButton icon={<Home />} label="Home" onClick={() => navigate("/home")} />
        <NavButton icon={<Clipboard />} label="Orders" onClick={() => navigate("/myorders")} />
        <NavButton icon={<List />} label="Cart" active />
        <NavButton icon={<User />} label="Profile" onClick={() => navigate("/profile")} />
      </div>
    </div>
  );
}

function NavButton({ icon, label, onClick, active }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center text-xs ${
        active ? "text-white" : "text-green-200 hover:text-white"
      }`}
    >
      <div className="w-6 h-6">{icon}</div>
      <span>{label}</span>
    </button>
  );
}
