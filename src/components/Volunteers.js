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
      <h2>Volunteer List</h2>
      <ul>
        {volunteers.map((volunteer) => (
          <li key={volunteer.volunteer_id}>
            {volunteer.first_name}
            {volunteer.last_name}

            </li>
        ))}
      </ul>
    </div>
  );
}

export default VolunteerList;