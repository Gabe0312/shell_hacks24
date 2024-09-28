import React from 'react';
import Header from './Header';
import Devices from './Devices';
import Rooms from './Rooms';
import Notifications from './Notifications';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <div className="main-content">
        <Devices />
        <Rooms />
        <Notifications />
      </div>
    </div>
  );
};

export default Dashboard;
