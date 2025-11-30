import React, { useState, useEffect } from 'react';

function AnalogClock() {
    const [time, setTime] = useState(new Date());
    
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        
        return () => clearInterval(timer);
    }, []);
    
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours() % 12;
    
    const secondDeg = seconds * 6;
    const minuteDeg = minutes * 6;
    const hourDeg = hours * 30 + minutes * 0.5;
    
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            background: '#f5f5f5'
        }}>
            <div style={{
                width: '200px',
                height: '200px',
                border: '8px solid #333',
                borderRadius: '50%',
                position: 'relative',
                background: 'white'
            }}>
                <div style={{
                    position: 'absolute',
                    bottom: '50%',
                    left: '50%',
                    width: '4px',
                    height: '50px',
                    background: '#333',
                    marginLeft: '-2px',
                    transform: `rotate(${hourDeg}deg)`,
                    transformOrigin: 'bottom'
                }}></div>
                
                <div style={{
                    position: 'absolute',
                    bottom: '50%',
                    left: '50%',
                    width: '3px',
                    height: '70px',
                    background: '#666',
                    marginLeft: '-1.5px',
                    transform: `rotate(${minuteDeg}deg)`,
                    transformOrigin: 'bottom'
                }}></div>
                
                <div style={{
                    position: 'absolute',
                    bottom: '50%',
                    left: '50%',
                    width: '1px',
                    height: '80px',
                    background: 'red',
                    marginLeft: '-0.5px',
                    transform: `rotate(${secondDeg}deg)`,
                    transformOrigin: 'bottom'
                }}></div>
                
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '8px',
                    height: '8px',
                    background: '#333',
                    borderRadius: '50%',
                    transform: 'translate(-50%, -50%)'
                }}></div>
            </div>
        </div>
    );
}

export default AnalogClock;