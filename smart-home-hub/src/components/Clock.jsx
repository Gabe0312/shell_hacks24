import React, { useState,useEffect} from "react";
import moment from 'moment';
import './Clock.css';

const Clock = () => {

    const [time, setTime] = useState(moment().format('LTS'));

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(moment().format('LTS'));

        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return(
        <div>
            <h2>Current Time</h2>
            <p>{time}</p>
        </div>
    );
};
export default Clock;
