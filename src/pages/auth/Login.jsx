import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const role = new URLSearchParams(location.search).get("role") || "user";

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in as:", role, email, password);

    // Redirect based on role
    if (role === "farmer") navigate("/farmer/home"); // FarmerHome.jsx
    else navigate("/home"); // Home.jsx (buyer)
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen px-4 relative"
      style={{
        backgroundImage: "url('/images/login-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Login Card */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 sm:p-10 z-10"
      >
        {/* Header */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-green-800 mb-8 text-center"
        >
          Log in
        </motion.h1>

        {/* Form */}
        <motion.form
          onSubmit={handleLogin}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 text-sm font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 shadow-sm"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label htmlFor="password" className="text-gray-700 text-sm font-medium mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 shadow-sm"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link to="/reset-password" className="text-green-700 hover:underline text-sm">
              Forgot password?
            </Link>
          </div>

          {/* Submit */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 bg-green-600 text-white font-semibold rounded-xl shadow-lg hover:bg-green-700 transition-colors"
          >
            Log in
          </motion.button>

          {/* Register */}
          <p className="text-center text-gray-600 mt-2 text-sm">
            New here?{" "}
            <Link to="/signup" className="text-green-700 font-semibold hover:underline">
              Register
            </Link>
          </p>
        </motion.form>
      </motion.div>
      
    </div>
  );
}
