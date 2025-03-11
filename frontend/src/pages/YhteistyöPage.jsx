import React from 'react'
import CollabCards from '../components/collabLogos'
import starter from '../images/Page_starters/2.png'

const Collab = () => {
  return (
    <div>
      <img src={starter} alt="starter_collab_img" className="starter" />
      <div className="collab-container">
        <h1 className="collab-h1">Hei! Kiinnostaako yhteistyö?</h1>
        <h3>Yritysyhteistyöt</h3>
        <p>
          Algon kanssa voi tehdä yhteistyötä laidasta laitaan! Haluatko
          mainospaikan haalareista tai tukea tapahtumiamme? Vai kiinnostaisiko
          esitellä yritystäsi Jyväskylän DI-opiskelijoille? Ota meihin yhteyttä:
          <br />
          <br />
          <strong>Leevi Kopakkala:</strong> yritys@algojkl.com
          <br />
          <strong>Essi Pakkala: </strong>vpj@algojkl.com
        </p>
        <h3>Tapahtumat</h3>
        <p>Tapahtuma-asioissa voit ottaa yhteyttä tapahtumavastaaviimme: </p>
        <p>
          <strong>tapahtumat@algojkl.com</strong>
        </p>
        <br />
        <h2 className="collabs-logos-h3">Meidän Yhteistyökumppaneita</h2>
        <CollabCards />
      </div>
    </div>
  )
}

export default Collab
