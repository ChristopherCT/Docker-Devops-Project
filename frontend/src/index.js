// src/index.js
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./pages/HomePage";
import ScheduleEventPage from "./pages/ScheduleEventPage";

const App = () => {
    const [route, setRoute] = useState("/");

    const renderPage = () => {
        switch (route) {
            case "/":
                return <HomePage />;
            case "/schedule":
                return <ScheduleEventPage />;
            default:
                return <HomePage />;
        }
    };

    return (
        <div>
            <nav>
                <button onClick={() => setRoute("/")}>Home</button>
                <button onClick={() => setRoute("/schedule")}>Schedule Event</button>
            </nav>
            {renderPage()}
        </div>
    );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
