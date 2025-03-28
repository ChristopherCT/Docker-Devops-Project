const API_BASE_URL = "http://localhost:8000"; // Adjust based on your backend setup

// Fetch upcoming movie night events
export const getUpcomingEvents = async () => {
    const response = await fetch(`${API_BASE_URL}/events`);
    return response.json();
};

// Fetch top voted movies
export const getTopVotedMovies = async () => {
    const response = await fetch(`${API_BASE_URL}/movies/top-voted`);
    return response.json();
};

// Schedule a new movie night
export const scheduleEvent = async (eventData) => {
    const response = await fetch(`${API_BASE_URL}/add-event`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
    });
    return response.json();
};
