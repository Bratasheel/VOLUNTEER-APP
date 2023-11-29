import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserProfile from './userprof'; // Create UserProfile component
import Settings from './setting'; // Create UserSettings component
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
      {sidebarVisible && (
        <div className="sidebar">
          <button className="close-sidebar" onClick={closeSidebar}>
            &times;
          </button>
          <UserProfile/>
          <Link to="/setting">Settings</Link>
          <Link to="/Layout">Sign in!</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
