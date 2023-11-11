// Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // If you are using React Router
import '../styles/header.css'

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">
        <Link to="/">Volunteer App</Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/homepage">Home</Link>
          </li>
          <li>
            <Link to="/volunteerdashboard">Volunteers</Link>
          </li>
          <li>
            <Link to="/eventdetails">Events</Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
