// App.js

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Layout from './components/layout';
import Home from './pages/homepage';
import Dashboard from './pages/dashboard';
import Volunteer from './pages/volunteer';
import EventDetails from './pages/eventdetails';
import Footer from './components/footer'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/volunteers" element={<Volunteer />} />
        <Route path="/events" element={<EventDetails/>} />
        <Route path="/layout" element={<Layout/>} />
        {/* Add more routes for other pages */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

