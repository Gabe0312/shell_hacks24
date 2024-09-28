import React from 'react';
import './Notifications.css';

const Notifications = () => {
  const notifications = [
    { title: 'Health', message: 'Stay hydrated! You\'ve had 4 glasses of water today. Aim for at least 8 glasses' },
    { title: 'Canvas', message: 'You received a new grade. Check it out!' },
    { title: 'Outlook', message: 'You\'ve received a new email. Click to read now' },
    { title: 'LinkedIn', message: 'New job alert! Assure is looking for a software engineer.' }
  ];

  return (
    <div className="notifications">
      <h3>Notifications</h3>
      {notifications.map((note, index) => (
        <div key={index} className="notification-item">
          <strong>{note.title}</strong>
          <p>{note.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
