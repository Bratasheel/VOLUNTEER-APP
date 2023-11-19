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
          <p><h3>Register for events here <Link to="/events">Events</Link></h3></p>
        </section>
      </div>
    );
  };
  
  export default Volunteer;