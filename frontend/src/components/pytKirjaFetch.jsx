import React from 'react'
import { useContentfulData } from '../services/useContentfulData'

const PytKirja = () => {
  const { data, isLoading, error } = useContentfulData()

  if (isLoading) return <p>Ladataan pöytäkirjoja.</p>
  if (error) return <p>Virhe ladattaessa pöytäkirjoja.</p>

  return (
    <div className="pyt-kirja-container">
        <h2>
            Hallitus 2025:
        </h2>
    {data.pytkirjat.map((item) => (
      <div key={item.id} className="pytkirja-render">
        <a
          href={item.pytkirja}
          target="_blank"
          rel="noopener noreferrer"
          className="pytkirja-link"
        >
        {item.pytkirjaTittle}
        </a>
      </div>
    ))}
  </div>
  
  )
}

export default PytKirja
