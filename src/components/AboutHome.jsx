import React from "react";
import "./AboutHome.css";
import aboutImage from "../assets/images/aboutImage.png";
import union from "../assets/images/Union.png";

const AboutHome = () => {
  return ( 
    <div className="aboutHome-container">
      <img src={aboutImage} alt="about-image" />
      <div className="about-home-right">
        {/* <img src= {union} alt="union-image" /> */}
        <p className="about-home-firstline">who we are</p>
        <p className="about-home-heading">We Are Your Trusted Pharmaceutical Partner</p>
        <p className="about-home-desc">
          Getmeds Healthcare stands at the forefront as a premier exporter of
          anti-cancer medicines in India, specializing in a broad spectrum of
          medicinal products that encompass life-saving and critical care drugs
          distributed worldwide. Our highest commitment lies in upholding
          unparalleled quality standards and delivering authenticated products,
          ensuring that our customers receive the utmost in care and
          reliability.
        </p>
        <button>More About us</button>
      </div>
    </div>
  );
};

export default AboutHome;
