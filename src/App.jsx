import React, { useContext, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css'; // Assuming you have a general CSS file for the app

import { LoadingContext } from './context/LoadingContext';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import ProductDetail from './components/ProductDetail';
import AboutUs from './pages/AboutUs';
import LPGGasProducts from './pages/LPGGasProducts';
import Services from './pages/Services';
import OrderGas from './pages/OrderGas';
import OrderGasProductData from './pages/OrderGasProductData';
import FAQs from './pages/FAQs';
import SafetyTips from './pages/SafetyTips';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import TermsofServiceandPrivacyPolicy from './components/TermsofServiceandPrivacyPolicy'; // Correct import for the component
import Footer1 from './components/Footer1';
import Footer2 from './components/Footer2';
import ImageCarousel from './components/Carousel';
import Spinner from './components/Spinner';

const App = () => {
  const { setLoading } = useContext(LoadingContext);
  const location = useLocation();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    handleStart();

    const timer = setTimeout(handleComplete, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [location, setLoading]);

  return (
    <div>
      <Spinner />
      <NavBar />
      <ImageCarousel />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<LPGGasProducts />} />
        <Route path="/services" element={<Services />} />
        <Route path="/order-gas" element={<OrderGas />} />
        <Route path="/order-gas-product-data" element={<OrderGasProductData />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/safety-tips" element={<SafetyTips />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/termsofserviceandprivacypolicy"
          element={<TermsofServiceandPrivacyPolicy />}
        />
      </Routes>
      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default App;
