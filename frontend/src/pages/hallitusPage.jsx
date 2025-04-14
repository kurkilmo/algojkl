import React, { useState } from 'react'
import starter from '../images/Page_starters/6.png'
import { useContentfulData } from '../services/useContentfulData'
import PropTypes from 'prop-types'

const HallitusCard = ({ member }) => {
  const [rounded, setRounded] = useState(false)

  return (
    <div className="hallitus-card">
      <button
        className="hidden-button"
        onClick={() => setRounded(!rounded)}
      ></button>
      <img
        src={member.kuva}
        alt={member.nimi}
        className={`hallitus-kuva ${rounded ? 'rounded' : ''}`}
      />
      <h2>{member.pesti}</h2>
      <p>{member.lispesti}</p>
      <p>
        <strong>{member.nimi}</strong>
      </p>
      <p>Telegram: {member.telegram}</p>
      <p>
        <a href={`mailto:${member.sp}`}>{member.sp}</a>
      </p>
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
  }),
}

const HallitusPage = () => {
  const { data, isLoading, error } = useContentfulData()

  if (isLoading) return <p>Ladataan...</p>
  if (error) return <p>Virhe ladattaessa tietoja.</p>

  const order = {
    'Puheenjohtaja, President': 1,
    'Varapuheenjohtaja, Vice president': 2,
    'Rahastonhoitaja, Treasurer': 3,
    'Sihteeri, Secretary': 4,
    'Koulutuspoliittinen vastaava, Head of educational politics, (kopo)':5,
    'Sosiaalipolittinen vastaava, Head of social affairs, (sopo)':6
  }

  const sortedHallitus = [...data.hallitus].sort((a, b) => {
    const orderA = order[a.pesti] !== undefined ? order[a.pesti] : 99
    const orderB = order[b.pesti] !== undefined ? order[b.pesti] : 99

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
      <div className="hallitus-pesti-info">
        <h3>Lyhyet kuvaukset hallituspesteistä</h3>
        <p>
          <strong>Puheenjohtaja</strong> on vastuussa hallituksen toiminnasta,
          johtaa hallituksen kokouksia sekä edustaa yleisesti kiltaa.
          <br />
          <br />
          <strong>Varapuheenjohtaja</strong> sijaistaa puheenjohtajaa
          kokouksissa tämän estyessä, ja toimii tiiviissä yhteistyössä
          puheenjohtajan kanssa.
          <br />
          <br />
          <strong>Sihteeri</strong> kirjoittaa kokouksissa pöytäkirjan
          (virallinen dokumentti kokouksissa läpikäytävistä asioista).
          <br />
          <br />
          <strong>Rahastonhoitaja</strong> maksaa laskuja, huolehtii
          kirjanpidosta ja vastaa killan pankkitilistä.
          <br />
          <br />
          <strong>Yritysvastaava</strong> solmii ja ylläpitää
          yhteistyösopimuksia yritysten kanssa sekä vastaa yritystiimin
          toiminnasta.
          <br />
          <br />
          <strong>Tapahtumavastaava</strong> ideoi ja järjestää tapahtumia sekä
          vastaa tapahtumatiimin toiminnasta.
          <br />
          <br />
          <strong>Projektivastaavat</strong> vastaavat teekkariuteen liittyvistä
          projektiluontoisista tapahtumista kuten vuosijuhlista,
          lakinlaskijaisista ja kastajaisista.
          <br />
          <br />
          <strong>Koulutuspoliittinen vastaava</strong> (kopo) huolehtii
          opiskelijoiden oikeuksien toteutumisesta ja ylläpitää suhteita
          yliopistoon.
          <br />
          <br />
          <strong>Sosiaalipoliittinen vastaava</strong> (sopo) huolehtii
          opiskelijoiden edunvalvonnasta, hyvinvoinnista ja yhdenvertaisuudesta
          killan toiminnassa.
          <br />
          <br />
          <strong>Kerhovastaava</strong> vastaa kommunikaatiosta kerhojen ja
          hallituksen välillä
          <br />
          <br />
          <strong>Viestintävastaava</strong> ylläpitää killan sosiaalisen median
          tilejä ja tiedottaa jäsenille tapahtumista ja muista tärkeistä
          asioista.
          <br />
          <br />
          <br />
          <strong></strong>
          <i>
            ps: Hallituksessa tehdään yhteistyössä muitakin kuin vain oman
            vastuualueen tehtäviä.
          </i>
        </p>
        <br />
        <p>
          {' '}
          Aiemmat hallitukset näet{' '}
          <a href="/entiset-hallitukset">
            <strong>täältä</strong>
          </a>
        </p>
      </div>
    </div>
  )
}

export default HallitusPage
