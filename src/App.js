// App.js
import Layout from './components/layout';
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/homepage';
import VolunteerDashboard from './pages/volunteerdashboard';
import VolunteerList from './components/Volunteers';
import EventDetails from './pages/eventdetails';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/dashboard" element={<VolunteerDashboard/>} />
        <Route path="/volunteers" element={<VolunteerList/>} />
        <Route path="/events" element={<EventDetails/>} />
        {/* Add more routes for other pages */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

