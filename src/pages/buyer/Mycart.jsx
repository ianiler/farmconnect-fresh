// src/pages/buyer/Mycart.jsx
import { useState } from 'react';
import { motion } from "framer-motion";
import { Trash2, Plus, Minus, Home, Clipboard, List, User } from 'lucide-react';
import Button from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export default function Mycart() {
  const navigate = useNavigate();
  const cartItems = [
    { id: 1, name: 'Fresh Tomatoes - 2kg', price: 'N1,200', quantity: 1 },
    { id: 2, name: 'Organic Spinach - 500g', price: 'N500', quantity: 2 },
  ];

  const [items, setItems] = useState(cartItems);

  const subtotal = items.reduce(
    (sum, item) =>
      sum + parseInt(item.price.replace('N', '').replace(/,/g, '')) * item.quantity,
    0
  );

  const updateQuantity = (id, change) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
    ));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
    toast.success('Item Removed', { description: 'Item deleted from cart.' });
  };

  const handleCheckout = () => {
    toast.info('Checkout Initiated', { description: 'Redirecting to payment...' });
    navigate('/checkout'); // placeholder route
  };

  return (
    <div className="min-h-screen bg-white pb-24">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4 p-4">
        <h1 className="text-xl font-bold text-green-800">My Cart</h1>

        {items.length === 0 ? (
          <p className="text-gray-600 text-center mt-4">Your cart is empty.</p>
        ) : (
          <>
            {items.map((item) => (
              <div key={item.id} className="bg-gray-100 p-3 rounded-lg flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-green-800">{item.name}</p>
                  <p className="text-xs text-green-700">{item.price}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, -1)}>
                    <Minus className="h-4 w-4 text-green-700" />
                  </Button>
                  <span className="text-sm">{item.quantity}</span>
                  <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, 1)}>
                    <Plus className="h-4 w-4 text-green-700" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              </div>
            ))}

            <div className="bg-green-100 p-4 rounded-lg mt-4">
              <p className="text-green-800 font-semibold">
                Subtotal: <span className="font-bold">N{subtotal.toLocaleString()}</span>
              </p>
            </div>

            <Button
              className="w-full bg-green-700 hover:bg-green-800 text-white rounded-lg py-3 mt-2"
              onClick={handleCheckout}
              disabled={items.length === 0}
            >
              Checkout
            </Button>
          </>
        )}
      </motion.div>

      {/* Bottom Navigation - black with white icons/text */}
      <div className="fixed bottom-0 left-0 right-0 bg-black border-t p-2 flex justify-around">
        <Button variant="ghost" className="flex flex-col items-center text-white" onClick={() => navigate('/home')}>
          <Home className="h-5 w-5 text-white" />
          <span className="text-xs mt-0.5 text-white">Home</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center text-white" onClick={() => navigate('/my-orders')}>
          <Clipboard className="h-5 w-5 text-white" />
          <span className="text-xs mt-0.5 text-white">Orders</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center text-white" onClick={() => navigate('/mycart')}>
          <List className="h-5 w-5 text-white" />
          <span className="text-xs mt-0.5 text-white">Cart</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center text-white" onClick={() => navigate('/profile')}>
          <User className="h-5 w-5 text-white" />
          <span className="text-xs mt-0.5 text-white">Profile</span>
        </Button>
      </div>
    </div>
  );
}
