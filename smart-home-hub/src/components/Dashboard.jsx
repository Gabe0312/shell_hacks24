import React from 'react';
import Header from './Header';
import Devices from './Devices';
import Rooms from './Rooms';
import Clock from './Clock';
import Weather from './Weather';
import Notifications from './Notifications';
import './Dashboard.css';


const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <div className="main-content">
        <Clock/> <Weather/>
        <Devices />
        <Rooms />
        <Notifications />

      </div>
    </div>
  );
};
document.addEventListener('DOMContentLoad',function() {
  const header = document.querySelector('.header');
  const notifications = document.querySelector('.notifications');
  
  header.classList.add('slide-left');
  notifications.classList.add('slide-left');

});
export default Dashboard;
