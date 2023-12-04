// Settings.js
import React, { useState } from 'react';
import '../styles/setting.css'; // Updated stylesheet path

const Settings = () => {
  // Assume user data is passed as props or fetched from your backend
  const [name, setName] = useState('');
  const [age, setAge] = useState();
  const [image, setImage] = useState('');
  const [bio, setBio] = useState('');
  const [completedTasks, setCompletedTasks] = useState();
  const [hoursServed, setHoursServed] = useState();
  const [causes, setCauses] = useState([]);

  const handleSave = () => {
    // Implement save logic here (e.g., update user data in the backend)
    console.log('Saved changes');
  };

  return (
    <div className="settings-container">
      <h1>Account Settings</h1>
      <div className="setting-item">
        <label>
          Full Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
      </div>
      <div className="setting-item">
        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
      </div>
      <div className="setting-item">
        <label>
          Profile Image URL:
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </label>
      </div>
      <div className="setting-item">
        <label>
          Bio:
          <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
        </label>
      </div>
      <div className="setting-item">
        <label>
          Completed Tasks:
          <input type="number" value={completedTasks} onChange={(e) => setCompletedTasks(e.target.value)} />
        </label>
      </div>
      <div className="setting-item">
        <label>
          Hours Served:
          <input type="number" value={hoursServed} onChange={(e) => setHoursServed(e.target.value)} />
        </label>
      </div>
      <div className="setting-item">
        <label>
          Causes:
          <input
            type="text"
            value={causes.join(', ')}
            onChange={(e) => setCauses(e.target.value.split(',').map((cause) => cause.trim()))}
          />
        </label>
      </div>
      {/* Add more setting options in accordance with the UserProfile component */}
      <button className="save-button" onClick={handleSave}>
        Save Changes
      </button>
    </div>
  );
};

export default Settings;
