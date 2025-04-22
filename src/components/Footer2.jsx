import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { FaFacebookF, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import logo from '../assets/chidestlogo1.png';
import './Footer2.css';

const Footer2 = () => {
  const navigate = useNavigate();

  const handleNavigate = (path, scrollToId) => {
    navigate(path);

    if (scrollToId && typeof scrollToId === 'string') {
      // Scroll to specific section after short delay to allow page load
      setTimeout(() => {
        const target = document.getElementById(scrollToId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } else {
      // Scroll to top of the page
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 300);
    }
  };

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'LPG Gas Products', path: '/products' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Order Gas', path: '/order-gas', scrollTo: 'orderGasForm' },
    { label: 'Services', path: '/services' },
    { label: 'Safety Tips', path: '/safety-tips' },
    { label: 'FAQs', path: '/faqs' },
    { label: 'Login', path: '/login', scrollTo: 'loginForm' },
    { label: 'Signup', path: '/signup', scrollTo: 'signupForm' },
  ];

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
              <p>Phone: +2348033489206</p>
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
            {quickLinks.map((link, index) => (
              <li key={index}>
                <button
                  className="footer2-link-button"
                  onClick={() => handleNavigate(link.path, link.scrollTo)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="footer2-copy">&copy; 2025 | Chidest Oil and Gas Plant | All Rights Reserved</p>
    </footer>
  );
};

export default Footer2;
