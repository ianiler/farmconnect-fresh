import React from "react";
import { useNavigate } from "react-router-dom";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1592928302707-6f6e65f04c3f?auto=format&fit=crop&w=1350&q=80')", // 🌾 Replace with your own farm image
      }}
    >
      <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl px-8 py-10 w-full max-w-md">
        <h1 className="text-3xl font-bold text-green-700 text-center mb-6">
          Welcome To Farm Connect🌿
        </h1>

        <div className="space-y-4">
          <Input placeholder="Email" className="border-green-300" />
          <Input
            type="password"
            placeholder="Password"
            className="border-green-300" 
          />  <br></br>
          <Button
            className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full py-2"
            onClick={() => navigate("/home")}
          >
            Sign In
          </Button>
        </div>

        <p className="text-center text-gray-600 text-sm mt-4">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-green-600 font-semibold cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
