// src/pages/buyer/OrderDetails.jsx
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '@/components/ui/Button';

export default function OrderDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const order = {
    id: id,
    status: 'Processing',
    type: 'Delivery',
    item: 'Tomatoes',
    category: 'Vegetables',
    quantity: '2kg',
    estimatedDelivery: '12:30pm',
    price: 'N2,000',
    farmer: 'Ali Kanda',
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        {/* Header */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" onClick={() => navigate(-1)} className="text-green-700">&lt;</Button>
          <h1 className="text-xl font-bold text-green-800">Order Details</h1>
        </div>

        {/* Order Info */}
        <div className="bg-gray-100 p-4 rounded-lg space-y-2">
          <p className="text-sm text-gray-600">
            Status: <span className="font-medium text-blue-700">{order.status}</span>
          </p>
          <p className="text-sm text-gray-600">
            Type: <span className="font-medium">{order.type}</span>
          </p>
          <p className="text-sm text-gray-600">
            Item: <span className="font-medium">{order.item}</span>
          </p>
          <p className="text-sm text-gray-600">
            Category: <span className="font-medium">{order.category}</span>
          </p>
          <p className="text-sm text-gray-600">
            Quantity: <span className="font-medium">{order.quantity}</span>
          </p>
          <p className="text-sm text-gray-600">
            Estimated Delivery: <span className="font-medium">{order.estimatedDelivery}</span>
          </p>
          <p className="text-sm text-gray-600">
            Price: <span className="font-medium text-green-700">{order.price}</span>
          </p>
          <p className="text-sm text-gray-600">
            Farmer: <span className="font-medium">{order.farmer}</span>
          </p>
        </div>

        {/* Track Button */}
        <Button
          className="w-full bg-green-700 hover:bg-green-800 text-white rounded-lg py-3"
          onClick={() => navigate('/track-order')}
        >
          Track
        </Button>
      </motion.div>
    </div>
  );
}
