import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Lights = () => {
  const [lights, setLights] = useState([]);

  useEffect(() => {
    // Fetch lights data from Philips Hue API
    axios.get('https://api.meethue.com/bridge/your-bridge-id/lights')
      .then(response => setLights(response.data))
      .catch(error => console.error('Error fetching lights:', error));
  }, []);

  const toggleLight = (id, isOn) => {
    axios.put(`https://api.meethue.com/bridge/your-bridge-id/lights/${id}/state`, {
      on: !isOn
    })
    .then(response => {
      setLights(lights.map(light => 
        light.id === id ? { ...light, state: { ...light.state, on: !isOn } } : light
      ));
    })
    .catch(error => console.error('Error toggling light:', error));
  };

  return (
    <div>
      <h2>Lights</h2>
      <ul>
        {lights.map(light => (
          <li key={light.id}>
            {light.name}
            <button onClick={() => toggleLight(light.id, light.state.on)}>
              {light.state.on ? 'Turn Off' : 'Turn On'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lights;
