import React from 'react';
import './Articles.css';

// Assets import
import burgerImage from '../../assets/articles1.png';
import friesImage from '../../assets/articles2.png';
import chickenImage from '../../assets/articles3.png';
import cheesecakeImage from '../../assets/articles4.png';
import pizzaImage from '../../assets/articles5.png';

const Articles = () => {
  const featuredArticle = {
    id: 1,
    image: burgerImage,
    date: 'January 3, 2023',
    title: 'The secret tips & tricks to prepare a perfect burger & pizza for our customers',
    description: 'Lorem ipsum dolor sit amet consectetur of a adipiscing elitminim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.'
  };

  const articles = [
    {
      id: 2,
      image: friesImage,
      date: 'January 3, 2023',
      title: 'How to prepare the perfect french fries in an air fryer'
    },
    {
      id: 3,
      image: chickenImage,
      date: 'January 3, 2023',
      title: 'How to prepare delicious chicken tenders'
    },
    {
      id: 4,
      image: cheesecakeImage,
      date: 'January 3, 2023',
      title: '7 delicious cheesecake recipes you can prepare'
    },
    {
      id: 5,
      image: pizzaImage,
      date: 'January 3, 2023',
      title: '5 great pizza restaurants you should visit this city'
    }
  ];

  const handleReadAllClick = () => {
    console.log('Navigating to all articles...');
    // Navigation logic here
  };

  const handleArticleClick = (article) => {
    console.log(`Clicked on article: ${article.title}`);
    // Article click logic here
  };

  return (
    <section className="articles-section">
      <div className="articles-container">
        {/* Header */}
        <div className="articles-header">
          <h2 className="articles-title">Our Blog & Articles</h2>
          <button className="read-all-btn" onClick={handleReadAllClick}>
            Read All Articles
          </button>
        </div>

        {/* Articles Grid */}
        <div className="articles-grid">
          {/* Featured Article */}
          <div 
            className="article-card featured"
            onClick={() => handleArticleClick(featuredArticle)}
          >
            <div className="article-image-wrapper">
              <img 
                src={featuredArticle.image} 
                alt={featuredArticle.title} 
                className="article-image"
              />
            </div>
            <div className="article-content">
              <span className="article-date">{featuredArticle.date}</span>
              <h3 className="article-title">{featuredArticle.title}</h3>
              <p className="article-description">{featuredArticle.description}</p>
            </div>
          </div>

          {/* Regular Articles */}
          <div className="articles-small-grid">
            {articles.map((article) => (
              <div 
                key={article.id} 
                className="article-card small"
                onClick={() => handleArticleClick(article)}
              >
                <div className="article-image-wrapper">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="article-image"
                  />
                </div>
                <div className="article-content">
                  <span className="article-date">{article.date}</span>
                  <h3 className="article-title">{article.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;