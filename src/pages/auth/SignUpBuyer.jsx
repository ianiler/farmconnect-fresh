// src/pages/auth/SignUpBuyer.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

export default function SignUpBuyer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    companyName: "",
    preferences: "",
    deliveryLocation: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Buyer Registered:", form);
    alert("✅ Buyer account created! Redirecting to marketplace...");
    window.location.href = "/dashboard-buyer"; // Consider using react-router-dom's navigate()
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-100 to-green-50 p-6"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md space-y-5"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <ShoppingBag className="w-8 h-8 text-green-600" />
          <h1 className="text-2xl font-bold text-green-700">Buyer Sign Up</h1>
        </div>

        <input
          name="name"
          type="text"
          placeholder="Full Name"
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          onChange={handleChange}
          required
        />
        <input
          name="companyName"
          type="text"
          placeholder="Company or Business Name"
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          onChange={handleChange}
        />
        <input
          name="preferences"
          type="text"
          placeholder="What do you buy? (e.g. Maize, Rice)"
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          onChange={handleChange}
        />
        <input
          name="deliveryLocation"
          type="text"
          placeholder="Delivery Address"
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Create Account
        </button>
      </form>
    </motion.div>
  );
}
