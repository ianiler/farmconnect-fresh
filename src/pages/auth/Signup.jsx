// src/pages/auth/SignUp.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    idType: "",
    farmType: "",
    state: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Registered:", formData);
    navigate("/login"); // SPA navigation instead of page reload
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-green-50 to-green-100 px-6">
      {/* Header */}
      <motion.h1
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="text-3xl font-bold text-green-800 mb-6 text-center"
      >
        Sign up
      </motion.h1>

      {/* Form Card */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-lg w-full max-w-sm p-6 space-y-5"
      >
        {/* Full Name */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Enter phone number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        {/* Means of ID */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Means of Identification
          </label>
          <select
            name="idType"
            value={formData.idType}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            <option value="">Select ID Type</option>
            <option value="national_id">National ID</option>
            <option value="voter_card">Voter’s Card</option>
            <option value="passport">Passport</option>
          </select>
        </div>

        {/* Farm Type */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Farm Type
          </label>
          <select
            name="farmType"
            value={formData.farmType}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            <option value="">Select your farm type</option>
            <option value="crop">Crop Farming</option>
            <option value="livestock">Livestock Farming</option>
            <option value="mixed">Mixed Farming</option>
          </select>
        </div>

        {/* State */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            State
          </label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            placeholder="Enter your state"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Home Address
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            placeholder="Enter your home address"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Create a password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            placeholder="Confirm your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        {/* Sign Up Button */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-colors"
        >
          Sign up
        </motion.button>

        {/* Already have account */}
        <p className="text-center text-sm text-gray-600 mt-3">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-700 font-semibold hover:underline"
          >
            Log in
          </Link>
        </p>
      </motion.form>
    </div>
  );
}
