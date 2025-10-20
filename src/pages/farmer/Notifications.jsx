// src/pages/farmer/Notifications.jsx
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';

export default function Notifications() {
  const navigate = useNavigate();

  const notifications = [
    { title: 'Order Delivered', description: 'Order #12011 has been delivered', time: '2m' },
    { title: 'New Order', description: 'You have a new order #12011', time: '10m' },
    { title: 'Low Stock', description: 'Some products are low in quantity', time: '10m' },
  ];

  return (
    <div className="min-h-screen bg-white p-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
        {/* Header */}
        <div className="flex items-center">
          <Button variant="ghost" onClick={() => navigate(-1)} className="text-green-700">
            &lt; Back
          </Button>
          <h1 className="text-xl font-bold text-green-800 ml-4">Notifications</h1>
        </div>

        {/* Notifications list */}
        <div className="space-y-4 mt-4">
          {notifications.map((notif, i) => (
            <div
              key={i}
              className="flex items-center space-x-4 bg-gray-100 p-3 rounded-lg"
            >
              <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center text-sm font-bold">
                {notif.title === 'Order Delivered' ? '✓' : '○'}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-green-800">{notif.title}</p>
                <p className="text-xs text-gray-600">{notif.description}</p>
              </div>
              <p className="text-xs text-gray-500">{notif.time}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
