import React, { useState, useEffect } from 'react';
import {supabaseConfig} from '../lib/supabase'
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  supabaseConfig.SUPABASE_URL,
  supabaseConfig.SUPABASE_API_KEY
);
function VolunteerList() {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    async function fetchVolunteers() {
      // Fetch user data from the Users table
      const { data, error } = await supabase.from("volunteers").select("*");

      if (error) {
        console.error('Error fetching users:', error);
      } else {
        setVolunteers(data);
      }
    }

    fetchVolunteers();
  }, []);

  return (
    <div>
      <div className="volunteer-list">
          <ul className='volunteer-cards'>
            {volunteers.map((volunteer) => (
              <li key={volunteer.volunteer_id} className='volunteer-item'>
                <p><svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 512 512"><path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/></svg>{volunteer.first_name} {volunteer.last_name} :<br/>
                Skills :{volunteer.skills} <br/>
                Address :{volunteer.address}</p>

                </li>
            ))}
          </ul>
      </div>
    </div>
  );
}

export default VolunteerList;