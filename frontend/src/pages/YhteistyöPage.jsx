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
        <div className="collab-container-flex">
          <div>
            <h3>Yritysyhteistyöt</h3>
            <h4><strong>yritys@algojkl.com</strong></h4>
          </div>
          <div>
            <h3>Tapahtumat</h3>
            <h4><strong>tapahtumat@algojkl.com</strong></h4>
          </div>
          <div>
            <h3>Killan Ulkosuhteet</h3>
            <h4> <strong>vpj@algojkl.com</strong></h4>
          </div>
          <div className='collab-overflow'>
            <h3>Muita idoita?</h3>
            <h4>
            Meille voi aina ehdottaa uusia yhteistyökuvioita! <br />
            Muista yhteistyökuvioista voi ottaa yhteyttä puheenjohtajaamme:{' '}
            <br />
            <br />
            <strong>pj@algojkl.com</strong>
          </h4>
          </div>
          </div>
        <h2>Meidän Yhteistyökumppaneita</h2>
      </div>
      <CollabCards />
    </div>
  )
}

export default Collab
