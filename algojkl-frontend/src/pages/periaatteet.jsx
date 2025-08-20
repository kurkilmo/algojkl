import React from 'react'
import starterDesktop from '../images/Page_starters/13.jpg'
import starterMobile from '../images/mobiili/15.png'
import useDevice from '../hooks/useDevice'

const PeriaatteetPage = () => {
  const isMobile = useDevice()
  const starterImage = isMobile ? starterMobile : starterDesktop
  return (
    <div>
      <img src={starterImage} alt="starter_image_rules" className="starter" />
      <div className="periaate-container">
        <p>
          Algon killan sisällä apua voi hakea meidän sopolta/kopolta
          (sopo@algojkl.com & kopo@algojkl.com) tai anonyymisti lomakkeella,
          jonka löydät{' '}
          <strong>
            {' '}
            <a href="https://forms.gle/zEB8omZsu8MbgTK38">täältä</a>
          </strong>
          . Lomakkeen vastaukset näkyvät vain sopolle/kopolle.
          <br />
          <br />
          <strong>Toiminnasta:</strong>
          <br />
          <br />
          Algo ei hyväksy minkäänlaista syrjintää tai häirintää omassa
          toiminnassaan ja pyrimme rakentamaan kannustavaa ilmapiiriä. Jos
          kohtaat väärinkäytöksiä, häirintää, syrjintää tai koet olosi
          turvattomaksi, kerro asiasta ja pyydä apua. Tukea ja apua on aina
          saatavilla jos koet sitä tarvitsevasi.
          <br />
          <br />
        </p>
        <h3>
          <strong>
            Algo ja sen jäsenet sitoutuvat noudattamaan seuraavia arvoja:
          </strong>
        </h3>
        <ul>
          <li>
            Kaikki ihmiset ovat samanarvoisia riippumatta heidän sukupuolestaan,
            iästään, etnisestä tai kansallisesta alkuperästään,
            kansalaisuudestaan, kielestään, uskonnostaan, seksuaalisesta
            suuntautumisestaan tai muusta henkilöön liittyvästä syystä.
          </li>
          <li>Ei painostateta päihteiden käyttöön.</li>
          <li>Noudatetaan hyviä käytöstapoja ja käyttäydytään asiallisesti.</li>
          <li>Ymmärretään ja kunnioitetaan erilaisia näkökulmia.</li>
          <li>Ylläpidetään, luodaan ja kehitetään tervettä teekkarihenkeä.</li>
          <li>
            Jokainen nauttii opiskeluajastansa omilla ehdoillaan sekä edellä
            mainittujen periaatteiden ja Suomen lakien mukaisesti.
          </li>
          <li>
            Noudatetaan turvallisemman tilan periaatteita (listattu alla).
          </li>
        </ul>
        <h3>
          <strong>Algo ry:n turvallisemman tilan periaatteet:</strong>
        </h3>
        <ul>
          <li>Lopeta häiritsevä käytös ja pyydä välittömästi anteeksi.</li>
          <li>
            Huolehdi, että kaikki pääsevät halutessaan osalliseksi ja tulevat
            kuulluiksi.
          </li>
          <li>
            Älä häiritse ketään sanallisesti, koskettamalla tai tuijottamalla.
          </li>
          <li>
            Jokainen saa osallistua ja jakaa asioita haluamassaan laajuudessa
            sekä tavalla jonka itse kokee mieleisekseen.
          </li>
          <li>
            Anna tilaa. Käsittele arkoja asioita kunnioittavasti. Älä
            kyseenalaista toisen kokemusta.
          </li>
          <li>
            Älä tee ihmisistä oletuksia ulkoisten ominaisuuksien, iän, uskonnon,
            kulttuurin tai minkään muun ominaisuuden perusteella.
          </li>
          <li>
            Pyri välttämään syrjiviä stereotypioita puheessasi ja toiminnassasi.
            Älä käytä syrjiviä tai rasistisia ilmauksia.
          </li>
          <li>Kunnioita henkilökohtaista tilaa ja muiden rajoja.</li>
          <li>
            Puutumme asiattomaan ja häiritsevään käytökseen. Yhteyttä voit ottaa
            Algo ry:n sopoon tai hallitukseen.
          </li>
        </ul>
        <h3>
          <strong> Yhdenvertaisuus: </strong>
        </h3>

        <p>
          Algo pyrkii luomaan jäsenilleen mahdollisimman turvallisen,
          luotettavan sekä yhdenvertaisen ympäristön jokaiselle jäsenelleen.
          <br />
          <br />
          Yliopistolakiin on kirjattu, että yliopiston tulee tarjota turvallinen
          opiskeluympäristö, jossa jokaisella on oikeus opiskella kokematta
          häirintää, kiusaamista ja syrjintää (Yliopistolaki 41§). Algo ry ei
          suvaitse tapahtumissaan kiusaamista, syrjimistä, häirintää tai muuta
          epäasiallista käytöstä missään muodossa. Haluamme olla edistämässä
          kaikille turvallista ja viihtyisää korkeakouluyhteisöä. Kiusaamiselta
          tai häirinnältä ei aina voi välttyä. Täten on ehdottoman tärkeää
          reagoida kiusaamistilanteisiin.
          <br />
          <br />
          Jyväskylän yliopistossa voit hakea apua esimerkiksi Hyviksiltä, jotka
          tarjoavat keskusteluapua ja ohjaavat tarvittaessa eteenpäin. Apua
          tarjoavat myös JYY:n häirintäyhteyshenkilöt tai sopo. Kaikki jaettu
          tieto on luottamuksellista, eikä siitä puhuta kenellekään ilman
          asianomaisen lupaa.
        </p>
      </div>
    </div>
  )
}

export default PeriaatteetPage
