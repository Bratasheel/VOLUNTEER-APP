import React, { useEffect, useState } from 'react';
import EventList from '../components/eventlists';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase'; // Assuming you have a supabase.js file with supabase client setup

const EventDetails = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from Supabase
    const fetchEvents = async () => {
      try {
        const { data, error } = await supabase.from('events').select('*');
        if (error) {
          throw error;
        }
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error.message);
      }
    };

    fetchEvents();
  }, []);

  const handleRegistration = (eventId, userData) => {
    // Handle registration logic (e.g., API call to register the user for the event)
    console.log(`Registered for event with ID: ${eventId}`, userData);
  };

  return (
    <div className='event-div'>
      <section className="event-details-header">
        <p><strong>Explore and participate in upcoming events.</strong></p>
        <div className="registration-section">
          <h3>Event Registration</h3>
          <p>Register to participate in the below events!</p><a href="https://forms.gle/FpvHyD7Cn137Bc698" target="_blank" rel="noreferrer">
        Register
      </a>{" "}
      <br />
      <br />
        </div>
      </section>
      <section className="event-details-content">
        <div className="event-list">
          {/* Display the EventList component */}
          <EventList events={events} />
        </div>
        </section>
        </div>
        

  );
};

export default EventDetails;
