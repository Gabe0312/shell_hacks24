import React from 'react';
import './Devices.css';

const Devices = () => {
  const devices = [
    { id: 1, icon: "🧊", label: "Fridge" },
    { id: 2, icon: "🍽️", label: "Dishwasher" },
    { id: 3, icon: "☕", label: "Coffee Maker" },
    { id: 4, icon: "📺", label: "TV" },
    { id: 5, icon: "📟", label: "Microwave" },
    { id: 6, icon: "📱", label: "Phone" }
  ];

  return (
    <div className="devices">
      <h3>Devices</h3>
      <div className="device-grid">
        {devices.map(device => (
          <div key={device.id} className="device-card">
            <span>{device.icon}</span>
            <p>{device.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Devices;
