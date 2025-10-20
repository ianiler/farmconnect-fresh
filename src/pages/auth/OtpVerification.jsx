// src/pages/auth/OtpVerification.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import Input from "@/components/ui/Input";
import Label from '@/components/ui/Label';
import { Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export default function OtpVerification() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      toast.error('Invalid OTP', { description: 'Please enter a 6-digit code.' });
      return;
    }
    toast.success('Verified', { description: 'OTP confirmed.' });
    navigate('/add-address');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-50 to-green-100 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-lg w-full max-w-sm p-6 space-y-5"
      >
        <div className="flex items-center justify-center mb-4">
          <Phone className="h-8 w-8 text-green-700" />
        </div>
        <h2 className="text-2xl font-bold text-green-700 text-center">
          OTP Verification
        </h2>
        <p className="text-gray-600 text-center text-sm mb-4">
          Please enter the OTP code sent to your phone.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Label htmlFor="otp" className="sr-only">OTP Code</Label>
          <Input
            id="otp"
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/, '').slice(0, 6))}
            placeholder="Enter 6-digit code"
            className="border-green-300 focus:ring-2 focus:ring-green-500 rounded-lg text-center text-2xl tracking-widest"
            maxLength={6}
            required
          />
          <p className="text-sm text-gray-600 text-center">
            Didn't receive code?{' '}
            <span className="text-green-700 hover:underline cursor-pointer">
              Resend
            </span>
          </p>
          <Button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 rounded-lg py-3 transition-colors"
          >
            Verify
          </Button>
        </form>
      </motion.div>

      {/* Placeholder numeric keypad */}
      <div className="grid grid-cols-3 gap-4 mt-8 max-w-sm w-full">
        {['1','2','3','4','5','6','7','8','9','','0',''].map((key, i) => (
          <Button
            key={i}
            disabled={!key}
            className="text-2xl h-12 border border-green-300 rounded-lg disabled:opacity-30"
          >
            {key}
          </Button>
        ))}
      </div>
    </div>
  );
}
