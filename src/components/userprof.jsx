// UserProfile.js
import React from 'react';
import '../styles/profile.css';

const UserProfile = () => {
  // Assume user data is passed as props or fetched from your backend
  const volunteer = {
    name: 'Rahul Singh',
    username: 'R.Singh',
    age: 24,
    image: 'images/default.png',
    location: 'City, Country',
    completedTasks: 10,
    hoursServed: 50,
    causes: ['Education', 'Environment', 'Health'],
    bio: 'Passionate about contributing to social causes!',
    // Add more volunteer details as needed
  };

  return (
    <div className="user-profile-container">
      <div className="user-image-container">
        <img src={volunteer.image} alt="Volunteer" className="user-image" />
      </div>
      <div className="user-details">
        <h1 className="user-name">{volunteer.name}</h1>
        <p className="user-username">@{volunteer.username}</p>
        <p className="user-bio">{volunteer.bio}</p>
        <div className="user-stats">
          <div className="stat">
            <strong>{volunteer.completedTasks}</strong> Tasks Completed
          </div>
          <div className="stat">
            <strong>{volunteer.hoursServed}</strong> Hours Served
          </div>
        </div>
        <p className="user-age">{volunteer.age} years old</p>
        <p className="user-location">{volunteer.location}</p>
        <div className="user-causes">
          <strong>Causes:</strong>
          <ul>
            {volunteer.causes.map((cause, index) => (
              <li key={index}>{cause}</li>
            ))}
          </ul>
        </div>
        {/* Add more volunteer details as needed */}
      </div>
    </div>
  );
};

export default UserProfile;
