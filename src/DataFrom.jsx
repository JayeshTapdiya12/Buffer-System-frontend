import React, { useState } from 'react';
import { submitSensorData } from './api';

const DataForm = () => {
    const [formData, setFormData] = useState({
        temperature: '',
        heartRate: '',
        humidity: '',
        activityLevel: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await submitSensorData(formData);
            alert('✅ Data submitted successfully!');
            setFormData({ temperature: '', heartRate: '', humidity: '', activityLevel: '' });
        } catch (error) {
            alert('❌ Failed to submit data: ' + (error.response?.data?.error || error.message));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" name="temperature" placeholder="Temperature" value={formData.temperature} onChange={handleChange} required />
            <input type="number" name="heartRate" placeholder="Heart Rate" value={formData.heartRate} onChange={handleChange} required />
            <input type="number" name="humidity" placeholder="Humidity" value={formData.humidity} onChange={handleChange} required />
            <input type="text" name="activityLevel" placeholder="Activity Level" value={formData.activityLevel} onChange={handleChange} required />
            <button type="submit">Submit Data</button>
        </form>
    );
};

export default DataForm;
