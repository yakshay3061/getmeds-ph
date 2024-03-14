import React from "react";
import './Categories.css'
import capsuleImage from '../assets/images/VectorCapsule.png';

const Categories = () => {
  return (  
    <div className="categories-container">
      <p className="categories-heading">
        Medication for Various <br/> Medical Conditions
      </p>
      <p className="categories-desc">
        Our extensive range of medications caters to a variety of medical
        conditions, all available at the most competitive prices in the market.
        Additionally, we offer a convenient refill service, ensuring that
        managing your health is as easy and affordable as possible.
      </p>
        

<div className="categories-cards">

      <svg className="left-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="28" viewBox="0 0 16 28" fill="none">
  <path  d="M0.809083 15.9381C0.291001 15.4194 0 14.7163 0 13.9831C0 13.25 0.291001 12.5468 0.809083 12.0281L11.2408 1.59274C11.7598 1.074 12.4636 0.782664 13.1974 0.782837C13.5607 0.782923 13.9205 0.854572 14.2561 0.993694C14.5917 1.13282 14.8967 1.33669 15.1536 1.59367C15.4104 1.85064 15.6141 2.1557 15.7531 2.49141C15.8921 2.82712 15.9636 3.18692 15.9635 3.55026C15.9634 3.9136 15.8917 4.27336 15.7526 4.609C15.6135 4.94465 15.4096 5.24961 15.1526 5.50647L6.67782 13.9831L15.1545 22.4598C15.4188 22.7149 15.6297 23.02 15.7749 23.3575C15.92 23.695 15.9965 24.0579 15.9999 24.4253C16.0032 24.7926 15.9334 25.1569 15.7945 25.497C15.6555 25.8371 15.4503 26.1461 15.1906 26.4059C14.931 26.6658 14.6222 26.8714 14.2823 27.0106C13.9423 27.1499 13.5781 27.2201 13.2107 27.2171C12.8434 27.214 12.4803 27.1379 12.1427 26.9931C11.8052 26.8482 11.4998 26.6376 11.2444 26.3735L0.805394 15.9381H0.809083Z" fill="black"/>
</svg>
        <div className="categories-card-item">
            <img src={capsuleImage} alt="cap-img" />
            <p className="categories-card-title">Blood Pressure</p>
            <p className="categories-see-more">see medicines</p>
        </div>
        <div className="categories-card-item">
            <img src={capsuleImage} alt="cap-img" />
            <p className="categories-card-title">Blood Pressure</p>
            <p className="categories-see-more">see medicines</p>
        </div>
        <div className="categories-card-item">
            <img src={capsuleImage} alt="cap-img" />
            <p className="categories-card-title">Blood Pressure</p>
            <p className="categories-see-more">see medicines</p>
        </div>
        <svg className="right-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="28" viewBox="0 0 16 28" fill="none">
  <path  d="M15.1891 12.0233C15.7083 12.5433 16 13.248 16 13.9828C16 14.7177 15.7083 15.4224 15.1891 15.9423L4.73352 26.4016C4.21334 26.9215 3.50792 27.2135 2.77245 27.2133C2.03697 27.2132 1.3317 26.9208 0.811761 26.4007C0.291826 25.8805 -0.000173261 25.1751 7.71288e-08 24.4396C0.000173415 23.7041 0.292505 22.9988 0.812685 22.4789L9.30874 13.9828L0.812685 5.48678C0.307333 4.96405 0.0275092 4.26375 0.0334818 3.53671C0.0394545 2.80967 0.330745 2.11406 0.844617 1.5997C1.35849 1.08534 2.05382 0.793396 2.78086 0.786738C3.5079 0.780079 4.20846 1.05924 4.73167 1.5641L15.1909 12.0215L15.1891 12.0233Z" fill="black"/>
</svg>
      </div>



      
      
      <div className="categories-btn">
        <button>View all Medicines</button> 
      </div>
    </div>
  );
};

export default Categories;
