// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">
        <Link to="/">Volunteer App</Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/volunteers">Volunteers</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
