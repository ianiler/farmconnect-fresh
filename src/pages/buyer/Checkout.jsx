// src/pages/buyer/Checkout.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { toast } from "sonner";
import Button from "@/components/ui/Button";
import { Wallet, CheckCircle2 } from "lucide-react";

export default function Checkout() {
  const navigate = useNavigate();
  const [isPaying, setIsPaying] = useState(false);
  const walletAddress = localStorage.getItem("walletAddress");

  // ✅ Simulated price data (could be fetched from cart)
  const subtotal = 3000;
  const delivery = 500;
  const total = subtotal + delivery;

  const handlePay = async () => {
    if (!window.ethereum) {
      toast.error("Please install MetaMask!");
      return;
    }

    setIsPaying(true);
    toast.info("Connecting to wallet...");

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const userAddress = await signer.getAddress();

      // ✅ Convert total to ether (example)
      const amountInEth = ethers.parseEther("0.0001"); // Replace with actual rate conversion

      const tx = await signer.sendTransaction({
        to: "0x000000000000000000000000000000000000dead", // Simulated payment address
        value: amountInEth,
      });

      toast.success("Transaction sent!", {
        description: `Hash: ${tx.hash.slice(0, 10)}...`,
      });

      await tx.wait();
      toast.success("✅ Payment Successful", {
        description: "Your order has been placed on Base Testnet!",
      });

      // Redirect after a small delay
      setTimeout(() => {
       navigate("/buyer/ordersuccess");;
      }, 1500);
    } catch (err) {
      console.error(err);
      toast.error("Transaction failed or cancelled.");
    } finally {
      setIsPaying(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 flex flex-col items-center justify-center p-6"
    >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6 border border-green-100"
      >
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <Wallet className="w-10 h-10 text-green-700 mb-2" />
          <h1 className="text-2xl font-bold text-green-800">Checkout</h1>
          <p className="text-sm text-gray-600 mt-1">
            Confirm your details and complete payment securely.
          </p>
        </div>

        {/* Order Summary */}
        <div className="bg-green-50 rounded-xl p-5 space-y-2 shadow-inner">
          <h2 className="text-lg font-semibold text-green-800 mb-2">
            Order Summary
          </h2>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Subtotal</span>
            <span>UGX {subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Delivery Fee</span>
            <span>UGX {delivery.toLocaleString()}</span>
          </div>
          <div className="border-t border-green-200 my-2"></div>
          <div className="flex justify-between text-base font-bold text-green-800">
            <span>Total</span>
            <span>UGX {total.toLocaleString()}</span>
          </div>
        </div>

        {/* Wallet Info */}
        <div className="bg-gray-50 rounded-xl p-4 flex flex-col gap-2">
          <p className="text-sm text-gray-600 font-medium">
            Payment Method
          </p>
          {walletAddress ? (
            <p className="text-sm text-green-700 font-semibold">
              {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)} (Base Testnet)
            </p>
          ) : (
            <p className="text-sm text-red-600">
              No wallet connected. Go back and connect via Home.
            </p>
          )}
        </div>

        {/* Pay Button */}
        <Button
          className={`w-full bg-green-700 hover:bg-green-800 text-white rounded-lg py-3 font-semibold flex justify-center items-center gap-2 transition-all ${
            isPaying ? "opacity-70 cursor-not-allowed" : ""
          }`}
          onClick={handlePay}
          disabled={isPaying}
        >
          {isPaying ? "Processing Payment..." : "Pay with Base Wallet"}
          {!isPaying && <CheckCircle2 className="w-4 h-4" />}
        </Button>

        <p
          onClick={() => navigate("/buyer/home")}
          className="text-center text-sm text-green-700 cursor-pointer hover:underline"
        >
          ← Back to Home
        </p>
      </motion.div>
    </motion.div>
  );
}
