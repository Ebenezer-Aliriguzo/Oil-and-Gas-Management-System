import React from 'react';
import './Footer1.css';
import partner1 from '../assets/partner1.jpg';
import partner2 from '../assets/partner2.jpg';
import partner3 from '../assets/partner3.webp';
import partner4 from '../assets/partner4.webp';
import partner5 from '../assets/partner5.webp';
import partner6 from '../assets/partner6.webp';

const Footer1 = () => {
  return (
    <div className="partners-container">
      <h1>Our Futere Partners</h1>
      <div className="partners-scroll">
        <div className="partners-images">
          <img src={partner1} alt="Partner 1" />
          <img src={partner2} alt="Partner 2" />
          <img src={partner3} alt="Partner 3" />
          <img src={partner4} alt="Partner 4" />
          <img src={partner5} alt="Partner 5" />
          <img src={partner6} alt="Partner 6" />
        </div>
      </div>
    </div>
  );
};

export default Footer1;
