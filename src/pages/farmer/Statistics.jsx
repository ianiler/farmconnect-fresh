// src/pages/farmer/Statistics.jsx
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';

export default function Statistics() {
  const navigate = useNavigate();

  const stats = {
    totalOrders: 1023,
    customers: 500,
    earnings: 'N100,000',
  };

  const recentOrders = [
    { no: '#11122', status: 'Processing', price: 'N1000' },
    { no: '#11123', status: 'Cancelled', price: 'N2000' },
    { no: '#11124', status: 'Delivered', price: 'N1500' },
    { no: '#11125', status: 'Processing', price: 'N3000' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Processing':
        return 'text-blue-700';
      case 'Cancelled':
        return 'text-red-700';
      case 'Delivered':
        return 'text-green-700';
      default:
        return 'text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
        {/* Header */}
        <h1 className="text-xl font-bold text-green-800">Sales Report</h1>
        <p className="text-sm text-gray-600">This Month</p>

        {/* Statistics Cards */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { value: stats.totalOrders, label: 'Total Orders' },
            { value: stats.customers, label: 'Customers' },
            { value: stats.earnings, label: 'Earnings' },
          ].map((item, idx) => (
            <div key={idx} className="bg-green-100 p-3 rounded-lg text-center">
              <p className="text-2xl font-bold text-green-800">{item.value}</p>
              <p className="text-xs text-gray-600">{item.label}</p>
              <p className="text-xs text-green-600">+0.5%</p>
            </div>
          ))}
        </div>

        {/* Recent Orders */}
        <h2 className="text-lg font-semibold text-green-800">Recent Orders</h2>
        <div className="space-y-2">
          <div className="grid grid-cols-3 text-sm font-semibold text-gray-600">
            <p>Order No</p>
            <p>Status</p>
            <p>Price</p>
          </div>
          {recentOrders.map((order, i) => (
            <div key={i} className="grid grid-cols-3 text-sm text-gray-800">
              <p>{order.no}</p>
              <p className={getStatusColor(order.status)}>{order.status}</p>
              <p>{order.price}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-2 flex justify-around">
        <Button variant="ghost" onClick={() => navigate('/farmer-home')}>Home</Button>
        <Button variant="ghost" onClick={() => navigate('/community')}>Community</Button>
        <Button variant="ghost" className="text-green-700">Statistics</Button>
        <Button variant="ghost" onClick={() => navigate('/profile')}>Profile</Button>
      </div>
    </div>
  );
}
