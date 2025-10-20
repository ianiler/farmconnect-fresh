// src/pages/buyer/MyOrders.jsx
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';

export default function MyOrders() {
  const navigate = useNavigate();

  const orders = [
    { id: 1, date: 'Sun 19th May 2023', farmer: 'Farmers Info Kanda', status: 'Processing', color: 'bg-blue-100 text-blue-700' },
    { id: 2, date: 'Sun 19th May 2023', farmer: 'Farmers Info Kanda', status: 'Delivered', color: 'bg-green-100 text-green-700' },
    { id: 3, date: 'Sun 19th May 2023', farmer: 'Farmers Info Kanda', status: 'Cancelled', color: 'bg-red-100 text-red-700' },
  ];

  return (
    <div className="min-h-screen bg-white p-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        {/* Header */}
        <h1 className="text-xl font-bold text-green-800">My Orders</h1>

        {/* Orders List */}
        {orders.map((order) => (
          <Button
            key={order.id}
            variant="ghost"
            className="w-full flex justify-between items-center bg-gray-100 p-3 rounded-lg text-left"
            onClick={() => navigate(`/order/${order.id}`)}
          >
            <div>
              <p className="text-sm text-gray-600">{order.date}</p>
              <p className="text-sm font-medium text-green-800">{order.farmer}</p>
            </div>
            <span className={`text-xs font-semibold px-2 py-1 rounded ${order.color}`}>
              {order.status}
            </span>
          </Button>
        ))}
      </motion.div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-2 flex justify-around">
        <Button variant="ghost">Home</Button>
        <Button variant="ghost" className="text-green-700">Orders</Button>
        <Button variant="ghost">List</Button>
        <Button variant="ghost">Profile</Button>
      </div>
    </div>
  );
}
