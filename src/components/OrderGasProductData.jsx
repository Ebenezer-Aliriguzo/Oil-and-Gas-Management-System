import React from 'react';
import { useLocation } from 'react-router-dom';
import { PaystackButton } from 'react-paystack';
import './OrderGasProductData.css';

const OrderGasProductData = () => {
  const location = useLocation();
  const orderData = location.state;

  if (!orderData) {
    return <div>No order data found.</div>;
  }

  const paystackConfig = {
    email: orderData.email,
    amount: orderData.totalAmount * 100, 
    publicKey: 'my-paystack-public-key', 
    text: 'Pay Now',
    onSuccess: (reference) => {
      console.log(reference);
      alert('Payment successful!');
    },
    onClose: () => {
      console.log('Payment closed');
    }
  };

  return (
    <div className="order-gas-product-data-container">
      <h1 className="order-gas-product-data-title">Order Details</h1>
      <div className="order-details">
        <p><strong>Full Name:</strong> {orderData.fullName}</p>
        <p><strong>Phone Number:</strong> {orderData.phoneNumber}</p>
        <p><strong>Email:</strong> {orderData.email}</p>
        <p><strong>Address:</strong> {orderData.address}</p>
        <p><strong>Number of kg of Gas:</strong> {orderData.gasKg}</p>
        <p><strong>Cylinder Size:</strong> {orderData.cylinderSize}</p>
        <p><strong>Total Amount:</strong> ₦{orderData.totalAmount}</p>
      </div>
      <PaystackButton {...paystackConfig} className="pay-now-button" />
    </div>
  );
};

export default OrderGasProductData;