// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "sonner"; // ✅ Global toast notifications

// Error handling
import ErrorBoundary from "./components/ErrorBoundary";

// Auth pages
import SplashScreen from "./pages/auth/SplashScreen";
import Welcome from "./pages/auth/Welcome";
import UserType from "./pages/auth/UserType";
import Login from "./pages/auth/Login";
import SignUpFarmer from "./pages/auth/SignUpFarmer";
import SignUpBuyer from "./pages/auth/SignUpBuyer";
import OtpVerification from "./pages/auth/OtpVerification";
import AddDeliveryAddress from "./pages/auth/AddDeliveryAddress";
import ConfirmAddress from "./pages/auth/ConfirmAddress";

// Buyer pages
import Home from "./pages/buyer/Home";
import Category from "./pages/buyer/Category";
import ProductDetails from "./pages/buyer/ProductDetails";
import Mycart from "./pages/buyer/Mycart";
import SavedItems from "./pages/buyer/SavedItems";
import MyOrders from "./pages/buyer/MyOrders";
import OrderDetails from "./pages/buyer/OrderDetails";
import TrackOrder from "./pages/buyer/TrackOrder";
import Checkout from "./pages/buyer/Checkout";

// Farmer pages
import ProfileSetup from "./pages/farmer/ProfileSetup";
import FarmerHome from "./pages/farmer/FarmerHome";
import AddProduct from "./pages/farmer/AddProduct";
import Statistics from "./pages/farmer/Statistics";
import Notifications from "./pages/farmer/Notifications";

function App() {
  return (
    <ErrorBoundary>
      <>
        {/* ✅ Global toaster for success/error messages */}
        <Toaster richColors position="top-center" />

        <Routes>
          {/* 🌟 Redirect base path to SplashScreen */}
          <Route path="/" element={<Navigate to="/splash" replace />} />

          {/* 🌱 Auth Routes */}
          <Route path="/splash" element={<SplashScreen />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/choose" element={<UserType />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup-buyer" element={<SignUpBuyer />} />
          <Route path="/signup-farmer" element={<SignUpFarmer />} />
          <Route path="/otp-verification" element={<OtpVerification />} />
          <Route path="/add-address" element={<AddDeliveryAddress />} />
          <Route path="/confirm-address" element={<ConfirmAddress />} />

          {/* 🛒 Buyer Routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/product/:product" element={<ProductDetails />} />
          <Route path="/mycart" element={<Mycart />} />
          <Route path="/saved-items" element={<SavedItems />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/order/:id" element={<OrderDetails />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/checkout" element={<Checkout />} />

          {/* 🌾 Farmer Routes */}
          <Route path="/farmer/profile-setup" element={<ProfileSetup />} />
          <Route path="/farmer/home" element={<FarmerHome />} />
          <Route path="/farmer/add-product" element={<AddProduct />} />
          <Route path="/farmer/statistics" element={<Statistics />} />
          <Route path="/farmer/notifications" element={<Notifications />} />
        </Routes>
      </>
    </ErrorBoundary>
  );
}

export default App;
