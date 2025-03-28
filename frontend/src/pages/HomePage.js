import React, { useEffect, useState } from "react";
import { getUpcomingEvents, getTopVotedMovies } from "../services/api";

const HomePage = () => {
    const [events, setEvents] = useState([]);
    const [topMovies, setTopMovies] = useState([]);

    useEffect(() => {
        getUpcomingEvents().then(setEvents);
        getTopVotedMovies().then(setTopMovies);
    }, []);

    return (
        <div>
            <h1>Movie Night Organizer</h1>

            <h2>Upcoming Events</h2>
            <ul>
                {events.map((event) => (
                    <li key={event.id}>
                        {event.movie} on {event.date} at {event.time}
                    </li>
                ))}
            </ul>

            <h2>Top Voted Movies</h2>
            <ul>
                {topMovies.map((movie) => (
                    <li key={movie.id}>{movie.title} ({movie.votes} votes)</li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;
