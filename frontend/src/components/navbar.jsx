import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "../images/algologo.jpeg";

function App() {
  return (
    <div className="navigation">
      <nav>
        <div className="left-section">
          <img src={logo} alt="logo" />
          <p className="kilta">Algo ry</p>
        </div>

        <div className="right-section">
          <ul>
            <li><Link to="/">ETUSIVU</Link></li>
            <li><Link to="/tapahtumat">TAPAHTUMAT</Link></li>
            <li><Link to="/yhteistyöt">YHTEISTYÖT</Link></li>
            <li><Link to="/kilta">KILTA</Link></li>
            <li><Link to="/jäsenille">JÄSENILLE</Link></li>
            <li><Link to="/Ohjesäännöt">OHJESÄÄNNÖT</Link></li>
          </ul>
          <button className="jasen_nappi">LIITY JÄSENEKSI</button>
        </div>
        
        <div>
        </div>
      </nav>
    </div>
  );
}

export default App;
