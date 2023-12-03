// App.js

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Layout from './components/layout';
import Home from './pages/homepage';
import UserRetractableSidebar from './pages/userbar';
import Volunteer from './pages/volunteer';
import EventDetails from './pages/eventdetails';
import Footer from './components/footer'
import Settings from './components/setting';
import UserProfile from './components/userprof';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/users" element={<UserRetractableSidebar />} />
        <Route path="/volunteers" element={<Volunteer />} />
        <Route path="/events" element={<EventDetails/>} />
        {/* <Route path="/form/:organizationId" element={<OrgForm />} /> */}
        <Route path="/layout" element={<Layout/>} />
        <Route path="/setting" element={<Settings/>} />
        <Route path="/profile" element={<UserProfile/>} />
        {/* Add more routes for other pages */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

