import React from "react";
import starter from "../images/Page_starters/3.png"

const Calendar_key = process.env.REACT_APP_CALENDAR_URL

const Events = () => {
    return (
        <div>
            <img src={starter} alt="page_stater_events" className="starter" />
            <div className="event-container">
        <h2>Tulevat tapahtumat</h2>
            <iframe 
                title="Google calendar"
                src={Calendar_key}
                className="google-calendar"
                frameBorder="0" 
                scrolling="no"
            ></iframe>
            </div>
        </div>
    )
}

export default Events