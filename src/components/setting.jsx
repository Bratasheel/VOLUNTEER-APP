// Settings.js
import React, { useState } from 'react';
import '../styles/setting.css';

const Settings = () => {
  // Assume user data is passed as props or fetched from your backend
  const [name, setName] = useState('John Doe');
  const [age, setAge] = useState(25);
  const [image, setImage] = useState('path/to/user/image.jpg');

  const handleSave = () => {
    // Implement save logic here (e.g., update user data in the backend)
    console.log('Saved changes');
  };

  return (
    <div>
      <h1>Settings</h1>
      <div>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Image URL:
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </label>
      </div>
      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
};

export default Settings;
