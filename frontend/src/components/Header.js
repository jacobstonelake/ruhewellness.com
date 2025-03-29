import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <header className="header">
      {/* Logo Section */}
      <div className="header-logo">
        <Link to="/" onClick={closeMenu}>
          <img src="/images/color-logo-no-background.png" alt="Ruhe Wellness Logo" />
        </Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <button
        className={`hamburger ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle Navigation Menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Navigation Section */}
      <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
        <ul className="nav-list">
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about-me" onClick={closeMenu}>About Me</Link></li>
          <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          
          {/* External Links to SimplePractice */}
          <li className="highlighted">
            <a
              href="https://chelsea-minix.clientsecure.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              Patient Portal
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
