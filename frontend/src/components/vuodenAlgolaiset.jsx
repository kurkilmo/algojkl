import React from 'react'

const VuodenAlgolaiset = ({ people }) => {
  return (
    <div>
      <h2>Vuoden Algolaiset</h2>
      <ul className="vuoden-algolainen-container">
        {people.map((person) => (
          <li key={person.year} className="vuoden-algolainen">
            {person.image && (
              <img src={person.image} alt={person.name} width={300} />
            )}
            <strong>{person.year}:</strong> {person.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default VuodenAlgolaiset
