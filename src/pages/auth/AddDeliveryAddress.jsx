// src/pages/auth/AddDeliveryAddress.jsx
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/Button'; // default import
import Input from '@/components/ui/Input';   // default import
import Label from '@/components/ui/Label';   // default import
import { MapPin } from 'lucide-react';
import { toast } from 'sonner';

export default function AddDeliveryAddress() {
  const navigate = useNavigate();

  const handleUseLocation = () => {
    // Placeholder for geolocation
    toast.info('Using Current Location', { description: 'Fetching address...' });
    setTimeout(() => navigate('/confirm-address'), 1000);
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
          Add Delivery Address
        </h2>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <Label htmlFor="address" className="text-gray-700 text-sm font-medium">
              Type in address
            </Label>
            <Input
              id="address"
              placeholder="Enter your address"
              className="w-full border border-green-300 focus:ring-2 focus:ring-green-500 rounded-lg"
            />
          </div>

          {/* Use Current Location */}
          <Button
            type="button"
            className="w-full border border-green-400 text-green-700 hover:bg-green-100 rounded-lg py-3 transition-colors"
            onClick={handleUseLocation}
          >
            Use Current Location
          </Button>

          {/* Next Button */}
          <Button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 rounded-lg py-3 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              navigate('/confirm-address');
            }}
          >
            Next
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
