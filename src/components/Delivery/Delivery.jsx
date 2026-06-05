import React from 'react';
import './Delivery.css';

// Assets import
import chefImage from '../../assets/delivery1.png';
import panImage from '../../assets/delivery2.png';
import kebabImage from '../../assets/delivery3.png';

// React Icons import
import { FiClock, FiTag, FiShoppingCart } from 'react-icons/fi';

const Delivery = () => {
  const features = [
    {
      id: 1,
      icon: FiClock,
      title: 'Delivery within 30 minutes'
    },
    {
      id: 2,
      icon: FiTag,
      title: 'Best Offer & Prices'
    },
    {
      id: 3,
      icon: FiShoppingCart,
      title: 'Online Services Available'
    }
  ];

  return (
    <section className="delivery-section">
      <div className="delivery-container">
        {/* Left Side - Images */}
        <div className="delivery-images">
          <div className="image-large">
            <img 
              src={chefImage} 
              alt="Chef cooking" 
              className="delivery-img"
            />
          </div>
          
          <div className="images-small">
            <div className="image-small-top">
              <img 
                src={panImage} 
                alt="Delicious food" 
                className="delivery-img"
              />
            </div>
            <div className="image-small-bottom">
              <img 
                src={kebabImage} 
                alt="Kebab" 
                className="delivery-img"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="delivery-content">
          <h2 className="delivery-title">
            Fastest Food Delivery in City
          </h2>
          
          <p className="delivery-description">
            Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop.
          </p>

          <div className="features-list">
            {features.map((feature) => (
              <div key={feature.id} className="feature-item">
                <div className="feature-icon">
                  <feature.icon />
                </div>
                <span className="feature-text">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;