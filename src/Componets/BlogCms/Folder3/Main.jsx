import React from 'react'
import './Main.css'
import img1 from '../../../assets/img1.jpg'

const posts = [
  {
    id: 1,
    date: 'January 5, 2025',
    title: 'How to prepare a delicious gluten free sushi',
    description: 'A simple way to make restaurant-quality sushi at home using fresh ingredients.',
  },
  {
    id: 2,
    date: 'January 5, 2025',
    title: 'Exclusive baking lessons from the pastry king',
    description: 'Learn the secrets of perfect pastries with step-by-step tips.',
  },
  {
    id: 3,
    date: 'January 5, 2025',
    title: 'How to prepare the perfect fries in an air fryer',
    description: 'Crispy, golden fries without excess oil and without extra effort.',
  },
  {
    id: 4,
    date: 'January 5, 2025',
    title: 'How to prepare delicious chicken tenders',
    description: 'Juicy chicken tenders with a crispy coating your family will love.',
  },
  {
    id: 5,
    date: 'January 5, 2025',
    title: '5 smart cooking gadgets you can buy to save time',
    description: 'The best kitchen tools to help you cook faster with better results.',
  },
  {
    id: 6,
    date: 'January 5, 2025',
    title: 'The secret tips & tricks to prepare a perfect burger',
    description: 'From seasoning to stacking, build a burger that stands out.',
  },
  {
    id: 7,
    date: 'January 5, 2025',
    title: '7 delicious cheesecake recipes you can prepare',
    description: 'Creamy cheesecakes for every occasion, from classic to fruity.',
  },
  {
    id: 8,
    date: 'January 5, 2025',
    title: '10 great restaurants you should visit this city',
    description: 'Top dining spots to help you plan a memorable food outing.',
  },
  {
    id: 9,
    date: 'January 5, 2025',
    title: '5 great cooking gadgets you can buy to save time',
    description: 'Essential equipment for modern kitchens and quick meal prep.',
  },
  {
    id: 10,
    date: 'January 5, 2025',
    title: 'How to prepare a delicious gluten free sushi',
    description: 'A simple way to make restaurant-quality sushi at home using fresh ingredients.',
  },
  {
    id: 11,
    date: 'January 5, 2025',
    title: 'Top 20 simple and quick desserts for kids',
    description: 'Fun and easy dessert ideas children can help make and enjoy.',
  },
  {
    id: 12,
    date: 'January 5, 2025',
    title: 'Top 20 simple and quick desserts for kids',
    description: 'Fun and easy dessert ideas children can help make and enjoy.',
  },
]

const Main = () => {
  return (
    <section id="blog" className="blog-section">
      <div className="blog-heading">
        <p className="blog-subtitle">Our Blog & Articles</p>
        <h2>
          We understand the choices of choosing gives you the components you need to change to create a truly happiness.
        </h2>
      </div>

      <div className="blog-grid">
        {posts.map((post) => (
          <article key={post.id} className="blog-card">
            <div className="blog-image">
              <img src={img1} alt={post.title} />
            </div>
            <div className="blog-body">
              <span className="blog-date">{post.date}</span>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Main