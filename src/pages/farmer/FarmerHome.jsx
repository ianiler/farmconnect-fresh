// src/pages/farmer/FarmerHome.jsx
import { motion } from 'framer-motion';
import { Search, Bell, Plus, Edit, Trash2, Home, List, User, Clipboard } from 'lucide-react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export default function FarmerHome() {
  const navigate = useNavigate();

  const products = [
    {
      name: 'Spinach',
      unit: 'Bundle',
      price: 'N300',
      stock: 'In stock',
      image: 'https://m.media-amazon.com/images/I/81Ez6HDm6GL._UF1000,1000_QL80_.jpg',
    },
    {
      name: 'Potatoes',
      unit: 'Crate',
      price: 'N1,000',
      stock: 'Out of stock',
      image: 'https://thumbs.dreamstime.com/b/crates-filled-freshly-harvested-organic-potatoes-arranged-bustling-market-stand-featuring-farm-produce-347529470.jpg',
    },
  ];

  const handleEdit = (name) => {
    toast.info('Editing Product', { description: `Opening edit form for ${name}.` });
    navigate(`/edit-product/${name}`);
  };

  const handleRemove = (name) => {
    toast.success('Product Removed', { description: `${name} deleted.` });
  };

  return (
    <div className="min-h-screen bg-green-50 pb-20">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl mx-auto space-y-6 px-4 sm:px-6">
        {/* Header */}
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-green-800">FarmConnect</h1>
          <Bell
            className="h-6 w-6 text-green-700 cursor-pointer"
            onClick={() => navigate('/farmer/notifications')}
          />
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
          <Input placeholder="Search products" className="pl-10 border-green-300 rounded-full w-full" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.map((prod) => (
            <div key={prod.name} className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center space-y-2">
              <img src={prod.image} alt={prod.name} className="w-24 h-24 object-cover rounded-md" />
              <div className="text-center">
                <p className="text-green-800 font-semibold">{prod.name}</p>
                <p className="text-gray-600 text-sm">{prod.price} / {prod.unit}</p>
                <p className={`text-sm font-medium ${prod.stock === 'In stock' ? 'text-green-600' : 'text-red-500'}`}>
                  {prod.stock}
                </p>
              </div>
              <div className="flex space-x-3 mt-2">
                <Button variant="ghost" size="icon" onClick={() => handleEdit(prod.name)}>
                  <Edit className="h-4 w-4 text-green-700" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => handleRemove(prod.name)}>
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Add Product Button */}
        <Button
          className="w-full bg-green-700 hover:bg-green-800 text-white rounded-xl py-3 flex items-center justify-center mt-4"
          onClick={() => navigate('/farmer/add-product')}
        >
          <Plus className="mr-2 h-4 w-4" /> Add Product
        </Button>
      </motion.div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-inner py-2 flex justify-around">
        <Button variant="ghost" onClick={() => navigate('/farmer/home')} className="flex flex-col items-center">
          <Home className="h-5 w-5" />
          <span className="text-xs mt-0.5">Home</span>
        </Button>
        <Button variant="ghost" onClick={() => navigate('/farmer/orders')} className="flex flex-col items-center">
          <Clipboard className="h-5 w-5" />
          <span className="text-xs mt-0.5">Orders</span>
        </Button>
        <Button variant="ghost" onClick={() => navigate('/farmer/list')} className="flex flex-col items-center">
          <List className="h-5 w-5" />
          <span className="text-xs mt-0.5">List</span>
        </Button>
        <Button variant="ghost" onClick={() => navigate('/farmer/profile')} className="flex flex-col items-center">
          <User className="h-5 w-5" />
          <span className="text-xs mt-0.5">Profile</span>
        </Button>
      </div>
    </div>
  );
}
