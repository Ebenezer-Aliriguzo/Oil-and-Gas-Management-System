import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';
import product4 from '../assets/product4.jpg';
import product5 from '../assets/product5-BURNER-NGN-1700-300x300.png';
import product6 from '../assets/product6.jpg';
import product7 from '../assets/product7.jpg';
import product8 from '../assets/product8.jpg';
import product9 from '../assets/product9-Binatone_Table_Top_gas_cooker__87208.jpg';
import product10 from '../assets/product10-BURNER-NGN-3000-300x300.png';
import product11 from '../assets/product11-Smart-Sensor-Handheld-Gas-Leakage-Detector-dk-flame-310x310.jpg';
import product12 from '../assets/product12.jpg';
import product13 from '../assets/product13-tri-burner with host.jpg';
import product14 from '../assets/product14.jpg';
import product15 from '../assets/product15-Multi-Service-Valve-310x310.jpg';
import product16 from '../assets/product16-Automatic-Shut-Off-Valve-2-inch-310x310.jpg';
import product17 from '../assets/product17-Ball-Valve-Apolo-half-inch-310x310.jpg';
import product18 from '../assets/product18-Ball-Valve-with-Aviator-3-inch-310x310.jpg';
import product19 from '../assets/product19-Camping-Filling-Head-Long-310x310.jpg';
import product20 from '../assets/product20-Oil-Pressure-Gauge-40bar-310x310.jpg';

const products = [
  { id: 1, image: product1, name: "Complete Set of Cooking Gas Accessories", oldPrice: "₦25,000", newPrice: "₦23,000", description: "Includes gas hose, regulator, burner, and cylinder connector." },
  { id: 2, image: product2, name: "6kg Gas Cylinder (Empty)", oldPrice: "₦10,500", newPrice: "₦9,500", description: "High-quality, durable gas cylinder suitable for home use." },
  { id: 3, image: product3, name: "6kg Gas Cylinder with Burner", oldPrice: "₦15,500", newPrice: "₦14,000", description: "Comes with a built-in burner for convenience." },
  { id: 4, image: product4, name: "Modern Gas Burner", oldPrice: "₦5,500", newPrice: "₦5,000", description: "Sleek and efficient stainless-steel burner for LPG stoves." },
  { id: 5, image: product5, name: "Single Gas Burner (Standard)", oldPrice: "₦1,700", newPrice: "₦1,500", description: "Compact single-burner gas stove for efficient cooking." },
  { id: 6, image: product6, name: "Double Gas Burner (Standard)", oldPrice: "₦6,500", newPrice: "₦6,000", description: "High-performance double-burner gas stove for fast cooking." },
  { id: 7, image: product7, name: "Single Gas Burner (Premium)", oldPrice: "₦3,000", newPrice: "₦2,800", description: "Heavy-duty premium single burner with high heat output." },
  { id: 8, image: product8, name: "High-Durability Gas Hose (1.5m)", oldPrice: "₦2,500", newPrice: "₦2,200", description: "Flexible and heat-resistant gas hose for safe connections." },
  { id: 9, image: product9, name: "Binatone Tabletop Gas Cooker (Model GGC-87208)", oldPrice: "₦35,000", newPrice: "₦32,000", description: "Premium two-burner gas cooker with auto-ignition." },
  { id: 10, image: product10, name: "Heavy-Duty Single Gas Burner", oldPrice: "₦3,000", newPrice: "₦2,700", description: "High-efficiency single burner for domestic and commercial use." },
  { id: 11, image: product11, name: "Smart Sensor Handheld Gas Leak Detector (DK-Flame)", oldPrice: "₦18,000", newPrice: "₦16,500", description: "Portable gas leakage detector with real-time alarm system." },
  { id: 12, image: product12, name: "Gas Nozzle (Brass-Coated, Standard Size)", oldPrice: "₦1,200", newPrice: "₦1,000", description: "Compatible with most cooking gas cylinders for secure connections." },
  { id: 13, image: product13, name: "Tri-Burner Gas Cooker with High-Durability Hose", oldPrice: "₦45,000", newPrice: "₦42,000", description: "Triple-burner stove for faster and more efficient cooking." },
  { id: 14, image: product14, name: "Multi-Service Gas Valve (310x310)", oldPrice: "₦12,500", newPrice: "₦11,000", description: "Heavy-duty gas valve for secure gas flow regulation." },
  { id: 15, image: product15, name: "Automatic Shut-Off Valve (2-Inch, 310x310)", oldPrice: "₦25,000", newPrice: "₦22,500", description: "Designed to prevent gas leaks and enhance safety." },
  { id: 16, image: product16, name: "Ball Valve Apollo (½-Inch, 310x310)", oldPrice: "₦7,500", newPrice: "₦6,800", description: "Durable half-inch ball valve for industrial and home gas systems." },
  { id: 17, image: product17, name: "Ball Valve Apollo (½-Inch, Heavy-Duty, 310x310)", oldPrice: "₦9,500", newPrice: "₦8,500", description: "Improved durability with anti-leak protection." },
  { id: 18, image: product18, name: "Ball Valve with Aviator (3-Inch, 310x310)", oldPrice: "₦18,000", newPrice: "₦16,000", description: "Precision-engineered ball valve for gas flow control." },
  { id: 19, image: product19, name: "Long-Type Camping Gas Filling Head (310x310)", oldPrice: "₦5,500", newPrice: "₦5,000", description: "Specially designed long camping gas filling nozzle." },
  { id: 20, image: product20, name: "Oil Pressure Gauge (40 Bar, 310x310)", oldPrice: "₦15,000", newPrice: "₦13,500", description: "High-accuracy oil pressure gauge for gas safety monitoring." }
];

const Home = () => {
  const navigate = useNavigate();

  const handleBuyNow = (productId) => {
    
    navigate(`/product/${productId}`);
  };

  return (
    <div className="home-container">
      <h1>Our Products</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <div className="product-price">
              <span className="original-price">{product.oldPrice}</span>
              <span className="discount-price">{product.newPrice}</span>
            </div>
            <div className="product-variants">
              <p>Color: Red, Blue, Green</p>
              <p>Size: Small, Medium, Large</p>
              <p>Weight: 1kg, 2kg, 3kg</p>
              <p>Capacity: 6L, 12L, 18L</p>
            </div>
            <div className="product-offers">
              <p>Offer: Buy 2, Get 1 Free</p>
              <p>Coupon Code: SAVE10</p>
            </div>
            <button className="buy-button" onClick={() => handleBuyNow(product.id)}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;