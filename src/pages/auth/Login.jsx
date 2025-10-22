import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock } from "lucide-react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (u) => u.email === form.email && u.password === form.password
    );

    if (!foundUser) {
      alert("❌ Invalid email or password.");
      return;
    }

    // ✅ Log user for debugging
    console.log("✅ Logged in user:", foundUser);

    localStorage.setItem("activeUser", JSON.stringify(foundUser));
    alert(`Welcome back, ${foundUser.name}!`);

    // ✅ Redirect by role
    if (foundUser.role === "farmer") navigate("/farmer/home");
    else if (foundUser.role === "buyer") navigate("/home");
    else navigate("/"); // fallback
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-100 to-green-50 p-6"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-5"
      >
        <h1 className="text-2xl font-bold text-green-700 text-center mb-4">
          Login to FarmConnect
        </h1>

        <Input label="Email" name="email" icon={<Mail />} onChange={handleChange} required />
        <Input label="Password" name="password" icon={<Lock />} type="password" onChange={handleChange} required />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Login
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/choose")}
            className="text-green-700 font-semibold cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </p>
      </form>
    </motion.div>
  );
}

function Input({ label, name, icon, type = "text", ...props }) {
  return (
    <div>
      <label className="block text-sm text-gray-600 mb-1">{label}</label>
      <div className="flex items-center border rounded-lg px-3 bg-gray-50">
        {icon && <div className="text-gray-400 w-5 h-5 mr-2">{icon}</div>}
        <input
          name={name}
          type={type}
          className="w-full p-2 outline-none bg-transparent"
          {...props}
        />
      </div>
    </div>
  );
}
