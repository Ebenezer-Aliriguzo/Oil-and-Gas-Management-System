import React from 'react';
import { IconButton } from '@mui/material';
import { FaFacebookF, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import logo from '../assets/chidestlogo1.png';
import './Footer2.css';

const Footer2 = () => {
  return (
    <footer className="footer2">
      <div className="social-media-icons">
        <IconButton component="a" href="https://web.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
          <FaFacebookF />
        </IconButton>
        <IconButton component="a" href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer" className="social-icon x">
          <SiX />
        </IconButton>
        <IconButton component="a" href="https://wa.me/08184927601" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp">
          <FaWhatsapp />
        </IconButton>
        <IconButton component="a" href="https://mail.google.com/" target="_blank" rel="noopener noreferrer" className="social-icon gmail">
          <FaEnvelope />
        </IconButton>
      </div>
      <div className="footer2-content">
        <div className="footer2-logo-container">
          <img src={logo} alt="Chidest Logo" className="footer2-logo" />
        </div>
        <div className="footer2-center">
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope />
              <p>Email: chidex@gmail.com</p>
            </div>
            <div className="contact-item">
              <FaPhoneAlt />
              <p>Phone: +2348184927601</p>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt />
              <p>Number 1 Umuguma Road<br /> New Owerri, Owerri West L.G.A., Imo State</p>
            </div>
            <div className="contact-item">
              <FaEnvelope />
              <p>Business Hours: 7 am-5 pm, Mon-Sat</p>
            </div>
          </div>
        </div>
        <div className="footer2-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/products">LPG Gas Products</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/order-gas">Order Gas</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/safety-tips">Safety Tips</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/signup">Signup</a></li>
          </ul>
        </div>
      </div>
      <p className="footer2-copy">&copy; 2025 | Chidest Oil and Gas Plant | All Rights Reserved</p>
    </footer>
  );
};

export default Footer2;
