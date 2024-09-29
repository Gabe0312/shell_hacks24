import React from 'react';
import './Notifications.css';
import { imageAt } from '../imageIndexes'; 

const Notifications = () => {
  const notifications = [
    {
      icon: imageAt.healthAppIcon,
      title: 'Health',
      message: "Stay hydrated! You've had 4 glasses of water today. Aim for at least 8 glasses",
      time: '9:41 AM'
    },
    {
      icon: imageAt.canvaIcon,
      title: 'Canvas',
      message: "You received a new grade. Check it out in your grades!",
      time: '9:41 AM'
    },
    {
      icon: imageAt.outlook,
      title: 'Outlook',
      message: "You've received a new email. Click to read it now",
      time: '9:41 AM'
    },
    {
      icon: imageAt.linkedInIcon,
      title: 'LinkedIn',
      message: "New job alert! Assurant is looking for a software engineer. Explore this opportunity and apply today!",
      time: '9:41 AM'
    }
  ];

  return (
    <div className="notifications">
      <div className="notifications-header">
        <h3>Notifications</h3>
        <span className="info-icon">ℹ️</span>
      </div>
      {notifications.map((note, index) => (
        <div key={index} className="notification-item">
          <img src={note.icon} alt={note.title} className="notification-icon" />
          <div className="notification-content">
            <div className="notification-header">
              <strong>{note.title}</strong>
              <span className="notification-time">{note.time}</span>
            </div>
            <p>{note.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
