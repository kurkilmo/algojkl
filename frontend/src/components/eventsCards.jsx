import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import client from './contentful';

const EventCards = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    client.getEntries({
      content_type: 'events'
    }).then(response => {
      if (response.items && Array.isArray(response.items)) {
        const events = response.items.map(item => ({
          id: item.fields.eventId,
          title: item.fields.eventTitle, 
          description: item.fields.eventDesc, 
          date: item.fields.eventDateTime,
          picture: item.fields.eventPicture,
          url: item.fields.eventUrl
        }));
        setEvents(events);
      } else {
        console.error("No items found in Contentful response");
      }
    }).catch(console.error);
  }, []);

  useEffect(() => {
    if (selectedEvent) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [selectedEvent]);

  return (
    <div className="event-cards-container">
      {events.length === 0 ? (
        <p>Loading events...</p>
      ) : (
        events.map((event) => (
          <div 
            key={event.id} 
            className="event-card" 
            onClick={() => setSelectedEvent(event)}
          >
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

        {selectedEvent && (
        <div className="modal-overlay" onClick={() => setSelectedEvent(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setSelectedEvent(null)}>&times;</span>
            <h2>{selectedEvent.title}</h2>
            <ReactMarkdown>{selectedEvent.description}</ReactMarkdown>
            {selectedEvent.url && (
                <h2 className="modal-tickets">
                <a href={selectedEvent.url}>Liput</a>
                </h2>
            )}
            <p><strong>Päivämäärä:</strong> {new Date(selectedEvent.date).toLocaleDateString()}</p>
            {selectedEvent.picture?.fields && (
                <img src={selectedEvent.picture.fields.file.url} alt={selectedEvent.title} className="modal-image" />
            )}
            </div>
        </div>
)}
    </div>
  );
};

export default EventCards;
