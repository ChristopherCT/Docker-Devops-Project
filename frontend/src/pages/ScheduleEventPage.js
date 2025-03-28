import React, { useState } from "react";
import { scheduleEvent } from "../services/api";

const ScheduleEventPage = () => {
    const [eventData, setEventData] = useState({ movie: "", date: "", time: "" });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setEventData({ ...eventData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await scheduleEvent(eventData);
        if (response.id) {
            setMessage("Movie night scheduled successfully!");
            setEventData({ movie: "", date: "", time: "" });
        } else {
            setMessage("Error scheduling event.");
        }
    };

    return (
        <div>
            <h1>Schedule a Movie Night</h1>
            <form onSubmit={handleSubmit}>
                <label>Movie:</label>
                <input type="text" name="movie" value={eventData.movie} onChange={handleChange} required />

                <label>Date:</label>
                <input type="date" name="date" value={eventData.date} onChange={handleChange} required />

                <label>Time:</label>
                <input type="time" name="time" value={eventData.time} onChange={handleChange} required />

                <button type="submit">Schedule</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ScheduleEventPage;
