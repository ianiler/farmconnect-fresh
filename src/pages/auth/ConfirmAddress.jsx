// src/pages/auth/ConfirmAddress.jsx
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/Button';
import { MapPin } from 'lucide-react';
import { toast } from 'sonner';

export default function ConfirmAddress() {
  const navigate = useNavigate();

  const handleConfirm = () => {
    toast.success('Address Confirmed', { description: 'Redirecting to dashboard.' });
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-50 to-green-100 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-lg w-full max-w-sm p-6 space-y-5"
      >
        {/* Icon */}
        <div className="flex items-center justify-center mb-4">
          <MapPin className="h-8 w-8 text-green-700" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-green-700 text-center">
          Confirm Your Address
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-center text-sm mb-4">
          Please verify the address below.
        </p>

        {/* Address Placeholder */}
        <div className="bg-gray-100 p-4 rounded-lg text-center text-gray-700">
          [Detected Address Placeholder]
        </div>

        {/* Confirm Button */}
        <Button
          className="w-full bg-green-700 hover:bg-green-800 rounded-lg py-3 transition-colors"
          onClick={handleConfirm}
        >
          Confirm
        </Button>

        {/* Edit Address Button */}
        <Button
          variant="outline"
          className="w-full border border-green-400 text-green-700 hover:bg-green-100 rounded-lg py-3 transition-colors"
          onClick={() => navigate('/add-address')}
        >
          Edit Address
        </Button>
      </motion.div>
    </div>
  );
}
