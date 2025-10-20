// src/pages/farmer/ProfileSetup.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Label from '@/components/ui/Label';
import Select from '@/components/ui/Select';
import { Upload, Wallet } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export default function ProfileSetup() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    farmType: '',
    idType: '',
    idNumber: '',
    idImage: null,
    bank: '',
    accountNumber: '',
    walletAddress: '',
  });

  const handleChange = (name, value) => setForm({ ...form, [name]: value });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleChange('idImage', URL.createObjectURL(file));
      toast.info('ID Uploaded', { description: 'Image preview available.' });
    }
  };

  const handleConnectWallet = () => {
    toast.info('Connecting Wallet', { description: 'Please confirm in MetaMask.' });
    setTimeout(() => {
      const address = '0x1234...abcd';
      handleChange('walletAddress', address);
      toast.success('Wallet Connected', { description: `Address: ${address}` });
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Profile Set Up', { description: 'Farmer profile created on Base Testnet.' });
    navigate('/farmer-dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 p-4 flex items-center justify-center">
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-lg w-full max-w-sm p-6 space-y-5"
      >
        <h1 className="text-2xl font-bold text-green-700 text-center">Set Up Your Profile</h1>

        {/* Step 1: Farm Type */}
        {step === 1 && (
          <>
            <div>
              <Label htmlFor="farmType">Farm Type</Label>
              <Select onValueChange={(value) => handleChange('farmType', value)}>
                <SelectTrigger className="border-green-300 rounded-lg">
                  <SelectValue placeholder="Choose the farm type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="poultry">Poultry</SelectItem>
                  <SelectItem value="grains">Grains</SelectItem>
                  <SelectItem value="cattle">Cattle</SelectItem>
                  <SelectItem value="crops">Crops</SelectItem>
                  <SelectItem value="fish">Fish</SelectItem>
                  <SelectItem value="vegetables">Vegetables</SelectItem>
                  <SelectItem value="livestock">Livestock</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="button" onClick={() => setStep(2)} className="w-full py-3">
              Next
            </Button>
          </>
        )}

        {/* Step 2: ID Verification */}
        {step === 2 && (
          <>
            <div>
              <Label htmlFor="idType">Verification Type</Label>
              <Select onValueChange={(value) => handleChange('idType', value)}>
                <SelectTrigger className="border-green-300 rounded-lg">
                  <SelectValue placeholder="Select ID type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="voter">Permanent Voter's Card</SelectItem>
                  <SelectItem value="nin">National Identity Number</SelectItem>
                  <SelectItem value="driver">Driver's License</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="idNumber">ID Number</Label>
              <Input
                id="idNumber"
                placeholder="Enter ID Number"
                className="border-green-300 focus:ring-green-500 rounded-lg"
                onChange={(e) => handleChange('idNumber', e.target.value)}
              />
            </div>

            <div>
              <Label>ID Upload</Label>
              <Button
                variant="outline"
                className="w-full border-dashed hover:bg-green-100 rounded-lg py-3"
                asChild
              >
                <label htmlFor="id-upload" className="cursor-pointer flex items-center justify-center">
                  <Upload className="mr-2 h-4 w-4" /> Upload a picture of your ID card
                  <input
                    id="id-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </label>
              </Button>
              {form.idImage && (
                <img src={form.idImage} alt="ID Preview" className="mt-2 w-full h-24 object-cover rounded-lg" />
              )}
            </div>

            <Button type="button" onClick={() => setStep(3)} className="w-full py-3">
              Next
            </Button>
          </>
        )}

        {/* Step 3: Bank & Wallet */}
        {step === 3 && (
          <>
            <div>
              <Label htmlFor="bank">Bank</Label>
              <Input
                id="bank"
                placeholder="GT Bank"
                className="border-green-300 focus:ring-green-500 rounded-lg"
                onChange={(e) => handleChange('bank', e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="accountNumber">Account Number</Label>
              <Input
                id="accountNumber"
                placeholder="Account Number"
                className="border-green-300 focus:ring-green-500 rounded-lg"
                onChange={(e) => handleChange('accountNumber', e.target.value)}
              />
            </div>

            <div>
              <Label>Base Testnet Wallet</Label>
              <Button
                variant="outline"
                className="w-full py-3 flex items-center justify-center"
                onClick={handleConnectWallet}
              >
                <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
              </Button>
              {form.walletAddress && (
                <p className="text-sm text-gray-600 mt-2">Connected: {form.walletAddress}</p>
              )}
            </div>

            <Button type="submit" className="w-full py-3">
              Finish
            </Button>
          </>
        )}
      </motion.form>
    </div>
  );
}
