import React from 'react'
import starter from '../images/Page_starters/7.png'
import juho from '../images/juho_k_j.png'
import aktiivi_s from '../images/aktiivit_s.png'
import aktiivi_1 from '../images/aktiivit_1.png'
import aktiivi_2 from '../images/aktiivit-2.png'
import aktiivi_3 from '../images/aktiivi_3.png'

const AktiiviPage = () => {
  return (
    <div className="aktiivi">
      <img src={starter} alt="starter_img_aktiivit" className="starter" />
      <div className="aktiivi-container">
        <h2>MIKÄ IHMEEN AKTIIVI???</h2>
        <div className="aktiivi-kuva-container">
          <p>
            Aktiivit koostuvat kiltamme jäsenistä, jotka haluavat auttaa ja
            vaikuttaa kiltamme toimintaan. Aktiivit auttavat hallituksemme
            jäseniä matalalla kynnyksellä.
          </p>
          <div className="juho-container">
            <img src={juho} alt="Juho Järvi" />
            <p>
              <i>Kuva: Elias Lehtinen</i>
            </p>
          </div>
        </div>
        <div className="aktiivi-pestit">
          <h2>AKTIIVIEN PESTIT</h2>
          <ul>
            <li>
              <strong>Tapahtumatiimi</strong>
            </li>
            <ul>
              <li>Tapahtumien suunnittelu ja järjestäminen</li>
              <ul>
                <li>
                  Sisältää esimerkiksi tapahtumapaikan varaamista ja
                  järjestelemistä sekä yleistä tapahtuman suunnittelua
                </li>
              </ul>
              <li>Tapahtumamerkkien suunnittelu</li>
              <li>Liikuntavastaava</li>
              <ul>
                <li>Liikuntatapahtumien järjestäminen</li>
              </ul>
              <li>
                Tapahtumatiimiä ylläpitää{' '}
                <a href="/hallitus">tapahtumavastaava(t)</a>
              </li>
            </ul>
            <li>
              <strong>Yritysyhteistyötiimi</strong>
            </li>
            <ul>
              <li>Yritysyhteistöiden kontaktointi ja hankinta</li>
              <ul>
                <li>
                  Myös esimerkiksi pienten kertaluontoisten sponsoreiden
                  hankinta
                </li>
              </ul>
              <li>
                Yritysyhteistyötiimiä ylläpitää{' '}
                <a href="/hallitus">yrityssuhdevastaava</a>
              </li>
            </ul>
            <li>
              <strong>Some-Tiimi</strong>
            </li>
            <ul>
              <li>Some-kanavien ylläpito</li>
              <ul>
                <li>Instagram & TikTok</li>
              </ul>
              <li>Tapahtumien kuvaaminen</li>
              <li>Killan mainostaminen</li>
              <li>
                Some-tiimiä ylläpitää <a href="/hallitus">Viestintävastaava</a>
              </li>
            </ul>
            <li>
              <strong>Muut mahdolliset aktiivit/tiimit</strong>
            </li>
            <ul>
              <li>Yhdenvertaisuus-vastaava tapahtumissa</li>
              <li>Juhlatiimi</li>
              <ul>
                <li>Vapun ja vuosijuhlien järjesteminen</li>
              </ul>
              <li>Nettijumala</li>
              <ul>
                <li>Nettisivujen päivitys (React,Contentful...)</li>
              </ul>
              <li>
                Lisätietoja tai ehdotuksia muista aktiivipesteistä voi kysyä
                keneltä tahansa hallituksen jäseneltä
              </li>
            </ul>
          </ul>
        </div>
        <br />
      </div>
      <div className="aktiivi-consent">
        <h2>Kiinnostuitko?</h2>
        <p>Hae aktiiviksi täyttämällä alla olevan lomakkeen!</p>
        <button className="aktiivit-button">
          <a href="https://forms.gle/iwLcCpC3bscAhbhN8">Hae Aktiiviksi</a>
        </button>
      </div>

      <div className="aktiivi-container-merkit">
        <h2>Aktiivimerkit</h2>
        <div className="aktiivit-container-merkit-background">
          <img src={aktiivi_3} alt="aktiivi_3" />
          <img src={aktiivi_2} alt="aktiivi_3" />
          <img src={aktiivi_1} alt="aktiivi_3" />
          <img src={aktiivi_s} alt="aktiivi_3" />
        </div>
      </div>
    </div>
  )
}

export default AktiiviPage
