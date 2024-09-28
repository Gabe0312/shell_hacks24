// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Lights from './components/Lights';
// Import other components as needed

const App = () => {
  return (
    <Router>
      <div>
        <h1>Smart Home Dashboard</h1>
        <Routes>
          <Route path="/lights" component={Lights} />
          {/* Add routes for other components */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
