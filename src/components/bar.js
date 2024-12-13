import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Bar.css';

const Bar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bar">
      <button className="menu-toggl" onClick={handleToggle}>
        {isOpen ? '×' : '☰'}
      </button>
      <ul className={`bar-links ${isOpen ? 'active' : ''}`}>
        <h3>Services</h3>
        <li>
          <Link to="/services/software-development" onClick={handleToggle}>
            <i className="fas fa-cogs"></i> Software Development
          </Link>
        </li>
        <li>
          <Link to="/services/internship" onClick={handleToggle}>
            <i className="fas fa-info-circle"></i> Internships
          </Link>
        </li>
        <li>
          <Link to="/us" onClick={handleToggle}>
            <i className="fas fa-images"></i> Gallery
          </Link>
        </li>
        <li>
          <Link to="/properties" onClick={handleToggle}>
            <i className="fas fa-folder"></i> Projects
          </Link>
        </li>
        <li>
          <Link to="/services/film-production" onClick={handleToggle}>
            <i className="fas fa-video"></i> Film Production
          </Link>
        </li>
        <li>
          <Link to="/services/digital-marketing" onClick={handleToggle}>
            <i className="fas fa-laptop"></i> Digital Marketing
          </Link>
        </li>
        <li>
          <Link to="/services/design" onClick={handleToggle}>
            <i className="fas fa-paint-brush"></i> Design Services
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Bar;
