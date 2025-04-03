import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderGas.css';

const OrderGas = () => {
  const [gasKg, setGasKg] = useState('');
  const [cylinderSize, setCylinderSize] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    document.getElementById('orderGasForm').scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleGasKgChange = (e) => {
    setGasKg(e.target.value);
    calculateTotalAmount(e.target.value, cylinderSize);
  };

  const handleCylinderSizeChange = (e) => {
    setCylinderSize(e.target.value);
    calculateTotalAmount(gasKg, e.target.value);
  };

  const calculateTotalAmount = (kg, size) => {
    const kgPrice = 1450; 
    const sizePrice = size ? parseInt(size) * 1000 : 0; 
    const total = kg * kgPrice + sizePrice;
    setTotalAmount(total);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const orderData = {
      gasKg,
      cylinderSize,
      fullName,
      phoneNumber,
      email,
      address,
      totalAmount
    };
    navigate('/order-gas-product-data', { state: orderData });
  };

  return (
    <div className="order-gas-container" id="orderGasForm">
      <h1 className="order-gas-title">Order Gas</h1>
      <form className="order-gas-form" onSubmit={handleFormSubmit}>
        <label>
          Number of kg of Gas:
          <input type="number" value={gasKg} onChange={handleGasKgChange} required />
        </label>
        <label>
          Cylinder Size (optional):
          <select value={cylinderSize} onChange={handleCylinderSizeChange}>
            <option value="">Select Size</option>
            <option value="3">3kg LPG Cylinder</option>
            <option value="5">5kg LPG Cylinder</option>
            <option value="6">6kg LPG Cylinder</option>
            <option value="10">10kg LPG Cylinder</option>
            <option value="12.5">12.5kg LPG Cylinder</option>
            <option value="15">15kg LPG Cylinder</option>
            <option value="25">25kg LPG Cylinder</option>
            <option value="50">50kg LPG Cylinder</option>
            <option value="75">75kg LPG Cylinder</option>
            <option value="100">100kg LPG Cylinder</option>
            <option value="500">500kg LPG Cylinder</option>
          </select>
        </label>
        <label>
          Full Name:
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        </label>
        <label>
          Phone Number:
          <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Address/Location:
          <textarea value={address} onChange={(e) => setAddress(e.target.value)} required></textarea>
        </label>
        <div className="total-amount">
          Total Amount: ₦{totalAmount}
        </div>
        <button type="submit" className="order-now-button">Order Now</button>
      </form>
    </div>
  );
};

export default OrderGas;