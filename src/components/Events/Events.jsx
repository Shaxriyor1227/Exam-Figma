import React from 'react';
import './Events.css';

// Assets import
import cateringImage from '../../assets/events1.png';
import birthdayImage from '../../assets/events2.png';
import weddingImage from '../../assets/events3.png';
import eventsImage from '../../assets/events4.png';

const Events = () => {
  const services = [
    {
      id: 1,
      title: 'Caterings',
      image: cateringImage,
      description: 'In the new era of technology we look in the future with certainty for life.'
    },
    {
      id: 2,
      title: 'Birthdays',
      image: birthdayImage,
      description: 'In the new era of technology we look in the future with certainty for life.'
    },
    {
      id: 3,
      title: 'Weddings',
      image: weddingImage,
      description: 'In the new era of technology we look in the future with certainty for life.'
    },
    {
      id: 4,
      title: 'Events',
      image: eventsImage,
      description: 'In the new era of technology we look in the future with certainty for life.'
    }
  ];

  const handleServiceClick = (service) => {
    console.log(`Clicked on ${service.title} service`);
    // Bu yerga navigation yoki modal ochish funksiyasi qo'shishingiz mumkin
  };

  return (
    <section className="events-section">
      <div className="events-container">
        <h2 className="events-title">
          We also offer unique <br /> services for your events
        </h2>

        <div className="services-grid">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="service-card"
              onClick={() => handleServiceClick(service)}
            >
              <div className="service-image-wrapper">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="service-image"
                />
              </div>
              
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;