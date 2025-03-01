import React from 'react';
import './Card.css';

const Card = ({ title, date, location, description, image, link, category }) => {
  return (
    <div className={`card ${category}`}>
      <div className="card-image">
        <img src={image} alt={title} />
        <span className="category-tag">{category}</span>
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <div className="card-details">
          <p className="date"><i className="fas fa-calendar"></i> {date}</p>
          <p className="location"><i className="fas fa-map-marker-alt"></i> {location}</p>
        </div>
        <p className="description">{description}</p>
        <a href={link} className="button" target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Card;
