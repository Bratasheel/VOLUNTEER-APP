// UserProfile.js
import React from 'react';
import '../styles/profile.css';

const UserProfile = () => {
  // Assume user data is passed as props or fetched from your backend
  const user = {
    name: 'John Doe',
    age: 25,
    image: 'path/to/user/image.jpg',
    location: 'City, Country',
    completedTasks: 10, // Number of completed tasks
    // Add more user details as needed
  };

  return (
    <div>
      <h1>User Profile</h1>
      <div>
        <img src={user.image} alt="User" />
      </div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Location: {user.location}</p>
      <p>Completed Tasks: {user.completedTasks}</p>
      {/* Add more user details as needed */}
    </div>
  );
};

export default UserProfile;
