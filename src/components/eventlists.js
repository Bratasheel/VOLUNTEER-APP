import React, { useState, useEffect } from 'react';
import {supabaseConfig} from '../lib/supabase'
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  supabaseConfig.SUPABASE_URL,
  supabaseConfig.SUPABASE_API_KEY
);
function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      // Fetch user data from the Users table
      const { data, error } = await supabase.from("events").select("*");

      if (error) {
        console.error('Error fetching users:', error);
      } else {
        setEvents(data);
      }
    }

    fetchEvents();
  }, []);

  return (
    <div>
      <h2>Events List</h2>
      <ul>
        {events.map((event) => (
          <li key={event.event_id}>
            <h3>{event.name}</h3>
            <h3>{event.description}</h3>
            <h3>{event.location}</h3>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;