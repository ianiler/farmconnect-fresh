// src/pages/buyer/Checkout.jsx
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export default function Checkout() {
  const navigate = useNavigate();

  const handlePay = () => {
    toast.info('Payment Processing', { description: 'Connecting to Base Testnet wallet...' });
    // Simulate payment process
    setTimeout(() => {
      toast.success('Payment Successful', { description: 'Order placed on Base Testnet.' });
      navigate('/buyer/orders');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <h1 className="text-xl font-bold text-green-800">Checkout</h1>

        {/* Order Summary */}
        <div className="bg-gray-100 p-4 rounded-lg space-y-2">
          <p className="text-sm text-gray-600">Subtotal: N3,000</p>
          <p className="text-sm text-gray-600">Delivery Fee: N500</p>
          <p className="text-sm font-bold text-green-800">Total: N3,500</p>
        </div>

        {/* Payment Method */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600 font-medium">Payment Method</p>
          <p className="text-sm text-green-700">Base Testnet ETH (via Wallet)</p>
        </div>

        {/* Pay Button */}
        <Button
          className="w-full bg-green-700 hover:bg-green-800 text-white rounded-lg py-3"
          onClick={handlePay}
        >
          Pay with Base Testnet
        </Button>
      </motion.div>
    </div>
  );
}
