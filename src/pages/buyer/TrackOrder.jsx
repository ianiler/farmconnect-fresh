// src/pages/buyer/TrackOrder.jsx
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';

export default function TrackOrder() {
  const navigate = useNavigate();

  const order = {
    status: 'Processing',
    estimatedTime: '1:30 PM',
    orderPlaced: true,
    orderProcessed: true,
    orderInTransit: false,
    orderDelivered: false,
    estimatedDelivery: '1:30 PM',
    subtotal: 'N1,000',
  };

  const steps = [
    { label: 'Order Placed', done: order.orderPlaced },
    { label: 'Order Processed', done: order.orderProcessed },
    { label: 'Order in Transit', done: order.orderInTransit },
    { label: 'Order Delivered', done: order.orderDelivered },
  ];

  return (
    <div className="min-h-screen bg-white p-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" onClick={() => navigate(-1)} className="text-green-800">
            &lt; Back
          </Button>
          <h1 className="text-xl font-bold text-green-800">Track Order</h1>
        </div>

        {/* Order Status Card */}
        <div className="bg-gray-100 p-4 rounded-lg space-y-4">
          <p className="text-sm text-gray-600">
            Status: <span className="font-medium text-blue-700">{order.status}</span>
          </p>
          <p className="text-sm text-gray-600">
            Estimated Time: <span className="font-medium">{order.estimatedTime}</span>
          </p>

          {/* Order Steps */}
          <div className="space-y-2">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <div
                  className={`w-4 h-4 rounded-full ${step.done ? 'bg-green-700' : 'bg-gray-300'}`}
                />
                <p className="text-sm text-gray-600">{step.label}</p>
              </div>
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-200 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-600">[Map Placeholder]</p>
          </div>

          {/* Delivery Info */}
          <p className="text-sm text-gray-600">
            Estimated Delivery: <span className="font-medium">{order.estimatedDelivery}</span>
          </p>
          <p className="text-sm text-gray-600">
            Subtotal: <span className="font-medium">{order.subtotal}</span>
          </p>
        </div>

        {/* Live Tracking Button */}
        <Button
          className="w-full bg-green-700 hover:bg-green-800 text-white rounded-lg py-3"
          onClick={() => navigate('/live-tracking')}
        >
          Live Tracking
        </Button>
      </motion.div>
    </div>
  );
}
