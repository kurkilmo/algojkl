import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const TutorList = ({ tutorit }) => {
  if (!tutorit || tutorit.length === 0) {
    return <p>Tutorit lisätään pian!</p>
  }

  return (
    <div className="tutorit">
      {tutorit.map((tutor) => (
        <div key={tutor.id} className="tutor-container">
          <img
            src={tutor.tutorKuva}
            alt={tutor.nimi}
            className="tutor-image"
          />
          <div className="tutor-info">
            <h3 className="tutor-name">{tutor.nimi}</h3>
            {tutor.esittelyteksti &&
              documentToReactComponents(tutor.esittelyteksti)}
          </div>
        </div>
      ))}
    </div>
  )
}

export default TutorList
