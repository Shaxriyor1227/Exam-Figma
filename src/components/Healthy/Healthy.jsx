import React from 'react';
import './Healthy.css';

// Assets import
import healthyImage from '../../assets/healthy.png';

const Healthy = () => {
  const contactInfo = {
    phone: '(414) 857 - 0107',
    email: 'happytummy@restaurant.com',
    address: '837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles'
  };

  const handleMoreAboutClick = () => {
    console.log('Navigating to About Us page...');
    // Bu yerga navigation qo'shishingiz mumkin
  };

  return (
    <section className="healthy-section">
      <div className="healthy-container">
        {/* Left Side - Image & Contact Card */}
        <div className="healthy-left">
          <div className="image-wrapper">
            <img 
              src={healthyImage} 
              alt="Healthy food" 
              className="healthy-image"
            />
          </div>
          
          <div className="contact-card">
            <h3 className="contact-title" style={{fontSize:"22px", color:"white", fontFamily:"sans-serif"}}>Come and visit us</h3>
            
            <div className="contact-item">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l1.41-1.41a2 2 0 0 1 2.11-.45c.85.28 1.66.43 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <span className="contact-text">{contactInfo.phone}</span>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <span className="contact-text">{contactInfo.email}</span>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <span className="contact-text">{contactInfo.address}</span>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="healthy-right">
          <h2 className="healthy-title">
            We provide healthy food for your family.
          </h2>
          
          <p className="healthy-description">
            Our story began with a vision to create a unique dining experience that merges fine dining, 
            exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim 
            to honor our local roots while infusing a global palate.
          </p>
          
          <p className="healthy-description">
            At place, we believe that dining is not just about food, but also about the overall experience. 
            Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
          </p>

          <button 
            className="more-about-btn"
            onClick={handleMoreAboutClick}
          >
            More About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Healthy;