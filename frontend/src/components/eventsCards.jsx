import React, { useEffect, useState } from 'react';
import client from './contentful';

const EventCards = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    client.getEntries({
      content_type: 'events'
    }).then(response => {
      if (response.items && Array.isArray(response.items)) {
        const events = response.items.map(item => {
          return {
            id: item.fields.eventId,
            title: item.fields.eventTitle, 
            description: item.fields.eventDesc, 
            date: item.fields.eventDateTime,
            picture: item.fields.eventPicture,
          };
        });
        setEvents(events);
      } else {
        console.error("No items found in Contentful response");
      }
    }).catch(console.error);
  }, []);

  return (
    <div className="event-cards-container">
      {events.length === 0 ? (
        <p>Loading events...</p>
      ) : (
        events.map((event) => (
          <div key={event.id} className="event-card">
            {event.picture && event.picture.fields && (
              <img 
                src={event.picture.fields.file.url} 
                alt={event.title} 
                className="event-image"
              />
            )}
            <h3>{event.title}</h3>
            <p>{new Date(event.date).toLocaleDateString()}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default EventCards;
