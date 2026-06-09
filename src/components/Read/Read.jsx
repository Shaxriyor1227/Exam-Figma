import React from 'react';
import './Read.css';

// Blog images import
import blog1 from '../../assets/blog1.png';
import blog2 from '../../assets/blog2.png';
import blog3 from '../../assets/blog3.png';
import blog4 from '../../assets/blog4.png';

const Read = () => {
  const articles = [
    {
      id: 1,
      image: blog1,
      date: 'January 3, 2023',
      title: 'How to prepare a delicious gluten free sushi'
    },
    {
      id: 2,
      image: blog2,
      date: 'January 3, 2023',
      title: 'Exclusive baking lessons from the pastry king'
    },
    {
      id: 3,
      image: blog3,
      date: 'January 3, 2023',
      title: 'How to prepare the perfect fries in an air fryer'
    },
    {
      id: 4,
      image: blog4,
      date: 'January 3, 2023',
      title: 'How to prepare delicious chicken tenders'
    }
  ];

  return (
    <section className="read-section">
      <div className="read-container">
        {/* Header */}
        <div className="read-header">
          <h2 className="read-title">Read More Articles</h2>
          <p className="read-subtitle">
            We consider all the drivers of change gives you the components you need<br />
            to change to create a truly happens.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="articles-grid">
          {articles.map((article) => (
            <article key={article.id} className="article-card">
              <div className="article-image-wrapper">
                <img
                  src={article.image}
                  alt={article.title}
                  className="article-image"
                />
              </div>
              <div className="article-content">
                <time className="article-date">{article.date}</time>
                <h3 className="article-card-title">{article.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    
    </section>

   
  );
};

export default Read;