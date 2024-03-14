import React from "react";
import Header from "../components/Header";
import HomeMainSection from "../components/HomeMainSection";
import Services from "../components/Services";
import "./Home.css";
import AboutHome from "../components/AboutHome";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import Testimonials from "../components/Testimonials";
import FaqHome from "../components/FaqHome";
import HomeContact from "../components/HomeContact";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <>
      <div className="front-page">
        <Header />
        <div className="front-page-main">
          <HomeMainSection />
        </div>
      </div>
      <div className="services-page">
        <Services />
      </div>
      <div className="aboutHome-page">
        <AboutHome />
      </div>
      <div className="categories-page">
        <Categories />
      </div>
      <div className="featured-products-page">
        <FeaturedProducts />
      </div>
      <div className="testimonials-page">
        <Testimonials />
      </div>
      <div className="faqHome-page">
        <FaqHome/>
      </div>
      <div className="aboutHome-page">
        <div className="contact-assist-container">
          <ContactForm/>
          <HomeContact/>
        </div>
        
      </div>
      <div className="homeFooter-page">
        <Footer/>
      </div>
      <div className="footer-end-bar">
        <p className="footer-end-info">
          Copyright ©2024 Getmeds Philippines Incorporated. All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Home;
