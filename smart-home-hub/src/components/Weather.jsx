import React, { useState,useEffect} from "react";
import axios from 'axios';
import './Weather.css';

const Weather = () => {
    const[weather, setWeather] = useState(null);

    useEffect(() => {
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=Sweetwater&appid=b0825433ba1d06b5ab736eac24dbad87')
        .then(response=> setWeather(response.data))
        .catch(error => console.error('Error fetching weather:',error));
    }, []);

    return(
        <div>
            <h2>Weather</h2>
            {weather ? (
                <div>
                    <p>{weather.name}</p>
                    <p>{Math.round((weather.main.temp - 273.15) * 9/5 + 32)}°C</p>
                    <p>{weather.weather[0].description}</p>

                </div>
            ) : (
                <p>Loading weather...</p>
            )}

            
        </div>
    );
};
export default Weather;
