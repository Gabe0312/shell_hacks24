import React from 'react';
import './Header.css'; // We'll create this CSS file later for styling

const Header = () => {
  return (
    <div className="header">
      <div className="user-info">
        <div className="user-avatar"></div>
        <h2>User's Home</h2>
      </div>
      <div className="room-stats">
        <div className="stat">
          <span>Room’s temperature</span>
          <p>24°C</p>
        </div>
        <div className="stat">
          <span>Room’s humidity</span>
          <p>80%</p>
        </div>
        <div className="stat">
          <span>Room’s lightning</span>
          <p>50%</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
