// src/pages/buyer/SavedItems.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, ShoppingCart, Home, Clipboard, List, User, Heart } from "lucide-react";
import Button from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function SavedItems() {
  const navigate = useNavigate();
  const [items, setItems] = useState([
    { id: 1, name: "Fresh Carrots - 1kg", price: "N800", image: "/images/carrots.jpg" },
    { id: 2, name: "Organic Lettuce - 300g", price: "N400", image: "/images/lettuce.jpg" },
  ]);

  const moveToCart = (id) => {
    const item = items.find((i) => i.id === id);
    toast.success("🛒 Moved to Cart", { description: `${item.name} added to your cart.` });
    setItems(items.filter((i) => i.id !== id));
  };

  const removeItem = (id) => {
    const item = items.find((i) => i.id === id);
    setItems(items.filter((i) => i.id !== id));
    toast.info("❌ Item Removed", { description: `${item.name} removed from saved list.` });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 bg-white shadow-sm sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-green-800 flex items-center gap-2">
          <Heart className="h-6 w-6 text-green-700" /> Saved Items
        </h1>
        <span className="text-sm font-medium text-gray-500">
          {items.length} {items.length === 1 ? "item" : "items"}
        </span>
      </div>

      {/* Saved Items */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="p-4 space-y-4"
      >
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-20 text-center">
            <img src="/images/empty-saved.svg" alt="No saved items" className="w-40 h-40 mb-4" />
            <p className="text-gray-500">No saved items yet.</p>
            <Button
              className="mt-4 bg-green-700 text-white rounded-lg"
              onClick={() => navigate("/home")}
            >
              Browse Products
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
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-green-300 hover:bg-green-100 flex items-center"
                    onClick={() => moveToCart(item.id)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-1 text-green-700" />
                    Add to Cart
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-red-100 rounded-full"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="h-5 w-5 text-red-500" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </motion.div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-green-800 border-t border-green-700 p-2 flex justify-around">
        <NavButton icon={<Home />} label="Home" onClick={() => navigate("/home")} />
        <NavButton icon={<Clipboard />} label="Orders" onClick={() => navigate("/myorders")} />
        <NavButton icon={<List />} label="Cart" onClick={() => navigate("/mycart")} />
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
