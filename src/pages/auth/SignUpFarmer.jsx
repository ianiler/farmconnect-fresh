// src/pages/auth/SignUpFarmer.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Tractor } from "lucide-react";

export default function SignUpFarmer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    farmName: "",
    farmSize: "",
    location: "",
    crops: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Farmer Registered:", form);
    alert("✅ Farmer account created! Redirecting to dashboard...");
    window.location.href = "/dashboard-farmer"; // Consider using navigate() from react-router-dom
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
          <Tractor className="w-8 h-8 text-green-600" />
          <h1 className="text-2xl font-bold text-green-700">Farmer Sign Up</h1>
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
          name="farmName"
          type="text"
          placeholder="Farm Name"
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          onChange={handleChange}
          required
        />
        <input
          name="farmSize"
          type="text"
          placeholder="Farm Size (acres)"
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          onChange={handleChange}
        />
        <input
          name="location"
          type="text"
          placeholder="Farm Location"
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          onChange={handleChange}
          required
        />
        <input
          name="crops"
          type="text"
          placeholder="Crops Grown (e.g. Maize, Rice)"
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          onChange={handleChange}
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
