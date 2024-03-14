import React from "react";
import "./Header.css";
import getmedsLogo from "../assets/images/getmedslogo.png";
import searchVector from '../assets/images/searchVector.png';

const Header = () => {
  return (
    <div className="header-container">
      <nav className="navbar">
        <img className="header-logo" src={getmedsLogo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Services</li>
          <li>Countries</li>
        </ul>
        <img className="search-vector" src= {searchVector} alt="vector-logo" />
      </nav>
    </div>
  );
};

export default Header;
