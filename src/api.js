import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1/buffer';  // Local backend (buffer)

export const submitSensorData = async (data) => {
    try {
        return await axios.post(`${BASE_URL}/sensor-data`, data);
    } catch (error) {
        throw error;
    }
};

export const checkSystemStatus = async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/v1/health-check');
        return response.status === 200;
    } catch (error) {
        console.warn('❌ Failed to check system status:', error.message);
        return false;  // Assume offline if request fails
    }
};

export const fetchLatestData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/latest-data`);
        return response.data;
    } catch (error) {
        console.error('❌ Error fetching latest data:', error.message);
        return [];
    }
};
