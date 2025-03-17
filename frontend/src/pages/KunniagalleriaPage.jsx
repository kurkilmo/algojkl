import React from 'react'
import starter from '../images/Page_starters/12.png'
import halli2022 from '../images/halli_2022.png'

const KunniagalleriaPage = () => {
  return (
    <div>
      <img src={starter} alt="starter_image_rules" className="starter" />
      <div className="kunnia-container">
        <h2>Algo ry:n kunniajäsenet</h2>

        <p>
          <i>
            Kunniajäsen on killan toimintaa erityisen ansiokkaasti tukenut
            henkilö. Kunniajäsenyys on Algon korkein kunnianosoitus.
          </i>
        </p>
        <ul>
          <li>Jari Haapasaari (Nimetty 2023)</li>
        </ul>
        <h2>Vuoden Algolainen - palkinnon voittajat</h2>
        <p>
          <i>
            Vuoden algolainen on jäsenten äänestyksessä päättämä, joka on
            osoittanut merkittävää kiinnostusta yhdistyksen toimintaa kohtaan ja
            edistänyt jäsenten välistä yhteishenkeä.
          </i>
        </p>
        <ul>
          <li>
            <strong>2024:</strong> Olli Terävä
          </li>
          <li>
            <strong>2023:</strong> Niko Iljin
          </li>
        </ul>
      </div>
      <div className="kunnia-container">
        <h2>Perustajajäsenet & Hallitus 2022</h2>
        <div className="perustaja-flex">
          <img src={halli2022} alt="halli" width={250} />
          <ul className="perustaja">
            <li>
              <strong>Eemil Hukkanen</strong>, Puheenjohtaja 2022
            </li>
            <li>
              <strong>Annarella Manninen</strong>, Varapuheenjohtaja & Kopo 2022
            </li>
            <li>
              <strong>Topias Liljegren</strong>, Sihteeri 2022
            </li>
            <li>
              <strong>Anna-Sofia Paavonen</strong>, Rahastonhoitaja 2022
            </li>
            <li>
              <strong>Juuso Vuorela</strong>, Yrityssuhdevastaava 2022
            </li>
            <li>
              <strong>Minea Nupponen & Jesse Haimi</strong>, Tapahtuma- ja
              somevastaava(t) 2022
            </li>
            <li>
              <strong>Lassi Laitinen</strong>, Fuksivastaava ja
              sosiaalipoliittinen vastaava 2022
            </li>
          </ul>
        </div>
      </div>
      <div className="kunnia-container">
        <p>
          Muut edelliset hallitukset näkevät{' '}
          <a href="/entiset-hallitukset">täältä</a>
        </p>
      </div>
    </div>
  )
}

export default KunniagalleriaPage
