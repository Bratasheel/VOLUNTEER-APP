// EventDetails.js
import React from 'react';
import EventList from '../components/eventlists';

const EventDetails = () => {
  return (
    <div>
      <section className="event-details-header">
        <h1>Event Details</h1>
        <p>Explore and participate in upcoming events.</p>
      </section>

      <section className="event-details-content">
        <div className="event-list">
          <h2>Upcoming Events</h2>
          {/* Display the EventList component */}
          <EventList />
        </div>
      </section>
    </div>
  );
};

export default EventDetails;
