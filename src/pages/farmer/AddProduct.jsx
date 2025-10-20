// src/pages/farmer/AddProduct.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Label from '@/components/ui/Label';
import Select from '@/components/ui/Select';
import { Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export default function AddProduct() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    category: '',
    stock: '',
    price: '',
    image: null,
    description: '',
  });

  const handleChange = (name, value) => setForm({ ...form, [name]: value });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) { // 2MB limit
      toast.error('Image too large (max 2MB)');
      return;
    }
    handleChange('image', URL.createObjectURL(file));
    toast.info('Image Uploaded', { description: 'Preview available.' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, category, stock, price } = form;
    if (!name || !category || !stock || !price) {
      toast.error('Please fill all required fields.');
      return;
    }
    toast.success('Product Added', { description: 'Listed on Base Testnet.' });
    navigate('/farmer-home');
  };

  return (
    <div className="min-h-screen bg-white p-4 flex items-center justify-center">
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-lg w-full max-w-sm p-6 space-y-5 relative"
      >
        {/* Back button */}
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 text-green-700"
        >
          &lt; Back
        </Button>

        <h1 className="text-2xl font-bold text-green-700 text-center">Add Product</h1>

        {/* Product Name */}
        <div>
          <Label htmlFor="name">Product Name</Label>
          <Input
            id="name"
            placeholder="Product Name"
            className="border-green-300 focus:ring-green-500 rounded-lg"
            onChange={(e) => handleChange('name', e.target.value)}
            required
          />
        </div>

        {/* Product Description */}
        <div>
          <Label htmlFor="description">Product Description</Label>
          <Input
            id="description"
            placeholder="Product Description"
            className="border-green-300 focus:ring-green-500 rounded-lg"
            onChange={(e) => handleChange('description', e.target.value)}
          />
        </div>

        {/* Product Category */}
        <div>
          <Label htmlFor="category">Select Product Category</Label>
          <Select onValueChange={(value) => handleChange('category', value)} required>
            <SelectTrigger className="border-green-300 rounded-lg">
              <SelectValue placeholder="Select Product Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="vegetables">Vegetables</SelectItem>
              <SelectItem value="fruits">Fruits</SelectItem>
              <SelectItem value="grains">Grains</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Stock Quantity */}
        <div>
          <Label htmlFor="stock">Stock Quantity</Label>
          <Input
            id="stock"
            type="number"
            placeholder="Stock Quantity"
            className="border-green-300 focus:ring-green-500 rounded-lg"
            onChange={(e) => handleChange('stock', e.target.value)}
            required
          />
        </div>

        {/* Price */}
        <div>
          <Label htmlFor="price">Price per unit</Label>
          <Input
            id="price"
            type="number"
            placeholder="Price per unit"
            className="border-green-300 focus:ring-green-500 rounded-lg"
            onChange={(e) => handleChange('price', e.target.value)}
            required
          />
        </div>

        {/* Image Upload */}
        <div>
          <Label>Add Image</Label>
          <Button
            variant="outline"
            className="w-full border-dashed border-green-400 hover:bg-green-100 rounded-lg"
            asChild
          >
            <label htmlFor="image-upload" className="cursor-pointer flex items-center justify-center">
              <Upload className="mr-2 h-4 w-4" /> Add Image
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
          </Button>
          {form.image && (
            <img src={form.image} alt="Preview" className="mt-2 w-full h-24 object-cover rounded-lg" />
          )}
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full bg-green-700 hover:bg-green-800 rounded-lg py-3 text-white">
          Add Product
        </Button>
      </motion.form>
    </div>
  );
}
