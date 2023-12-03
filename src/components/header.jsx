import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <header className="app-header">
      <div className="header-container">
        <div className="logo">
          Volunteer App
        </div>
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          ☰
        </button>
        <nav className={`nav-links ${sidebarVisible ? 'hidden' : ''}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/volunteers">Volunteers</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
          </ul>
        </nav>
      </div>
      {sidebarVisible && (
        <div className="sidebar">
          <button className="close-sidebar" onClick={closeSidebar}>
            &times;
          </button>
        <ul>
          <li>
            <Link to="/profile">User</Link>
          </li>
          <li>
            <Link to="/setting">Settings</Link>
          </li>
          <button>
            <Link to="/layout">SignIn</Link>
          </button>
        </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
