// UserRetractableSidebar.js
import React from 'react';
import { Link } from 'react-router-dom'; 
//import '../styles/user.css'

const UserRetractableSidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`user-sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      <div className="sidebar-content">
        <Link to="/profile">Profile</Link>
        <Link to="/setting">Settings</Link>
        <Link to="/signin">Sign In</Link>
      </div>
    </div>
  );
};

export default UserRetractableSidebar;
