import React, { useEffect, useState } from 'react';
// import { fetchLatestData } from './api';

const Dashboard = () => {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     const loadData = async () => {
    //         const latestData = await fetchLatestData();
    //         setData(latestData);
    //     };

    //     loadData();
    //     const interval = setInterval(loadData, 10000);  // Poll every 10 seconds

    //     return () => clearInterval(interval);
    // }, []);

    return (
        <div>
            <h3>Latest Sensor Data</h3>
            <table border="1" style={{ width: '100%', marginTop: '10px' }}>
                <thead>
                    <tr>
                        <th>Temperature</th>
                        <th>Heart Rate</th>
                        <th>Humidity</th>
                        <th>Activity Level</th>
                        <th>Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.temperature}</td>
                            <td>{item.heartRate}</td>
                            <td>{item.humidity}</td>
                            <td>{item.activityLevel}</td>
                            <td>{new Date(item.timestamp).toLocaleString()}</td>
                        </tr>
                    ))} */}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
