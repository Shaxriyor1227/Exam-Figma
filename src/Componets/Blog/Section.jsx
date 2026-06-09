import React from 'react'
import './Section.css'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img50 from '../../assets/img50.jpg'
import img51 from '../../assets/img51.jpg'
import img55 from '../../assets/img55.jpg'

const images = [img1, img2, img3, img50, img51, img55]

const blogData = [
  { id: 1, date: 'January 3, 2023', title: 'How to prepare a delicious gluten free sushi' },
  { id: 2, date: 'January 3, 2023', title: 'Exclusive baking lessons from the pastry king' },
  { id: 3, date: 'January 3, 2023', title: 'How to prepare the perfect fries in an air fryer' },
  { id: 4, date: 'January 3, 2023', title: 'How to prepare delicious chicken tenders' },
  { id: 5, date: 'January 3, 2023', title: '5 smart cooking gadgets you can buy to save time' },
  { id: 6, date: 'January 3, 2023', title: 'The secret tips & tricks to prepare a perfect burger' },
  { id: 7, date: 'January 3, 2023', title: '7 delicious cheesecake recipes you can prepare' },
  { id: 8, date: 'January 3, 2023', title: '10 great restaurants you should visit this city' },
  { id: 9, date: 'January 3, 2023', title: '5 great cooking gadgets you can buy to save time' },
  { id: 10, date: 'January 3, 2023', title: 'How to prepare a delicious gluten free sushi' },
  { id: 11, date: 'January 3, 2023', title: 'Top 20 simple and quick desserts for kids' },
  { id: 12, date: 'January 3, 2023', title: 'Top 20 simple and quick desserts for kids' },
  { id: 13, date: 'January 3, 2023', title: 'How to make healthy breakfast bowls' },
  { id: 14, date: 'January 3, 2023', title: 'Best summer salad ideas for every day' },
  { id: 15, date: 'January 3, 2023', title: 'Easy one-pan dinner recipes for busy nights' },
  { id: 16, date: 'January 3, 2023', title: 'Simple cake decorating tips for beginners' },
].map((post, i) => ({ ...post, img: images[i % images.length] }))

const Section = () => {
  return (
    <div>
      <section>
        <div className="BlogContainer">
          <div className="Blog-Article">
            <h1>Our Blog & Articles</h1>
            <p>
              We consider all the drivers of change gives you the components you need <br />
              to change to create a truly happens.
            </p>
          </div>

          <div className="Blog-card">
            {blogData.map((post) => (
              <div className="Blog-card__item" key={post.id}>
                <div className="Blog-card__image">
                  <img src={post.img} alt={post.title} />
                </div>
                <div className="Blog-card__body">
                  <span className="Blog-card__date">{post.date}</span>
                  <h3 className="Blog-card__title">{post.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Section