import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Nav = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <nav className="main-nav">
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-me">About Me</Link></li>
        <li><Link to="/services">Services Provided</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/book-appointment">Book Appointment</Link></li>
        <li 
          className="dropdown"
          onMouseEnter={toggleDropdown} 
          onMouseLeave={toggleDropdown}
        >
          <span>My Account</span>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/sign-up">Sign Up</Link></li>
            </ul>
          )}
        </li>
        {/* Links for Book Appointment / Patient Portal */}
        <li><a href="https://chelsea-minix.clientsecure.me" target="_blank" rel="noopener noreferrer">Book Appointment</a></li>
          <li className="highlighted"><a href="https://chelsea-minix.clientsecure.me" target="_blank" rel="noopener noreferrer">Patient Portal</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
