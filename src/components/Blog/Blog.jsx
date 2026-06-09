import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';

// Blog images import
import blog1 from '../../assets/blog1.png';
import blog2 from '../../assets/blog2.png';
import blog3 from '../../assets/blog3.png';
import blog4 from '../../assets/blog4.png';
import blog5 from '../../assets/blog5.png';
import blog6 from '../../assets/blog6.png';
import blog7 from '../../assets/blog7.png';
import blog8 from '../../assets/blog8.png';
import blog9 from '../../assets/blog9.png';
import blog10 from '../../assets/blog10.png';
import blog11 from '../../assets/blog11.png';
import blog12 from '../../assets/blog12.png';

const Blog = () => {
  const blogPosts = [
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
    },
    {
      id: 5,
      image: blog5,
      date: 'January 3, 2023',
      title: '5 great cooking gadgets you can buy to save time'
    },
    {
      id: 6,
      image: blog6,
      date: 'January 3, 2023',
      title: 'The secret tips & tricks to prepare a perfect burger'
    },
    {
      id: 7,
      image: blog7,
      date: 'January 3, 2023',
      title: '7 delicious cheesecake recipes you can prepare'
    },
    {
      id: 8,
      image: blog8,
      date: 'January 3, 2023',
      title: '5 great pizza restaurants you should visit this city'
    },
    {
      id: 9,
      image: blog9,
      date: 'January 3, 2023',
      title: '5 great cooking gadgets you can buy to save time'
    },
    {
      id: 10,
      image: blog10,
      date: 'January 3, 2023',
      title: 'How to prepare a delicious gluten free sushi'
    },
    {
      id: 11,
      image: blog11,
      date: 'January 3, 2023',
      title: 'Top 20 simple and quick desserts for kids'
    },
    {
      id: 12,
      image: blog12,
      date: 'January 3, 2023',
      title: 'Top 20 simple and quick desserts for kids'
    }
  ];

  return (
    <section className="blog-section">
      <div className="blog-container">
        {/* Header */}
        <div className="blog-header">
          <h2 className="blog-title">Our Blog & Articles</h2>
          <p className="blog-subtitle">
            We consider all the drivers of change gives you the components you need<br />
            to change to create a truly happens.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image-wrapper">
                <Link to="/pizza">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="blog-image"
                  />
                </Link>
              </div>
              <div className="blog-content">
                <time className="blog-date">{post.date}</time>
                <h3 className="blog-post-title">{post.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;