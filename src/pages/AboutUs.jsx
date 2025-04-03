import React from 'react';
import './AboutUs.css';
import staffs from '../assets/staffs.jpg';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Us</h1>
      <img src={staffs} alt="Our Staff" className="about-us-image" />
      <div className="about-us-section">
        <h2 className="section-title">THE BEGINNING</h2>
        <p className="section-date">Early 2024</p>
        <p className="section-description">
          Company founded as Chidest Oil and Gas in early 2024, a Special Purpose Vehicle (SPV), by founding companies: Asiko Gas, Linetrale Oil, and Bronwen Energy. The company’s raison d'etre was to establish itself as the leading independent LPG supply, logistics, and distribution company in Nigeria.
        </p>
      </div>
      <div className="about-us-section">
        <h2 className="section-title">PIONEER OFF TAKER OF LPG</h2>
        <p className="section-date">March 2024</p>
        <p className="section-description">
          March 2024 we were shortlisted by the largest LPG producer in Africa, Nigeria LNG, as an offtake partner under their domestic LPG scheme.
        </p>
      </div>
      <div className="about-us-section">
        <h2 className="section-title">THE ORIGINAL PLAN</h2>
        <p className="section-date">Late 2024</p>
        <p className="section-description">
          In late 2024 the company commenced the multimillion dollar front end engineering design (FEED) for a 30,000MT receiving terminal to be sited in the Apapa Port of Lagos. The development attains Department of Petroleum Approval and World Bank environmental and social impact clearance.
        </p>
      </div>
      <div className="about-us-section">
        <h2 className="section-title">INTRODUCTION TO THE MARKET</h2>
        <p className="section-date">November 2024</p>
        <p className="section-description">
          27th of November 2024 the company commences trading LPG during a period of tight supply to the whole country. Our introduction into the market relieved a bottleneck in supply, which had to that point driven LPG prices sky high. As a consequence national LPG had declined to 60,000MT. Within months of commencement of operations the company, along with 5 other pioneer offtakers, had managed to reduce retail LPG prices nationally by 50%.
        </p>
      </div>
      <div className="about-us-section">
        <h2 className="section-title">REALISING PLAN</h2>
        <p className="section-date">November 2024</p>
        <p className="section-description">
          Company acquires land in Ijora for the Lagos depot to develop with the intention of developing this into its central distribution hub for South West. October 2026, We acquired the Kano gas depot from a Kano family marking the commencement of our distribution business. We started our first retail / commercial operations selling to end users, distributors and a major national insecticide manufacturing company. We conclude investment discussions with Africa Capital Alliance, Nigeria’s largest Private Equity company, resulting in the injection of US$3.2 million in equity in the company by the CAPE II fund.
        </p>
      </div>
      <div className="about-us-section">
        <h2 className="section-title">INTRODUCTION TO THE MARKET</h2>
        <p className="section-date">End 2024</p>
        <p className="section-description">
          By the end of 2024 the deepening global financial crisis derails the final investment decision (FID) for the planned 30,000MT coastal terminal bringing about a period of contraction for the company. Fortunately though, the company had managed to place a large order for equipment just prior to the onset. This equipment was to sustain the company through a number of challenging years that followed.
        </p>
      </div>
      <div className="about-us-section">
        <h2 className="section-title">PERSEVERANCE IN CHALLENGING PERIOD</h2>
        <p className="section-date">December 2024</p>
        <p className="section-description">
          The company leases the Abuja gas depot from a local family, in keeping with our tradition of working with local communities and expertise. In the midst of some very challenging times the company re-strategizes to focus on its distribution depots and proceeds to upgrade the Kano and Abuja facilities with equipment procured for the abandoned terminal.
        </p>
      </div>
      <div className="about-us-section">
        <h2 className="section-title">GETTING BACK ON TRACK</h2>
        <p className="section-date">January 2025</p>
        <p className="section-description">
          The Company secures additional funding through ACA from the CAPE II fund bringing ACA’s total investment to US$7.5 million.
        </p>
      </div>
      <div className="about-us-section">
        <h2 className="section-title">GETTING BACK ON TRACK</h2>
        <p className="section-date">February 2025</p>
        <p className="section-description">
          A rudimentary gas operation is established at the Ijora site to service Guinness as its sole customer. Our Lite Gas® Brand is established and our first corporate branded cylinders (size 6.25kg) are fabricated and delivered.
        </p>
      </div>
      <div className="about-us-section">
        <h2 className="section-title">GETTING BACK ON TRACK</h2>
        <p className="section-date">Ending February 2025</p>
        <p className="section-description">
          The Company changes name from Linetrale Gas Limited to Gas Terminalling Global Operations Limited.
        </p>
      </div>
      <div className="about-us-section">
        <h2 className="section-title">RESTRUCTURE</h2>
        <p className="section-date">March 2025</p>
        <p className="section-description">
          Further to the approach of one of the World’s largest physical commodity traders the Company undergoes financial and management restructuring thereby commencing a new growth chapter. A controlling interest is acquired by Asiko Energy Holdings Limited (AEHL) under a group structure with the injection of new equity and via a rights issue.
        </p>
      </div>
      <div className="about-us-section">
        <h2 className="section-title">IMPLEMENTING THE VISION</h2>
        <p className="section-date">March 2025</p>
        <p className="section-description">
          Gas Terminalling becomes the General Distributor for Bosch for their instantaneous hot water heaters. The company also secures a partnership relationship with Bosch for marketing their industrial boilers (hot water and steam).
        </p>
      </div>
      <div className="about-us-section">
        <h2 className="section-title">IMPLEMENTING THE VISION</h2>
        <p className="section-date">March 2025</p>
        <p className="section-description">
          The company transitions its fleet from second-hand vehicles to a brand new fleet of LPG tankers that are 40% higher capacity than competing fleets. This introduces better economies of scale in transportation.
        </p>
      </div>
      <div className="about-us-section">
        <h2 className="section-title">IMPLEMENTING THE VISION</h2>
        <p className="section-date">March 2025</p>
        <p className="section-description">
          The rollout of our Mini Gas Outlets taking LPG sales through our Lite Gas® brand to the last mile with the end user.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;