// src/pages/farmer/FarmerHome.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Bell,
  Plus,
  Edit,
  Trash2,
  Home,
  Clipboard,
  List,
  User,
  Upload,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function FarmerHome() {
  const navigate = useNavigate();

  // ✅ Example initial products (replace with your own images later)
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Fresh Tomatoes",
      price: "₦500",
      stock: "In Stock",
      image: "/images/tomatoes.jpg",
    },
    {
      id: 2,
      name: "Organic Maize",
      price: "₦300 per kg",
      stock: "Low Stock",
      image: "/images/maize.jpg",
    },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    stock: "",
    image: "",
  });
  const [preview, setPreview] = useState(null);
  const [showUpload, setShowUpload] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
      setNewProduct({ ...newProduct, image: imageUrl });
    }
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price || !preview) {
      toast.error("Please fill all required fields and upload an image!");
      return;
    }
    const added = { ...newProduct, id: Date.now() };
    setProducts([...products, added]);
    setNewProduct({ name: "", price: "", stock: "", image: "" });
    setPreview(null);
    setShowUpload(false);
    toast.success("✅ Product added successfully!");
  };

  const handleEdit = (id) => {
    toast.info("Edit mode coming soon!", {
      description: "You’ll be able to modify your product details here.",
    });
  };

  const handleRemove = (id) => {
    setProducts(products.filter((p) => p.id !== id));
    toast.success("Product removed.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 pb-24">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-green-800">My Farm Dashboard</h1>
        <Bell
          className="h-6 w-6 text-green-700 cursor-pointer"
          onClick={() => navigate("/farmer/notifications")}
        />
      </div>

      {/* Search Bar */}
      <div className="relative max-w-2xl mx-auto mt-4 px-4">
        <Search className="absolute left-5 top-3 h-5 w-5 text-gray-500" />
        <input
          placeholder="Search your crops..."
          className="w-full pl-12 pr-4 py-2 rounded-full border border-green-300 shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none"
        />
      </div>

      {/* Add Product Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setShowUpload(!showUpload)}
          className="flex items-center gap-2 bg-green-600 text-white py-3 px-6 rounded-xl hover:bg-green-700 transition-all shadow-md"
        >
          <Plus className="w-5 h-5" /> Add New Product
        </button>
      </div>

      {/* Upload Form */}
      {showUpload && (
        <motion.form
          onSubmit={handleAddProduct}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white mt-6 mx-4 sm:mx-auto sm:max-w-md p-6 rounded-2xl shadow-lg space-y-4"
        >
          <h2 className="text-xl font-semibold text-green-800 text-center">
            Upload Your Product
          </h2>

          <input
            type="text"
            placeholder="Product name"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-300"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            required
          />

          <input
            type="text"
            placeholder="Price (e.g. ₦500 per kg)"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-300"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
            required
          />

          <select
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-300"
            value={newProduct.stock}
            onChange={(e) =>
              setNewProduct({ ...newProduct, stock: e.target.value })
            }
            required
          >
            <option value="">Select stock status</option>
            <option>In Stock</option>
            <option>Low Stock</option>
            <option>Out of Stock</option>
          </select>

          <div className="flex flex-col items-center border-2 border-dashed border-green-300 p-4 rounded-xl">
            <Upload className="h-8 w-8 text-green-500 mb-2" />
            <label className="cursor-pointer text-green-700 font-medium">
              Upload Image
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-3 w-32 h-32 object-cover rounded-lg"
              />
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800"
          >
            Save Product
          </button>
        </motion.form>
      )}

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-6">
        {products.map((prod) => (
          <motion.div
            key={prod.id}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
          >
            <img
              src={prod.image}
              alt={prod.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-green-800">
                {prod.name}
              </h3>
              <p className="text-gray-600">{prod.price}</p>
              <p
                className={`mt-1 text-sm font-medium ${
                  prod.stock === "In Stock"
                    ? "text-green-600"
                    : prod.stock === "Low Stock"
                    ? "text-yellow-500"
                    : "text-red-500"
                }`}
              >
                {prod.stock}
              </p>
              <div className="flex justify-end gap-3 mt-3">
                <button
                  onClick={() => handleEdit(prod.id)}
                  className="text-green-700 hover:text-green-900"
                >
                  <Edit className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleRemove(prod.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-inner py-2 flex justify-around">
        <NavButton icon={<Home className="h-5 w-5" />} label="Home" />
        <NavButton
          icon={<Clipboard className="h-5 w-5" />}
          label="Orders"
          onClick={() => navigate("/farmer/orders")}
        />
        <NavButton
          icon={<List className="h-5 w-5" />}
          label="List"
          onClick={() => navigate("/farmer/list")}
        />
        <NavButton
          icon={<User className="h-5 w-5" />}
          label="Profile"
          onClick={() => navigate("/farmer/profile")}
        />
      </div>
    </div>
  );
}

function NavButton({ icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center text-gray-600 hover:text-green-700"
    >
      {icon}
      <span className="text-xs mt-0.5">{label}</span>
    </button>
  );
}
