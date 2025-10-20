// src/pages/buyer/Category.jsx
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '@/components/ui/Button';
export default function Category() {
  const { category } = useParams();
  const navigate = useNavigate();

  const products = [
    { name: 'Cabbage', price: 'N1,200', image: 'https://images.squarespace-cdn.com/content/v1/5a470bc3b7411c6102f6abfc/1615391692595-FSY2DAE7CMYRB8L689AC/savoy.jpg?format=2500w' },
    { name: 'Sweet Potatoes', price: 'N1,200', image: 'https://www.muzzarellifarms.com/images/muzzarelli-farms-vineland-nj1.jpg' },
    { name: 'Carrots', price: 'N1,200', image: 'https://via.placeholder.com/100?text=Carrots' },
    { name: 'Bell Peppers', price: 'N1,200', image: 'https://via.placeholder.com/100?text=Peppers' },
    { name: 'Spinach', price: 'N300', image: 'https://via.placeholder.com/100?text=Spinach' },
  ];

  return (
    <div className="min-h-screen bg-white p-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        {/* Header */}
        <div className="flex items-center">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="text-green-800"
          >
            &lt;
          </Button>
          <h1 className="text-xl font-bold text-green-800 ml-4 capitalize">
            {category}
          </h1>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 gap-4">
          {products.map((prod) => (
            <div
              key={prod.name}
              className="bg-white border rounded-lg p-2 shadow-sm cursor-pointer hover:shadow-md transition"
              onClick={() => navigate(`/product/${prod.name.toLowerCase().replace(/ /g, '-')}`)}
            >
              <img
                src={prod.image}
                alt={prod.name}
                className="w-full h-24 object-cover rounded mb-1"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/100'; }}
              />
              <p className="text-sm font-medium text-green-800">{prod.name}</p>
              <p className="text-xs text-green-700 font-bold">{prod.price}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
