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
      
      <div className="event-list">

          <ul className='event-cards'>
            {events.map((event) => (              
                <li key={event.event_id} className='event-item'>
                  {/* <div className='event-card' style={{backgroundImage: `url(images/${event.organizations.organization_name.replace(/\s+/g,'-')}1.jpg)`,}}> */}
                  <div className='event-card'>
                    <h3>{event.event_name}</h3>
                    <p>Associated Org : <strong>{event.organizations.organization_name}</strong><br/>
                    Desc: {event.description} <br/>
                    
                  Location: {event.location}</p>

                  </div>
                  </li>
              
            ))}
          </ul>

      </div>
    </div>
  );
}

export default EventList;