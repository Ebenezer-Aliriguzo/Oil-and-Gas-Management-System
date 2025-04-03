import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <div className="service">
        <h2 className="service-name">LPG Supply and Distribution</h2>
        <p className="service-description">
          At Chidest Oil and Gas, we specialize in the supply and distribution of Liquefied Petroleum Gas (LPG) across Nigeria. Our logistics network ensures timely and efficient delivery to residential, commercial, and industrial customers. We are committed to providing a reliable and safe supply of LPG to meet your energy needs.
        </p>
      </div>
      <div className="service">
        <h2 className="service-name">Gas Cylinder Sales and Refills</h2>
        <p className="service-description">
          We offer a wide range of gas cylinders for sale, including various sizes to suit different needs. Whether you need a cylinder for home cooking, commercial kitchens, or industrial applications, we have you covered. Additionally, we provide convenient refill services to ensure you never run out of gas.
        </p>
      </div>
      <div className="service">
        <h2 className="service-name">LPG Equipment Supply</h2>
        <p className="service-description">
          Chidest Oil and Gas supplies high-quality LPG equipment, including burners, regulators, hoses, and valves. Our equipment is designed to ensure safety and efficiency in gas usage. We cater to both domestic and industrial clients, providing the best solutions for their LPG needs.
        </p>
      </div>
      <div className="service">
        <h2 className="service-name">LPG Storage Solutions</h2>
        <p className="service-description">
          We offer comprehensive LPG storage solutions, including the installation and maintenance of storage tanks. Our storage solutions are tailored to meet the specific requirements of our clients, ensuring safety and compliance with regulatory standards. Trust us to provide secure and efficient storage for your LPG needs.
        </p>
      </div>
      <div className="service">
        <h2 className="service-name">Consultancy Services</h2>
        <p className="service-description">
          Our team of experts provides consultancy services to help you optimize your LPG usage. Whether you need advice on selecting the right equipment, designing an efficient gas distribution system, or ensuring compliance with safety regulations, we are here to assist you. Let us help you achieve the best results with our professional consultancy services.
        </p>
      </div>
      <div className="service">
        <h2 className="service-name">Training and Safety Programs</h2>
        <p className="service-description">
          Safety is our top priority at Chidest Oil and Gas. We offer training and safety programs to educate our customers on the safe handling and usage of LPG. Our programs cover best practices, emergency response procedures, and regulatory compliance. Join our training sessions to ensure the safety of your staff and operations.
        </p>
      </div>
    </div>
  );
};

export default Services;