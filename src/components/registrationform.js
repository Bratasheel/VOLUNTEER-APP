import React, { useState } from 'react';

const RegistrationForm = ({ events, onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation if needed

    // Call the onRegister function with event ID and user details
    onRegister(selectedEvent, { name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Select Event:
        <select value={selectedEvent} onChange={(e) => setSelectedEvent(e.target.value)}>
          <option value="" disabled>Select an event</option>
          {events.map((event) => (
            <option key={event.id} value={event.id}>
              {event.event_name}
            </option>
          ))}
        </select>
      </label>
      <button type="submit" disabled={!selectedEvent}>Register</button>
    </form>
  );
};

export default RegistrationForm;
