import React from 'react'
import useDevice from '../hooks/useDevice'

import starterDesktop from '../images/Page_starters/5.jpg'
import starterMobile from '../images/mobiili/7.png'

const HakijatPage = () => {
  const isMobile = useDevice()
  const starterImage = isMobile ? starterMobile : starterDesktop

  return (
    <div>
      <img src={starterImage} alt="starter_image_rules" className="starter" />
      <div className="hakijalle-container">
        <p>
          Hienoa, että olet kiinnostunut opiskelusta Jyväskylän Yliopistossa!
          Jyväskylän yliopisto tarjoaa kahta eri Diplomi-insinööri tutkintoa
          IT-opiskelijoille:{' '}
          <strong>
            {' '}
            Tieto- ja ohjelmistotekniikka tai Teknologiajohtaminen.
          </strong>
        </p>
        <h3>Opinnoista</h3>
        <ul>
          <li>
            <strong>
              Tieto- ja ohjelmistotekniikka <i>(Tekniikan kandidaatti 180op)</i>
            </strong>
            <ul>
              <li>
                Tieto- ja ohjelmistotekniikan perus- ja aineopinnot 80 op (sis.
                kandidaatintutkielman)
              </li>
              <li>Tekniikan alan matemaattiset perusopinnot 35 op</li>
              <li>
                Toinen opintokokonaisuus (vähintään 25op){' '}
                <i>
                  {' '}
                  Sivuaine yhdistää tietotekniikan itse valittavaan alaan
                  Jyväskylän yliopiston lukuisista vaihtoehdoista. Voit valita
                  esimerkiksi ihmistieteitä kuten psykologiaa, liikunta- ja
                  terveystieteitä, kulttuuria ja taidetta tai pedagogiikkaa.
                  Vaihtoehtoisesti voit keskittyä vaikkapa matematiikkaan tai
                  luonnontieteisiin.{' '}
                </i>
              </li>
              <li>Viestintä- ja kieliopintoja vähintään 10 op</li>
              <li>
                Vapaasti valittavia opintokokonaisuuksia ja moduuleja sekä muita
                opintoja
              </li>
            </ul>
          </li>
          <li>
            <strong>
              Tieto- ja ohjelmistotekniikka <i>(Diplomi-insinööri 120op)</i>
            </strong>
            <ul>
              <li>
                Tieto- ja ohjelmistotekniikan syventävät opinnot 80 op (sis.
                Diplomityön)
              </li>
              <li>
                Toinen opintokokonaisuus (vähintään 25op){' '}
                <i>
                  {' '}
                  Sivuaine yhdistää tietotekniikan itse valittavaan alaan
                  Jyväskylän yliopiston lukuisista vaihtoehdoista. Voit valita
                  esimerkiksi ihmistieteitä kuten psykologiaa, liikunta- ja
                  terveystieteitä, kulttuuria ja taidetta tai pedagogiikkaa.
                  Vaihtoehtoisesti voit keskittyä vaikkapa matematiikkaan tai
                  luonnontieteisiin.{' '}
                </i>
              </li>
              <li>Viestintä- ja kieliopintoja</li>
              <li>
                Vapaasti valittavia opintokokonaisuuksia ja moduuleja sekä muita
                opintoja
              </li>
            </ul>
          </li>
          <li>
            <strong>
              Teknologiajohtaminen <i>(Tekniikan kandidaatti 180op)</i>
            </strong>
            <ul>
              <li>
                Tieto- ja ohjelmistotekniikan perus- ja aineopinnot 65 op (sis.
                kandidaatintutkielman)
              </li>
              <li>Teknologiajohtamisen opintokokonaisuus 40 op</li>
              <li>Tekniikan alan matemaattiset perusopinnot 35 op</li>
              <li>Viestintä- ja kieliopintoja 10 op</li>
              <li>
                Vapaasti valittavia opintokokonaisuuksia ja moduuleja sekä muita
                opintoja
              </li>
            </ul>
          </li>
          <li>
            <strong>
              Teknologiajohtaminen <i>(Diplomi-insinööri 120op)</i>
            </strong>
            <ul>
              <li>
                Teknologiajohtamisen syventävät opinnot 80 op (sis. Diplomityön)
              </li>
              <li>Teknologian kaupallistamisen opintoja 25 op</li>
              <li>Viestintä- ja kieliopintoja</li>
              <li>
                Vapaasti valittavia opintoja ja moduuleja sekä muita opintoja
              </li>
            </ul>
          </li>
        </ul>
        <h3>Mikäs Algo on?</h3>
        <p>
          Algo ry on Jyväskylän IT-teekkareiden kilta. Killan tehtävänä on
          valvoa opiskelijoidensa etuja, järjestää tapahtumia sekä siistejä
          matkoja ympäri Suomea. Lisäksi Algo ry ylläpitää yhdessä Linkki ry:n
          kanssa opiskelijatila <strong>Kattilaa</strong>, jota voi pitää killan
          opiskelijoiden olohuoneena yliopistolla.
        </p>
      </div>
    </div>
  )
}

export default HakijatPage
