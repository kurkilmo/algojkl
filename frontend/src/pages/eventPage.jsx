import React from "react";

const Calendar_key = process.env.REACT_APP_CALENDAR_URL

const Events = () => {
    return (
        <div>
        <h2>Tulevat tapahtumat</h2>
            <iframe 
                title="Google calendar"
                src={Calendar_key}
                className="google-calendar"
                frameBorder="0" 
                scrolling="no"
            ></iframe>
        </div>
    )
}

export default Events