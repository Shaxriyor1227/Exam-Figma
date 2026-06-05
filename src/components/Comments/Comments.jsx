import React from 'react';
import './Comments.css';

// Assets import
import sophireImage from '../../assets/comments1.png';
import mattImage from '../../assets/comments2.png';
import andyImage from '../../assets/comments3.png';

const Comments = () => {
  const testimonials = [
    {
      id: 1,
      title: '"The best restaurant"',
      text: 'Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.',
      image: sophireImage,
      name: 'Sophire Robson',
      location: 'Los Angeles, CA'
    },
    {
      id: 2,
      title: '"Simply delicious"',
      text: 'Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.',
      image: mattImage,
      name: 'Matt Cannon',
      location: 'San Diego, CA'
    },
    {
      id: 3,
      title: '"One of a kind restaurant"',
      text: 'The culinary experience at place is first to none. The atmosphere is vibrant, the food – nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.',
      image: andyImage,
      name: 'Andy Smith',
      location: 'San Francisco, CA'
    }
  ];

  return (
    <section className="comments-section">
      <div className="comments-container">
        <h2 className="comments-title">What Our Customers Say</h2>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                <h3 className="testimonial-title">{testimonial.title}</h3>
                <p className="testimonial-text">{testimonial.text}</p>
              </div>

              <div className="testimonial-divider"></div>

              <div className="customer-info">
                <div className="customer-avatar">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="avatar-image"
                  />
                </div>
                <div className="customer-details">
                  <h4 className="customer-name">{testimonial.name}</h4>
                  <p className="customer-location">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comments;