import React, { useEffect, useState } from 'react';
import { checkSystemStatus } from './api';

const Status = () => {
    const [online, setOnline] = useState(false);

    useEffect(() => {
        const fetchStatus = async () => {
            const isOnline = await checkSystemStatus();
            setOnline(isOnline);
        };

        fetchStatus();
        const interval = setInterval(fetchStatus, 60 * 5000);  // Poll every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h3>System Status: {online ? '🟢 Online' : '🔴 Offline'}</h3>
        </div>
    );
};

export default Status;
