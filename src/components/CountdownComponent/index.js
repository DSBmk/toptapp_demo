import React, { useState, useEffect, useRef } from "react";
export default function Countdown({duration}) {
    const [time, setTime] = useState(duration);
    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1000);
        }, 1000);
    }, [time]);

    const getFormatedTime = (milliseconds) => {
        if (milliseconds >= 0) {
            let total_seconds = parseInt(Math.floor(milliseconds / 1000));
            let total_minutes = parseInt(Math.floor(total_seconds / 60));
            let total_hours = parseInt(Math.floor(total_minutes / 60));
            let days = parseInt(Math.floor(total_hours / 24));

            let seconds = parseInt(total_seconds % 60);
            let minutes = parseInt(total_minutes % 60);
            let hours = parseInt(total_hours % 24);

            return (days > 9 ? days : "0" + days) + ":" +
                (hours > 9 ? hours : "0" + hours) + ":" +
                (minutes > 9 ? minutes : "0" + minutes) + ":" +
                (seconds > 9 ? seconds : "0" + seconds)
        }
        return '00:00:00:00'
    };
    
    return (
    <div style={{fontSize: 42, fontWeight: 'bold', margin: 0, color: 'red'}}>{getFormatedTime(time)}</div>
    );
}