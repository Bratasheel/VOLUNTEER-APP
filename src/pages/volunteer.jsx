import React from 'react';
import VolunteerList from '../components/Volunteers';
import { Link } from 'react-router-dom';

const Volunteer = () => {
    return (
      <div>
        <section className="volunteer-content">
          <div className="volunteer-list">
            <h2>Volunteer Profiles</h2>
            {/* Display the VolunteerList component */}
            <VolunteerList />
          </div>
        </section>

        <section className="volunteer-header">
          <h1>Not Registered !</h1>
          <p>Register for volunteers here <a href="https://forms.gle/2pMAJueQsNG6yXNx7" target="_blank" rel="noreferrer">
        Register
      </a>{" "}
      <br />
      <br /></p>
        </section>
      </div>
    );
  };
  
  export default Volunteer;