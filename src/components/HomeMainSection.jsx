import React from "react";
import "../components/HomeMainSection.css";
import vector from  '../assets/images/Vector.png'

const HomeMainSection = () => {
  return (
    <div className="content-container">
      <p className="main-heading">
        GENUINE MEDICINES <br /> LOWEST PRICES
      </p>
      <p className="sub-heading">
        Say goodbye to your health worries by choosing us. Getmeds <br />{" "}
        healthcare can be your best partner for all your medical <br /> needs.
        We are your reliable companion for all healthcare <br/> solutions.
      </p>

      <div className="small-sub-heading">
        <img src= {vector} alt="vector-icon" />
        <p>Served more than 68000 customers</p>
      </div>

      <div className="btn-container">
        <button className = 'btn'>Contact Now</button>
        <button className = 'btn'>Check Our Products</button>
      </div>
    </div>
  );
};

export default HomeMainSection;
