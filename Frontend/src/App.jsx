import "./App.css";
import AboutPage from "./Components/landing_Page/about/AboutPage";
import HomePage from "./Components/landing_Page/home/HomePage";
import Signup from "./Components/landing_Page/signup/SignUp";
import ProductPage from "./Components/landing_Page/products/ProductPage";
import SupportPage from "./Components/landing_Page/support/SupportPage";
import PricingPage from "./Components/landing_Page/pricing/PricingPage";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/landing_Page/Footer";
import Navbar from "./Components/landing_Page/Navbar";
import NotFound from "./Components/landing_Page/NotFound";
import Login from "./Components/landing_Page/login/Login";
import ProtectedRoute from "./Components/landing_Page/ProtectedRoute";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
