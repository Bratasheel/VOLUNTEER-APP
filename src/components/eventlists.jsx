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
      const { data, error } = await supabase.from('events').select('*, organizations("*")');
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
            <p><h3>{event.event_name}</h3>
            Associated Org : <strong>{event.organizations.organization_name}</strong><br/>
           Desc: {event.description} <br/>
            
           Location: {event.location}</p>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;