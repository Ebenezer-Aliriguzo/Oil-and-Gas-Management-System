import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LPGGasProducts.css';
import product21 from '../assets/product21-LPG-A-semi-filling-machine.png';
import product22 from '../assets/product22-LPG-Gas-Regulators.webp';
import product23 from '../assets/product23-LPG-Gas-Hoses.webp';
import product24 from '../assets/product24-50kg-LPG-Gas-Cylinder.webp';
import product25 from '../assets/product25-20kg-LPG-Gas-Cylinder.webp';
import product26 from '../assets/product26-10kg-LPG-Gas-Cylinder.webp';

const products = [
  { id: 21, image: product21, name: "LPG-A Semi-Automatic LPG Gas Filling Machine", description: "LPG-A semi-automatic LPG gas filling machine with a digital LPG gas filling scale, designed for filling LPG cylinders. The machine has a sturdy metallic.", oldPrice: "₦4,500,000", newPrice: "₦4,000,000" },
  { id: 22, image: product22, name: "LPG Gas Regulators", description: "Ensure the safety and efficiency of your gas usage with our high-quality LPG gas regulators. They are designed to provide a consistent gas flow and come with safety features to prevent leaks. Available at Chidest Oil and Gas.", oldPrice: "₦5,000", newPrice: "₦4,500" },
  { id: 23, image: product23, name: "LPG Gas Hoses", description: "Our LPG gas hoses are made from durable materials to withstand high pressure and ensure safe gas transmission. They are compatible with various gas appliances and are available in different lengths at Chidest Oil and Gas.", oldPrice: "₦2,500", newPrice: "₦2,200" },
  { id: 24, image: product24, name: "50kg LPG Gas Cylinder", description: "Our 50kg LPG gas cylinder is suitable for high gas consumption needs, such as commercial kitchens and industrial applications. It offers a substantial supply of gas, ensuring uninterrupted operations. Get yours now at Chidest Oil and Gas.", oldPrice: "₦45,000", newPrice: "₦40,000" },
  { id: 25, image: product25, name: "20kg LPG Gas Cylinder", description: "The 20kg LPG gas cylinder is ideal for larger families or small businesses. It provides a longer-lasting supply of gas, reducing the frequency of cylinder changes. Durable and safe, it is available at Chidest Oil and Gas.", oldPrice: "₦20,000", newPrice: "₦18,000" },
  { id: 26, image: product26, name: "10kg LPG Gas Cylinder", description: "Our 10kg LPG gas cylinder is perfect for households with moderate gas consumption. It is designed with safety and durability in mind, ensuring a reliable supply of gas for your cooking needs. Available now at Chidest Oil and Gas.", oldPrice: "₦12,000", newPrice: "₦10,000" },
];

const LPGGasProducts = () => {
  const navigate = useNavigate();

  const handleBuyNow = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="lpg-products-container">
      <h1 className="lpg-products-title">LPG Gas Products</h1>
      <div className="lpg-product-list">
        {products.map(product => (
          <div key={product.id} className="lpg-product-card">
            <img src={product.image} alt={product.name} className="lpg-product-image" />
            <h2 className="lpg-product-name">{product.name}</h2>
            <p className="lpg-product-description">{product.description}</p>
            <div className="lpg-product-price">
              <span className="original-price">{product.oldPrice}</span>
              <span className="discount-price">{product.newPrice}</span>
            </div>
            <button className="buy-button" onClick={() => handleBuyNow(product.id)}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LPGGasProducts;