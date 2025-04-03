import React from 'react';
import { useParams } from 'react-router-dom';
import { PaystackButton } from 'react-paystack';
import './ProductDetail.css';
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
import product21 from '../assets/product21-LPG-A-semi-filling-machine.png';
import product22 from '../assets/product22-LPG-Gas-Regulators.webp';
import product23 from '../assets/product23-LPG-Gas-Hoses.webp';
import product24 from '../assets/product24-50kg-LPG-Gas-Cylinder.webp';
import product25 from '../assets/product25-20kg-LPG-Gas-Cylinder.webp';
import product26 from '../assets/product26-10kg-LPG-Gas-Cylinder.webp';

const products = [

  { id: 1, image: product1, name: "Complete Set of Cooking Gas Accessories", price: "₦25,000", description: "Includes gas hose, regulator, burner, and cylinder connector." },
  { id: 2, image: product2, name: "6kg Gas Cylinder (Empty)", price: "₦10,500", description: "High-quality, durable gas cylinder suitable for home use." },
  { id: 3, image: product3, name: "6kg Gas Cylinder with Burner", price: "₦15,500", description: "Comes with a built-in burner for convenience." },
  { id: 4, image: product4, name: "Modern Gas Burner", price: "₦5,500", description: "Sleek and efficient stainless-steel burner for LPG stoves." },
  { id: 5, image: product5, name: "Single Gas Burner (Standard)", price: "₦1,700", description: "Compact single-burner gas stove for efficient cooking." },
  { id: 6, image: product6, name: "Double Gas Burner (Standard)", price: "₦6,500", description: "High-performance double-burner gas stove for fast cooking." },
  { id: 7, image: product7, name: "Single Gas Burner (Premium)", price: "₦3,000", description: "Heavy-duty premium single burner with high heat output." },
  { id: 8, image: product8, name: "High-Durability Gas Hose (1.5m)", price: "₦2,500", description: "Flexible and heat-resistant gas hose for safe connections." },
  { id: 9, image: product9, name: "Binatone Tabletop Gas Cooker (Model GGC-87208)", price: "₦35,000", description: "Premium two-burner gas cooker with auto-ignition." },
  { id: 10, image: product10, name: "Heavy-Duty Single Gas Burner", price: "₦3,000", description: "High-efficiency single burner for domestic and commercial use." },
  { id: 11, image: product11, name: "Smart Sensor Handheld Gas Leak Detector (DK-Flame)", price: "₦18,000", description: "Portable gas leakage detector with real-time alarm system." },
  { id: 12, image: product12, name: "Gas Nozzle (Brass-Coated, Standard Size)", price: "₦1,200", description: "Compatible with most cooking gas cylinders for secure connections." },
  { id: 13, image: product13, name: "Tri-Burner Gas Cooker with High-Durability Hose", price: "₦45,000", description: "Triple-burner stove for faster and more efficient cooking." },
  { id: 14, image: product14, name: "Multi-Service Gas Valve (310x310)", price: "₦12,500", description: "Heavy-duty gas valve for secure gas flow regulation." },
  { id: 15, image: product15, name: "Automatic Shut-Off Valve (2-Inch, 310x310)", price: "₦25,000", description: "Designed to prevent gas leaks and enhance safety." },
  { id: 16, image: product16, name: "Ball Valve Apollo (½-Inch, 310x310)", price: "₦7,500", description: "Durable half-inch ball valve for industrial and home gas systems." },
  { id: 17, image: product17, name: "Ball Valve Apollo (½-Inch, Heavy-Duty, 310x310)", price: "₦9,500", description: "Improved durability with anti-leak protection." },
  { id: 18, image: product18, name: "Ball Valve with Aviator (3-Inch, 310x310)", price: "₦18,000", description: "Precision-engineered ball valve for gas flow control." },
  { id: 19, image: product19, name: "Long-Type Camping Gas Filling Head (310x310)", price: "₦5,500", description: "Specially designed long camping gas filling nozzle." },
  { id: 20, image: product20, name: "Oil Pressure Gauge (40 Bar, 310x310)", price: "₦15,000", description: "High-accuracy oil pressure gauge for gas safety monitoring." },
 
  { id: 21, image: product21, name: "LPG-A Semi-Automatic LPG Gas Filling Machine", price: "₦4,000,000", description: "LPG-A semi-automatic LPG gas filling machine with a digital LPG gas filling scale, designed for filling LPG cylinders. The machine has a sturdy metallic." },
  { id: 22, image: product22, name: "LPG Gas Regulators", price: "₦4,500", description: "Ensure the safety and efficiency of your gas usage with our high-quality LPG gas regulators. They are designed to provide a consistent gas flow and come with safety features to prevent leaks. Available at Chidest Oil and Gas." },
  { id: 23, image: product23, name: "LPG Gas Hoses", price: "₦2,200", description: "Our LPG gas hoses are made from durable materials to withstand high pressure and ensure safe gas transmission. They are compatible with various gas appliances and are available in different lengths at Chidest Oil and Gas." },
  { id: 24, image: product24, name: "50kg LPG Gas Cylinder", price: "₦40,000", description: "Our 50kg LPG gas cylinder is suitable for high gas consumption needs, such as commercial kitchens and industrial applications. It offers a substantial supply of gas, ensuring uninterrupted operations. Get yours now at Chidest Oil and Gas." },
  { id: 25, image: product25, name: "20kg LPG Gas Cylinder", price: "₦18,000", description: "The 20kg LPG gas cylinder is ideal for larger families or small businesses. It provides a longer-lasting supply of gas, reducing the frequency of cylinder changes. Durable and safe, it is available at Chidest Oil and Gas." },
  { id: 26, image: product26, name: "10kg LPG Gas Cylinder", price: "₦10,000", description: "Our 10kg LPG gas cylinder is perfect for households with moderate gas consumption. It is designed with safety and durability in mind, ensuring a reliable supply of gas for your cooking needs. Available now at Chidest Oil and Gas." },
];

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  const config = {
    email: 'customer@example.com', // I will replace with my email
    amount: parseInt(product.price.replace(/[^0-9]/g, '')) * 100, // Convert price to kobo
    publicKey: 'your-paystack-public-key', //I will replace with my Paystack public key
  };

  const handleSuccess = (reference) => {
    console.log(reference);
    alert('Payment successful!');
  };

  const handleClose = () => {
    console.log('Payment closed');
  };

  return (
    <div className="product-detail-container">
      <img src={product.image} alt={product.name} className="product-detail-image" />
      <h2 className="product-detail-name">{product.name}</h2>
      <p className="product-detail-description">{product.description}</p>
      <div className="product-detail-price">{product.price}</div>
      <PaystackButton
        text="Buy Now"
        className="paystack-button"
        callback={handleSuccess}
        close={handleClose}
        disabled={false}
        embed={false}
        reference={new Date().getTime().toString()}
        email={config.email}
        amount={config.amount}
        publicKey={config.publicKey}
      />
    </div>
  );
};

export default ProductDetail;
