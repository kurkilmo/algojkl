import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="navigation">
      <nav>

        <div className="footer-bar">
            <li>Algo ry</li>
          <ul>
            <li><Link to="/">ETUSIVU</Link></li>
            <li><Link to="/tapahtumat">TAPAHTUMAT</Link></li>
            <li><Link to="/yhteistyot">YHTEISTYÖT</Link></li>
            <li><Link to="/kilta">KILTA</Link></li>
            <li><Link to="/jäsenille">JÄSENILLE</Link></li>
            <li><Link to="/Ohjesäännöt">OHJESÄÄNNÖT</Link></li>
            <li>kaikki muut alisivut myös tänne</li>
            <li>Yhteystiedot</li>
            <li>Agora, Mattilanniemi 2, 40100 Jyväskylä</li>
          </ul>
        </div>
        
        <div>
        </div>
      </nav>
    </div>
  );
}

export default Footer;