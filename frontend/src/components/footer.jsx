import { Link } from "react-router-dom";

function Footer() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Algo ry</h3>
            <p>Yhteystiedot</p>
            <p>Agora, Mattilanniemi 2, 40100 Jyväskylä</p>
          </div>
  
          <nav className="footer-nav">
            <ul>
            <li><Link to="/">ETUSIVU</Link></li>
            <li><Link to="/tapahtumat">TAPAHTUMAT</Link></li>
            <li><Link to="/yhteistyot">YHTEISTYÖT</Link></li>
            <li><Link to="/fuksit">UUDET OPISKELIJAT</Link></li>
            <li><Link to="/hallitus">HALLITUS</Link></li>
            <li><Link to="/aktiivit">AKTIIVIT</Link></li>
            <li><Link to="/kunniagalleria">KUNNIAGALLERIA</Link></li>
            <li><Link to="/saannot">SÄÄNNÖT</Link></li>
            <li><Link to="/seloste">REKISTERISELOSTE</Link></li>
            <li><Link to="/dokumentit">DOKUMENTIT</Link></li>
            <li><Link to="/uutiset">UUTISET JA TIEDOTTEET</Link></li>
            <li><Link to="/periaatteet">TOIMINNAN PERIAATTEET</Link></li>
            <li><Link to="/edut">JÄSENEDUT</Link></li>
            <li><Link to="/kerhotoiminta">KERHOTOIMINTA</Link></li>
            <li><Link to="/rekryt">REKRYT</Link></li>
            <li><Link to="/lomakkeet">LOMAKKEET</Link></li>
            <li><Link to="/kansainvalisyys">KANSAINVÄLISYYS</Link></li>
            <li><Link to="/kahvi">KATTILAN KAHVIKAMERA</Link></li>
            <li><Link to="/salaisuudet">SALAISUUDET</Link></li>
            <li><Link to="/ansiomerkit">ANSIOMERKKI OHJESÄÄNTÖ</Link></li>
            <li><Link to="/haalarit">HAALARIETIKETTI</Link></li>
            <li><Link to="/lakki">TEEKKARILAKKI OHJESÄÄNTÖ</Link></li>
            <li><Link to="/vujut">VUOSIJUHLAETIKETTI</Link></li>
          </ul>
          </nav>
        </div>
        
        <div className="feedback">
          <h3>Haluatko antaa meille palautetta?</h3>
          <p>Se onnistuu, kun täytät alla olevan lomakkeen. Palautteet käsitellään täysin anonyymitse</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSd_uGBf6NpWvJi_v3o7w3iJ2flnCMrxnNWMi6hIgMhD3kPBAw/viewform">Palautelomake</a>
        </div>

    </footer>
        
  )
}

export default Footer;