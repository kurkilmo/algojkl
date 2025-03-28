import React from 'react'
import CollabCards from '../components/collabLogos'
import starter from '../images/Page_starters/2.png'

const Collab = () => {
  return (
    <div>
      <img src={starter} alt="starter_collab_img" className="starter" />
      <div className="collab-container">
        <h1 className="collab-h1">Hei! Kiinnostaako yhteistyö?</h1>
        <p>
          Algon kanssa voi tehdä yhteistyötä laidasta laitaan! Haluatko
          mainospaikan haalareista tai tukea tapahtumiamme? Vai kiinnostaisiko
          esitellä yritystäsi Jyväskylän DI-opiskelijoille?
        </p>
        <h3>Yritysyhteistyöt</h3>
        <p>
          Yritysyhteistyöasioissa voit ottaa yhteyttä Algon
          yritysuhdevastaavaan: <br />
          <strong>Leevi Kopakkala: yritys@algojkl.com</strong>
        </p>
        <h3>Tapahtumat</h3>
        <p>
          Tapahtuma-asioissa voit ottaa yhteyttä Algon tapahtumavastaaviin:{' '}
          <strong>tapahtumat@algojkl.com</strong>
        </p>
        <br />
        <h3>Killan Ulkosuhteet</h3>
        <p>
          Killan ulkosuhteita ylläpitää Algon varapuheenjohtaja: <br />
          <strong>Essi Pakkala: vpj@algojkl.com</strong>{' '}
        </p>
        <h3>Muita idoita?</h3>
        <p>
          Meille voi aina ehdottaa uusia yhteistyökuvioita! <br />
          Muista yhteistyökuvioista voi ottaa yhteyttä Puheenjohtajaamme: <br />
          <strong>Rene Kangas: pj@algojkl.com</strong>
        </p>
        <h2>Meidän Yhteistyökumppaneita</h2>
      </div>
      <CollabCards />
    </div>
  )
}

export default Collab
