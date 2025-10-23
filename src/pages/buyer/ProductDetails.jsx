// src/pages/buyer/ProductDetails.jsx
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '@/components/ui/Button';
import { toast } from 'sonner';

export default function ProductDetails() {
  const { product } = useParams();
  const navigate = useNavigate();

  // Placeholder product data
  const prod = {
    name: product || 'Cauliflower',
    price: 'N500',
    image: 'https://esmmweighless.com/wp-content/uploads/2016/10/cauliflower-1133241_1280.jpg',
    description: 'Fresh cauliflower from local farms. High quality and organic.',
    farmer: 'Ali Kanda',
  };

  const otherProducts = [
    {
      name: 'Savoy',
      image: 'https://images.squarespace-cdn.com/content/v1/5a470bc3b7411c6102f6abfc/1615391692595-FSY2DAE7CMYRB8L689AC/savoy.jpg?format=2500w',
    },
    {
      name: 'Muzzarelli',
      image: 'https://www.muzzarellifarms.com/images/muzzarelli-farms-vineland-nj1.jpg',
    },
    {
      name: 'Product3',
      image: 'https://via.placeholder.com/100?text=Product3',
    },
  ];

  const handleAddToCart = () => {
    toast.success('Added to Cart', { description: `${prod.name} added.` });
  };

  return (
    <div className="min-h-screen bg-white p-4 pb-20">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
        {/* Header */}
        <div className="flex items-center">
          <Button variant="ghost" onClick={() => navigate(-1)} className="text-green-800">
            &lt; Back
          </Button>
          <h1 className="text-xl font-bold text-green-800 ml-4">{prod.name}</h1>
        </div>

        {/* Product Image */}
        <img
          src={prod.image}
          alt={prod.name}
          className="w-full h-48 object-cover rounded-lg"
        />

        {/* Price & Description */}
        <p className="text-green-800 font-bold text-lg">{prod.price}</p>
        <p className="text-gray-600">{prod.description}</p>

        {/* Other Products */}
        <h3 className="text-sm font-semibold text-green-800">Other Products</h3>
        <div className="flex overflow-x-auto space-x-4">
          {otherProducts.map((p) => (
            <div key={p.name} className="bg-gray-100 p-2 rounded-lg min-w-[100px]">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-16 object-cover rounded mb-1"
              />
              <p className="text-xs text-green-800 text-center">{p.name}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Add to Cart Button */}
      <Button
        className="fixed bottom-4 left-4 right-4 bg-green-700 hover:bg-green-800 rounded-lg py-3"
        onClick={handleAddToCart}
      >
        Add to Cart
      </Button>
    </div>
  );
}
