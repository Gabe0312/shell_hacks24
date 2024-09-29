import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Lights from './components/Lights';
import Weather from './components/Weather';
import Clock from './components/Clock';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="dashboard">
        <h1>Smart Home Dashboard</h1>
        <Clock />
        <Weather />
        <Routes>
          <Route path="/lights" element={<Lights />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/clock" element={<Clock />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
