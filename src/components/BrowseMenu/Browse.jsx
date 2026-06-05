import React from 'react';
import './Browse.css';

// Assets import
import breakfastIcon from '../../assets/i1.png';
import mainDishesIcon from '../../assets/i2.png';
import drinksIcon from '../../assets/i3.png';
import dessertsIcon from '../../assets/i4.png';

const Browse = () => {
  const menuCategories = [
    {
      id: 1,
      title: 'Breakfast',
      icon: breakfastIcon,
      description: 'In the new era of technology we look in the future with certainty and pride for our life.'
    },
    {
      id: 2,
      title: 'Main Dishes',
      icon: mainDishesIcon,
      description: 'In the new era of technology we look in the future with certainty and pride for our life.'
    },
    {
      id: 3,
      title: 'Drinks',
      icon: drinksIcon,
      description: 'In the new era of technology we look in the future with certainty and pride for our life.'
    },
    {
      id: 4,
      title: 'Desserts',
      icon: dessertsIcon,
      description: 'In the new era of technology we look in the future with certainty and pride for our life.'
    }
  ];

  const handleExploreClick = (category) => {
    console.log(`Exploring ${category} menu...`);
    // Bu yerga navigation yoki boshqa funksiyalar qo'shishingiz mumkin
  };

  return (
    <section className="browse-section">
      <div className="browse-container">
        <h2 className="browse-title">Browse Our Menu</h2>
        
        <div className="menu-grid">
          {menuCategories.map((category) => (
            <div key={category.id} className="menu-card">
              <div className="icon-wrapper">
                <img 
                  src={category.icon} 
                  alt={category.title} 
                  className="menu-icon"
                />
              </div>
              
              <h3 className="menu-card-title">{category.title}</h3>
              
              <p className="menu-card-description">
                {category.description}
              </p>
              
              <button 
                className="explore-btn"
                onClick={() => handleExploreClick(category.title)}
              >
                Explore Menu
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Browse;