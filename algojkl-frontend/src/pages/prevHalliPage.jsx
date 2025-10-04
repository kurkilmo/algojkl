import React from 'react'
/*import starter from "../images/Page_starters/x.png"*/
import halli2024 from '../images/halli_2024.png'
import halli2023 from '../images/halli_2023.png'
import halli2022 from '../images/halli_2022.png'
const PrevHalli = () => {
  return (
    <div className="prev-hallitus">
      <h3>Hallitus 2024</h3>
      <div className="prev-hallitus-info">
        <img src={halli2024} alt="halli_2024_img" />
        <div>
          <p>
            <strong>Puheenjohtaja: </strong> Niko Iljin
          </p>
          <p>
            <strong>Varapuheenjohtaja: </strong> Laura Lehtiö
          </p>
          <p>
            <strong>Sihteeri: </strong> Ilmo Kurki
          </p>
          <p>
            <strong>Rahastonhoitaja: </strong> Lauri Mäkynen
          </p>
          <p>
            <strong>Yrityssuhdevastaava: </strong> Rene Kangas
          </p>
          <p>
            <strong>Koulutuspoliittinen vastaava: </strong> Olli Terävä
          </p>
          <p>
            <strong>Sosiaalipoliittinen vastaava: </strong> Sofia Palola
          </p>
          <p>
            <strong>Projektivastaava(t): </strong> Minea Nupponen & Emilia
            Rantonen
          </p>
          <p>
            <strong>Tapahtumavastaava(t): </strong> Venla Veijalainen & Reetta
            Manninen
          </p>
          <p>
            <strong>Ulkosuhdevastaava: </strong> Veeti Eloranta
          </p>
          <p>
            <strong>Viestintävastaava: </strong> Essi Pakkala
          </p>
        </div>
      </div>
      <h3>Hallitus 2023</h3>
      <div className="prev-hallitus-info">
        <img src={halli2023} alt="halli_2023_img" />
        <div>
          <p>
            <strong>Puheenjohtaja: </strong> Eemil Hukkanen
          </p>
          <p>
            <strong>Varapuheenjohtaja: </strong> Annarella Manninen
          </p>
          <p>
            <strong>Sihteeri: </strong> Topias Liljegren
          </p>
          <p>
            <strong>Rahastonhoitaja: </strong> Anna-Sofia Paavonen
          </p>
          <p>
            <strong>Yrityssuhdevastaava: </strong> Juuso Vuorela
          </p>
          <p>
            <strong>Hyvinvointivastaava ja Sopo: </strong> Lassi Laitinen
          </p>
          <p>
            <strong>Tapahtumavastaava(t) ja somevastaava(t): </strong> Minea
            Nupponen & Emilia Rantonen
          </p>
          <p>
            <strong>Tiedottaja: </strong> Niko Iljin
          </p>
          <p>
            <strong>Excursiovastaava: </strong> Lassi Karjalainen
          </p>
        </div>
      </div>
      <h3>Hallitus 2022 & perustajajäsenet</h3>
      <div className="prev-hallitus-info">
        <img src={halli2022} alt="halli_2022_img" />
        <div>
          <p>
            <strong>Puheenjohtaja: </strong> Eemil Hukkanen
          </p>
          <p>
            <strong>Varapuheenjohtaja: </strong> Annarella Manninen
          </p>
          <p>
            <strong>Sihteeri: </strong> Topias Liljegren
          </p>
          <p>
            <strong>Rahastonhoitaja: </strong> Anna-Sofia Paavonen
          </p>
          <p>
            <strong>Yrityssuhdevastaava: </strong> Juuso Vuorela
          </p>
          <p>
            <strong>Fuksivastaava & Sopo: </strong> Lassi Laitinen
          </p>
          <p>
            <strong>Tapahtuma- ja somevastaava(t): </strong> Minea Nupponen &
            Jesse Haimi
          </p>
        </div>
      </div>
    </div>
  )
}

export default PrevHalli
