import React from 'react';
import './Rooms.css';

const Rooms = () => {
  const rooms = [
    { name: 'Bedroom', devices: 3 },
    { name: 'Kitchen', devices: 2 },
    { name: 'Living room', devices: 5 },
    { name: 'Bathroom', devices: 1 }
  ];

  return (
    <div className="rooms">
      <h3>Rooms</h3>
      {rooms.map((room, index) => (
        <div key={index} className="room-item">
          <span className="room-icon"></span>
          <span className="room-name">{room.name}</span>
          <span className="room-devices">{room.devices} devices</span>
          <span className="arrow-indicator">^</span>
        </div>
      ))}
    </div>
  );
};

export default Rooms;
