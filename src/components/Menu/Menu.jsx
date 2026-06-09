import React, { useState } from 'react';
import './Menu.css';

// Product images import
import menu1 from '../../assets/menu1.png';
import menu2 from '../../assets/menu2.png';
import menu3 from '../../assets/menu3.png';
import menu4 from '../../assets/menu4.png';
import menu5 from '../../assets/menu5.png';
import menu6 from '../../assets/menu6.png';
import menu7 from '../../assets/menu7.png';
import menu8 from '../../assets/menu8.png';

// Delivery app logos import
import logo1 from '../../assets/1.png';
import logo2 from '../../assets/2.png';
import logo3 from '../../assets/3.png';
import logo4 from '../../assets/4.png';
import logo5 from '../../assets/5.png';
import logo6 from '../../assets/6.png';
import logo7 from '../../assets/7.png';
import logo8 from '../../assets/8.png';
import logo9 from '../../assets/9.png';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Breakfast', 'Main Dishes', 'Drinks', 'Desserts'];

  const menuItems = [
    {
      id: 1,
      image: menu1,
      price: 9.99,
      title: 'Fried Eggs',
      description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
      category: 'Breakfast'
    },
    {
      id: 2,
      image: menu2,
      price: 15.99,
      title: 'Hawaiian Pizza',
      description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
      category: 'Main Dishes'
    },
    {
      id: 3,
      image: menu3,
      price: 7.25,
      title: 'Martinez Cocktail',
      description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
      category: 'Drinks'
    },
    {
      id: 4,
      image: menu4,
      price: 20.99,
      title: 'Butterscotch Cake',
      description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
      category: 'Desserts'
    },
    {
      id: 5,
      image: menu5,
      price: 5.89,
      title: 'Mint Lemonade',
      description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
      category: 'Drinks'
    },
    {
      id: 6,
      image: menu6,
      price: 18.05,
      title: 'Chocolate Icecream',
      description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
      category: 'Desserts'
    },
    {
      id: 7,
      image: menu7,
      price: 12.55,
      title: 'Cheese Burger',
      description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
      category: 'Main Dishes'
    },
    {
      id: 8,
      image: menu8,
      price: 12.99,
      title: 'Classic Waffles',
      description: 'Made with eggs, lettuce, salt, oil and other ingredients.',
      category: 'Breakfast'
    }
  ];

  const deliveryApps = [
    { id: 1, logo: logo1, name: 'Uber Eats' },
    { id: 2, logo: logo2, name: 'GRUBHUB' },
    { id: 3, logo: logo3, name: 'Postmates' },
    { id: 4, logo: logo4, name: 'DOORDASH' },
    { id: 5, logo: logo5, name: 'foodpanda' },
    { id: 6, logo: logo6, name: 'deliveroo' },
    { id: 7, logo: logo7, name: 'instacart' },
    { id: 8, logo: logo8, name: 'JUST EAT' },
    { id: 9, logo: logo9, name: 'DiDi Food' }
  ];

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <section className="menu-section">
      <div className="menu-container">
        {/* Header */}
        <div className="menu-header">
          <h2 className="menu-title">Our Menu</h2>
          <p className="menu-subtitle">
            We consider all the drivers of change gives you the components<br />
            you need to change to create a truly happens.
          </p>
        </div>

        {/* Category Filters */}
        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="menu-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="menu-card">
              <div className="menu-image-wrapper">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="menu-image"
                />
              </div>
              <div className="menu-content">
                <div className="menu-price">${item.price.toFixed(2)}</div>
                <h3 className="menu-item-title">{item.title}</h3>
                <p className="menu-item-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Delivery Apps Section */}
        <div className="delivery-section">
          <div className="delivery-content">
            <h3 className="delivery-title">You can order through apps</h3>
            <p className="delivery-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          
          <div className="delivery-apps-grid">
            {deliveryApps.map((app) => (
              <div key={app.id} className="delivery-app-card">
                <img 
                  src={app.logo} 
                  alt={app.name} 
                  className="delivery-app-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;