import React from 'react'
import './FeaturedProducts.css'
import backwardArrow from '../assets/images/arrowBackward.png';
import forwardArrow from '../assets/images/arrowForward.png';
import medImg1 from '../assets/images/medImg11.png';
import medImg2 from '../assets/images/medImg2.png';
import medImg3 from '../assets/images/medImg3.png';
import medImg4 from '../assets/images/medImg4.png';
import medImg5 from '../assets/images/medImg5.png';


const FeaturedProducts = () => {
  return (
    <div className='featured-products-container'>
        <div className="feature-header">
            <p className="feature-header-left">Featured Products</p>
            <div className="feature-header-right">
                <p className='feature-header-viewall'>View All</p>
                <svg className='feature-header-arrow' xmlns="http://www.w3.org/2000/svg" width="15" height="23" viewBox="0 0 22 23" fill="none">
  <path d="M5.25937 10.125L22 10.125V12.875L5.25937 12.875L12.9594 20.575L11 22.5L0 11.5L11 0.5L12.9594 2.425L5.25937 10.125Z" fill="#1C1B1F" fill-opacity="0.6"/>
</svg>
                {/* <img className='feature-header-arrow' src={backwardArrow} alt="arrow-img" /> */}
                <svg className='feature-header-arrow' xmlns="http://www.w3.org/2000/svg" width="15" height="23" viewBox="0 0 22 23" fill="none">
  <path d="M16.7406 12.875H0V10.125H16.7406L9.04063 2.425L11 0.5L22 11.5L11 22.5L9.04063 20.575L16.7406 12.875Z" fill="#1C1B1F"/>
</svg>           </div>
        </div>
        <div className="featured-products-cards">
            <div className="featured-products-card-item">
                <div className="featured-products-inner-card">
                    <img src={medImg1} alt= 'med-img' />
                </div> 
                <p className='featured-products-name'>Biogesic 500 mg</p>
            </div>
            <div className="featured-products-card-item">
                <div id='img-2' className="featured-products-inner-card">
                    <img src={medImg2} alt= 'med-img' />
                </div>
                <p className='featured-products-name'>Danajoy 200 mg 10's</p>
            </div>
            <div className="featured-products-card-item">
                <div id='img-3' className="featured-products-inner-card">
                    <img src={medImg3} alt= 'med-img' />
                </div>
                <p className='featured-products-name'>ZoloGet 4 mg/ 5 ml</p>
            </div>
            <div  className="featured-products-card-item">
                <div id='img-4' className="featured-products-inner-card">
                    <img src={medImg4} alt= 'med-img' />
                </div>
                <p className='featured-products-name'>AnnaGet 1 mg</p>
            </div>
            <div className="featured-products-card-item">
                <div id='img-5' className="featured-products-inner-card">
                    <img src={medImg5} alt= 'med-img' />
                </div>
                <p className='featured-products-name'>CapeGet 500 mg</p>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProducts