import React, { useState, useEffect } from 'react';
import {supabaseConfig} from '../lib/supabase';
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
      <div className="row row-cols-1 row-cols-md-3 g-4">

      {events.map((event) => ( 
        
        <div className="col" key={event.event_id}>
          <div className="card" >
              <div className="card-body">
                <div className="accordion accordion-flush" id={`accordionFlushExample-${event.event_id}`}>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-${event.event_id}`} aria-expanded="false" aria-controls={`flush-collapse-${event.event_id}`} 
                  style={{ backgroundImage: `url(images/${event.event_name.replace(/\s+/g, '-')}.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',}}>
                    <h3>{event.event_name}</h3>
                  </button>
                </h2>
                <div id={`flush-collapse-${event.event_id}`} className="accordion-collapse collapse" data-bs-parent={`#accordionFlushExample-${event.event_id}`}>
                  <div className="accordion-body">
                    <p>Associated Org : <strong>{event.organizations.organization_name}</strong><br/>
                    Desc: <i>{event.description}</i><br/>
                    Location: {event.location}</p>
                  </div>
                </div>
              </div>
              {/* Add more accordion here */}
            </div>
              </div>
            </div>
        </div>
      ))}
</div>

    </div>
  );


}

export default EventList;