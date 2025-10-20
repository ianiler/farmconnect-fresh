// src/pages/buyer/SavedItems.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Trash2, ShoppingCart } from 'lucide-react';
import Button from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export default function SavedItems() {
  const navigate = useNavigate();
  
  const savedItems = [
    { id: 1, name: 'Fresh Carrots - 1kg', price: 'N800' },
    { id: 2, name: 'Organic Lettuce - 300g', price: 'N400' },
  ];

  const [items, setItems] = useState(savedItems);

  const moveToCart = (id) => {
    const item = items.find((i) => i.id === id);
    toast.success('Moved to Cart', { description: `${item.name} added to cart.` });
    setItems(items.filter((i) => i.id !== id));
  };

  const removeItem = (id) => {
    const item = items.find((i) => i.id === id);
    setItems(items.filter((i) => i.id !== id));
    toast.success('Item Removed', { description: `${item.name} removed from saved items.` });
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
        <h1 className="text-xl font-bold text-green-800">Saved Items</h1>

        {items.length === 0 ? (
          <p className="text-gray-600 text-center">No saved items.</p>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className="bg-gray-100 p-3 rounded-lg flex justify-between items-center"
            >
              <div>
                <p className="text-sm font-medium text-green-800">{item.name}</p>
                <p className="text-xs text-green-700">{item.price}</p>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => moveToCart(item.id)}
                  className="flex items-center"
                >
                  <ShoppingCart className="h-4 w-4 mr-1 text-green-700" /> Move to Cart
                </Button>
                <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            </div>
          ))
        )}
      </motion.div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-2 flex justify-around">
        <Button variant="ghost" onClick={() => navigate('/buyer-home')}>Home</Button>
        <Button variant="ghost" onClick={() => navigate('/orders')}>Orders</Button>
        <Button variant="ghost" onClick={() => navigate('/cart')}>Cart</Button>
        <Button variant="ghost" onClick={() => navigate('/profile')}>Profile</Button>
      </div>
    </div>
  );
}
