// App.js
import React from 'react';
import Layout from './components/layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/homepage';
import VolunteerDashboard from './pages/volunteerdashboard';
import Footer from './components/footer';
const App = () => {
  return (
   <Router>
        <Header />
        <Home />
        


       

        </Router>

  );
};

export default App;
