import React from 'react'
import starter from '../images/Page_starters/6.jpg'
import { useContentfulData } from '../services/useContentfulData'
import HallitusCard from '../components/HallitusCard'
import PestitDescription from '../components/PestitDescription'
import { hallitusOrder } from '../utils/hallitusOrder'

const HallitusPage = () => {
  const { data, isLoading, error } = useContentfulData()

  if (isLoading) return <p>Ladataan...</p>
  if (error) return <p>Virhe ladattaessa tietoja.</p>

  const sortedHallitus = [...data.hallitus].sort((a, b) => {
    const orderA = hallitusOrder[a.pesti] ?? 99
    const orderB = hallitusOrder[b.pesti] ?? 99
    return orderA - orderB
  })

  return (
    <div>
      <img src={starter} alt="hallitus_starter_img" className="starter" />
      <div className="hallitus">
        <h1>ALGO ry:n hallitus 2025</h1>
        <div className="hallitus-grid">
          {sortedHallitus.map((member) => (
            <HallitusCard key={member.id} member={member} />
          ))}
        </div>
      </div>
      <PestitDescription />
    </div>
  )
}

export default HallitusPage
