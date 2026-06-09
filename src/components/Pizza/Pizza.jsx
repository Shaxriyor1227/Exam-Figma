import React from 'react';
import './Pizza.css';

// Assets import
import pizzaImage from '../../assets/pizza.png';
import pizzaImage2 from '../../assets/pizza2.png';
import Read from '../Read/Read';

const Pizza = () => {
  return (
    <article className="pizza-article">
      <div className="pizza-container">
        {/* Header */}
        <header className="article-header">
          <h1 className="article-title">
            The secret tips & tricks to prepare a perfect burger & pizza for our customers
          </h1>
        </header>

        {/* Main Image */}
        <div className="article-main-image">
          <img 
            src={pizzaImage} 
            alt="Delicious pasta dish with garnish" 
            className="main-image"
          />
        </div>

        {/* First Content Section */}
        <section className="content-section">
          <h2 className="section-heading">What do you need to prepare a home-made burger?</h2>
          
          <div className="intro-text">
            <p>
              Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, well-informed home chefs and food lovers are looking not just for recipes but for mastering the refined staples of the culinary world.
            </p>
          </div>

          <div className="tips-list">
            <div className="tip-item">
              <span className="tip-number">1.</span>
              <div className="tip-content">
                <strong>Quality First:</strong> The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.
              </div>
            </div>

            <div className="tip-item">
              <span className="tip-number">2.</span>
              <div className="tip-content">
                <strong>Seasoning Simplicity:</strong> A key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overwhelming them.
              </div>
            </div>

            <div className="tip-item">
              <span className="tip-number">3.</span>
              <div className="tip-content">
                <strong>Don't Overwork the Meat:</strong> When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers.
              </div>
            </div>

            <div className="tip-item">
              <span className="tip-number">4.</span>
              <div className="tip-content">
                <strong>Creating the Right Heat:</strong> Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.
              </div>
            </div>

            <div className="tip-item">
              <span className="tip-number">5.</span>
              <div className="tip-content">
                <strong>Resting:</strong> Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.
              </div>
            </div>
          </div>
        </section>

        {/* Second Content Section */}
        <section className="content-section">
          <h2 className="section-heading">What are the right ingredients to make it delicious?</h2>
          
          <div className="intro-text">
            <p>
              Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, well-informed home chefs and food lovers are looking not just for recipes but for mastering the refined staples of the culinary world.
            </p>
          </div>

          <div className="tips-list">
            <div className="tip-item">
              <span className="tip-number">1.</span>
              <div className="tip-content">
                <strong>Quality First:</strong> The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.
              </div>
            </div>

            <div className="tip-item">
              <span className="tip-number">2.</span>
              <div className="tip-content">
                <strong>Seasoning Simplicity:</strong> A key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overwhelming them.
              </div>
            </div>

            <div className="tip-item">
              <span className="tip-number">3.</span>
              <div className="tip-content">
                <strong>Don't Overwork the Meat:</strong> When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers.
              </div>
            </div>

            <div className="tip-item">
              <span className="tip-number">4.</span>
              <div className="tip-content">
                <strong>Creating the Right Heat:</strong> Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.
              </div>
            </div>

            <div className="tip-item">
              <span className="tip-number">5.</span>
              <div className="tip-content">
                <strong>Resting:</strong> Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.
              </div>
            </div>
          </div>
        </section>

        {/* Second Image */}
        <div className="article-secondary-image">
          <img 
            src={pizzaImage2} 
            alt="Delicious fries and burger" 
            className="secondary-image"
          />
        </div>

        {/* Third Content Section */}
        <section className="content-section">
          <h2 className="section-heading">What are the right ingredients to make it delicious?</h2>
          
          <div className="intro-text">
            <p>
              Proin facilisis urna imperdiet, tincidunt est sed, tincidunt nisi. Integer euismod, massa nec tempor nisi, quis tincidunt nisl. Curabitur in ligula gravida, consectetur velit. Morbi elementum, orci eu tempor sapien, nec ultricies nunc. Curabitur in ligula gravida, consectetur velit. Morbi elementum, orci eu tempor sapien, nec ultricies nunc. Curabitur in ligula gravida, consectetur velit. Morbi elementum, orci eu tempor sapien, nec ultricies nunc.
            </p>
          </div>
        </section>
        <Read />
      </div>
    </article>
  );
};

export default Pizza;