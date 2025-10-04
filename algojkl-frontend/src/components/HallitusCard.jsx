import React, { useState } from 'react'
import PropTypes from 'prop-types'

const HallitusCard = ({ member }) => {
  const [rounded, setRounded] = useState(false)

  return (
    <div className="hallitus-card">
      <button
        className="hidden-button"
        onClick={() => setRounded(!rounded)}
        aria-label="Toggle image shape"
      />
      <img
        src={member.kuva}
        alt={member.nimi}
        className={`hallitus-kuva ${rounded ? 'rounded' : ''}`}
      />
      <h2>{member.pesti}</h2>
      {member.lispesti && <p>{member.lispesti}</p>}
      <p>
        <strong>{member.nimi}</strong>
      </p>
      {member.telegram && <p>Telegram: {member.telegram}</p>}
      {member.sahkoposti && (
        <p>
          <a href={`mailto:${member.sahkoposti}`}>{member.sahkoposti}</a>
        </p>
      )}
    </div>
  )
}

HallitusCard.propTypes = {
  member: PropTypes.shape({
    nimi: PropTypes.string.isRequired,
    pesti: PropTypes.string.isRequired,
    lispesti: PropTypes.string,
    telegram: PropTypes.string,
    sp: PropTypes.string,
    kuva: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
}

export default HallitusCard
