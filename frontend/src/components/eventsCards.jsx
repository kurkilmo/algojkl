import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { useContentfulData } from '../services/useContentfulData'

const EventCards = () => {
  const { data, isLoading, error } = useContentfulData()
  const [selectedEvent, setSelectedEvent] = useState(null)
  const initialVisibleCount = 5
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount)

  useEffect(() => {
    if (selectedEvent) {
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
    }
  }, [selectedEvent])

  if (isLoading) return <p>Loading events...</p>
  if (error) return <p>Virhe ladattaessa tapahtumia</p>

  const sortedEvents = [...data.events].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  )

  const visibleEvents = sortedEvents.slice(0, visibleCount)
  const showAll = visibleCount >= sortedEvents.length

  return (
    <div>
    <div className="event-cards-container">
      {visibleEvents.map((event) => (
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
            <span className="close" onClick={() => setSelectedEvent(null)}>
              &times;
            </span>
            <h2>{selectedEvent.title}</h2>
            <ReactMarkdown>{selectedEvent.description}</ReactMarkdown>
            {selectedEvent.url && (
              <h2 className="modal-tickets">
                <a href={selectedEvent.url}>Liput</a>
              </h2>
            )}
            <p>
              <strong>Päivämäärä:</strong>{' '}
              {new Date(Date.parse(selectedEvent.date)).toLocaleDateString(
                'fi-FI'
              )}
            </p>
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
<div className="event-card-button">
{!showAll ? (
  <button onClick={() => setVisibleCount(sortedEvents.length)}>
    NÄYTÄ LISÄÄ
  </button>
) : (
  <button onClick={() => setVisibleCount(initialVisibleCount)}>
    NÄYTÄ VÄHEMMÄN
  </button>
)}
</div>
</div>
  )
}

export default EventCards
