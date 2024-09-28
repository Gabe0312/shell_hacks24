import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Lights from './components/Lights';
import Weather from './components/Weather';
import Clock from './components/Clock';
import './App.css';
// Import other components as needed

const App = () => {
  return (
    <Router>
      <div className="dashbaord">
        
        <h1>Smart Home Dmhiyishboard</h1>
        <Clock/>
        <Weather/>
        <Routes>
          <Route path="/lights" component={Lights} />
          <Route path="/weather" element={Weather}/>
          <Route path="/clock" component={Clock} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;

