import React from "react";
import "./Services.css";
import servicesLogo from "../assets/images/servicelogo.png";

const Services = () => {
  return (
    <div className="services">
      <div className="services-container">
        <p className="services-heading">Our Services</p>
        <div className="services-card-container">
          <div className="card">
            <img src={servicesLogo} alt="" />
            <p className="card-heading">Contract Manufacturing</p>
            <p className="card-content">
              Contract manufacturing of only the top quality pharmaceutical
              products, that too at the best competitive prices.
            </p>
            <button className="btn">Read More</button>
          </div>
          <div className="card">
            <img src={servicesLogo} alt="" />
            <p className="card-heading">3rd Party Manufacturing</p>
            <p className="card-content">
              Specialized in 3rd Party manufacturing of a wide range of
              pharmaceutical products.
            </p>
            <button className="btn">Read More</button>
          </div>
          <div className="card"> 
            <img src={servicesLogo} alt="" />
            <p className="card-heading">Name Patient Supply</p>
            <p className="card-content">
              We provide unapproved medicines to critically ill patients without
              other treatment options, under regulatory guidelines. This pathway
              offers early access to potentially life-saving therapies outside
              clinical trials.
            </p>
            <button className="btn">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
