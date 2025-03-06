import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useContentfulData } from "../services/useContentfulData";

const EventCards = () => {
  const { data, isLoading, error } = useContentfulData();
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    if (selectedEvent) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [selectedEvent]);

  if (isLoading) return <p>Loading events...</p>;
  if (error) return <p>Virhe ladattaessa tapahtumia</p>;

  const sortedEvents = [...data.events].sort((a, b) => 
    new Date(a.date) - new Date(b.date)
  );

  return (
    <div className="event-cards-container">
      {sortedEvents.map((event) => (
        <div 
          key={event.id} 
          className="event-card" 
          onClick={() => setSelectedEvent(event)}
        >
          {event.picture?.fields?.file?.url && (
            <img 
              src={event.picture.fields.file.url} 
              alt={event.title} 
              className="event-image"
            />
          )}
          <h3>{event.title}</h3>
          <p>{new Date(event.date).toLocaleDateString()}</p>
        </div>
      ))}

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
            {selectedEvent.picture?.fields?.file?.url && (
              <img 
                src={selectedEvent.picture.fields.file.url} 
                alt={selectedEvent.title} 
                className="modal-image" 
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCards;
