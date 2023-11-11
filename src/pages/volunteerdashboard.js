// VolunteerDashboard.js
import React from 'react';
import VolunteerList from '../components/Volunteers';
import OrganisationList from '../components/organisationlist';

const VolunteerDashboard = () => {
  return (
    <div>
      <section className="dashboard-header">
        <h1>Volunteer Dashboard</h1>
        <p>Welcome to your volunteer dashboard!</p>
      </section>

      <section className="dashboard-content">
        <div className="volunteer-list">
          <h2>Your Volunteer Profile</h2>
          {/* Display the VolunteerList component */}
          <VolunteerList />
        </div>

        <div className="organization-list">
          <h2>Available Organizations</h2>
          {/* Display the OrganizationList component */}
          <OrganisationList />
        </div>
      </section>
    </div>
  );
};

export default VolunteerDashboard;
