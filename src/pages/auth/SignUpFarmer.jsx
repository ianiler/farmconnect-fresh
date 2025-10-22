import { useState } from "react";
import { motion } from "framer-motion";
import { Tractor, Mail, Lock, Phone, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SignUpFarmer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
    farmName: "",
    farmSize: "",
    location: "",
    crops: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFarmer = { ...form, role: "farmer" };

    // ✅ Save multiple users
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(newFarmer);
    localStorage.setItem("users", JSON.stringify(users));

    alert("✅ Farmer account created! Redirecting to your dashboard...");
    navigate("/farmer/home");
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
        <div className="flex items-center justify-center gap-2 mb-4">
          <Tractor className="w-8 h-8 text-green-600" />
          <h1 className="text-2xl font-bold text-green-700">Farmer Sign Up</h1>
        </div>

        <Input label="Full Name" name="name" icon={<User />} onChange={handleChange} required />
        <Input label="Email" name="email" icon={<Mail />} type="email" onChange={handleChange} required />
        <Input label="Contact" name="contact" icon={<Phone />} type="tel" onChange={handleChange} required />
        <Input label="Password" name="password" icon={<Lock />} type="password" onChange={handleChange} required />
        <Input label="Farm Name" name="farmName" onChange={handleChange} required />
        <Input label="Farm Size (acres)" name="farmSize" onChange={handleChange} />
        <Input label="Location" name="location" onChange={handleChange} required />
        <Input label="Crops Grown" name="crops" onChange={handleChange} />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Create Farmer Account
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <span
            className="text-green-700 font-semibold cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Log in
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
