import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

function ServiceCard({ title, description, image, link }) {
  return (
    <div className="service-card">
      <Link to={link} className="service-card-link">
        <img src={image} alt={title} />
        <div className="overlay-text">
          <h3>
            {title.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h3>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ServiceCard;
