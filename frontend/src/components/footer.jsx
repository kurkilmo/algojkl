import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="navigation">
      <nav>

        <div className="footer-bar">
          <ul>
            <li><Link to="/">ETUSIVU</Link></li>
            <li><Link to="/tapahtumat">TAPAHTUMAT</Link></li>
            <li><Link to="/yhteistyöt">YHTEISTYÖT</Link></li>
            <li><Link to="/kilta">KILTA</Link></li>
            <li><Link to="/jäsenille">JÄSENILLE</Link></li>
            <li><Link to="/Ohjesäännöt">OHJESÄÄNNÖT</Link></li>
          </ul>
        </div>
        
        <div>
        </div>
      </nav>
    </div>
  );
}

export default Footer;