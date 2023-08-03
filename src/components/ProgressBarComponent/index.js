import './index.css'
import React, { useState } from 'react'

export default function ProgressBar() {
    const [progress, setProgress] = useState(0);
    const handleProgressClick = () => {
        if (progress < 100) {
            setProgress(progress + 10);
        }    
    }

    const handleResetClick = () => {
        setProgress(0);
    }
    return (
        <div className="container-bar">
            <div className="progress-bar">
                <div className="progress-bar-fill" style={{width: `${progress}%`}}>Progress Bar</div>
            </div>
            <div className="progress-label">
                <p>{progress}%</p>
            </div>
            <button onClick={handleProgressClick}>Progress</button>
            <button onClick={handleResetClick}>Reset</button>
        </div>
    )
}