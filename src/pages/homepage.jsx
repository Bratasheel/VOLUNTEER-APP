// Home.js
import React from 'react';
import CarouselSection from '../components/carousel';
import OrganisationList from '../components/organisationlist';

const Home = () => {
  return (
    <div>
      <CarouselSection/>

      <section className="hero-section">
        <h1>Volunteer For India Impact</h1>
        <p>Empowering volunteers for positive change.</p>
      </section>

      <section className="featured-events">
        <h2>Featured Organizations</h2>
        {<OrganisationList />}
        {/* You can use the EventList component here */}
      </section>

      <section className="about-us">
        <h2>About Us</h2>
        <p>
          The Volunteer App connects passionate individuals with meaningful
          volunteer opportunities. Join us in making a positive impact in
          communities around the world.
        </p>
      </section>

      {/* Add more sections as needed */}
    </div>
  );
};

export default Home;