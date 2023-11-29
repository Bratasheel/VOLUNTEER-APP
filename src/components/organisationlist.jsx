import React, { useState, useEffect } from 'react';
import {supabaseConfig} from '../lib/supabase'
import { createClient } from '@supabase/supabase-js';
import "../styles/org.css"

const supabase = createClient(
  supabaseConfig.SUPABASE_URL,
  supabaseConfig.SUPABASE_API_KEY
);
function OrganisationList() {
  const [organizations, setOrg] = useState([]);

  useEffect(() => {
    async function fetchOrg() {
      // Fetch user data from the Users table
      const { data, error } = await supabase.from("organizations").select("*");

      if (error) {
        console.error('Error fetching users:', error);
      } else {
        setOrg(data);
      }
    }

    fetchOrg();
  }, []);

  return (
    <div>
      <h2>Organisation List</h2>


        <div className="organization-list">
          {organizations.map((org) => (

            <div className="organization-item">

              <li key={org.organization_id}>
                <div classname="organization-card">
                  <div classname="organization-name">
                    <h3>{org.organization_name}</h3>
                    <p classname="oranization-description">{org.description}</p>
                  </div>
                </div>
              </li>

            </div>
        
          ))}
        </div>
    </div>
  );
}

export default OrganisationList;