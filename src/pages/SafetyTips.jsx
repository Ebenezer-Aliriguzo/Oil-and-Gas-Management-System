import React from 'react';
import './SafetyTips.css';
import safetyTipImage from '../assets/LPG-SAFETY-TIP1.jpg';

const safetyTips = [
  {
    id: 1,
    title: "Regularly Check for Gas Leaks",
    description: "Ensure that you regularly check for gas leaks in your LPG cylinders and connections. Use soapy water to detect any leaks and fix them immediately.",
    image: safetyTipImage,
  },
  {
    id: 2,
    title: "Proper Storage of LPG Cylinders",
    description: "Store LPG cylinders in an upright position in a well-ventilated area. Keep them away from direct sunlight, heat sources, and flammable materials.",
    image: safetyTipImage,
  },
  {
    id: 3,
    title: "Use Approved Gas Appliances",
    description: "Always use gas appliances that are approved for your specific type of LPG. Ensure they are installed and maintained by qualified professionals.",
    image: safetyTipImage,
  },
  {
    id: 4,
    title: "Turn Off Gas Supply When Not in Use",
    description: "Always turn off the gas supply when the gas appliance is not in use. This helps prevent accidental leaks and potential hazards.",
    image: safetyTipImage,
  },
  {
    id: 5,
    title: "Educate Your Family on Gas Safety",
    description: "Ensure that all members of your household are aware of gas safety practices. Educate them on how to detect leaks and what to do in case of an emergency.",
    image: safetyTipImage,
  },
  {
    id: 6,
    title: "Install Gas Detectors",
    description: "Install gas detectors in your home to alert you in case of a gas leak. These detectors can help prevent accidents and ensure your safety.",
    image: safetyTipImage,
  },
  {
    id: 7,
    title: "Keep Emergency Numbers Handy",
    description: "Keep emergency contact numbers for your gas supplier and local fire department handy. In case of a gas leak or fire, you can quickly reach out for help.",
    image: safetyTipImage,
  },
  {
    id: 8,
    title: "Regular Maintenance of Gas Equipment",
    description: "Schedule regular maintenance checks for your gas equipment. This ensures that your appliances are in good working condition and reduces the risk of leaks.",
    image: safetyTipImage,
  },
];

const SafetyTips = () => {
  return (
    <div className="safety-tips-container">
      <h1 className="safety-tips-title">Safety Tips</h1>
      <div className="safety-tips-list">
        {safetyTips.map((tip) => (
          <div key={tip.id} className="safety-tip-card">
            <img src={tip.image} alt={tip.title} className="safety-tip-image" />
            <h2 className="safety-tip-title">{tip.title}</h2>
            <p className="safety-tip-description">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SafetyTips;