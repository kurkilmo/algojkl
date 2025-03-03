import { useState } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import logo from "../images/algologo.jpeg";
import discord from "../images/discord.png";
import insta from "../images/instagram.png";
import tiktok from "../images/tiktok.png";
import linkedin from "../images/linkedin.png";
import bursa from "../images/burger.png";

import DropdownMenu from "./dropdown";
import Join from './joinUs';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);



  return (
    <div className="navigation">
      <nav>
        {/* Left Section: Logo & Social Links */}
        <div className="left-section">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
          <a href="/" className="kilta">ALGO ry</a>
          <div className="social">
            <a href="https://www.instagram.com/algo_jkl/"><img src={insta} alt="instagram" /></a>
            <a href="https://www.linkedin.com/company/algo-ry/"><img src={linkedin} alt="linkedin" /></a>
            <a href="https://discord.gg/e7pVcV2GZD"><img src={discord} alt="discord" /></a>
            <a href="https://www.tiktok.com/@algo_jkl"><img src={tiktok} alt="tiktok" /></a>
          </div>
        </div>

        {/* Mobile Menu */}
        <Menu 
          right 
          customBurgerIcon={<img src={bursa} alt="bm-menu-icon" />}
          isOpen={menuOpen} 
          onStateChange={({ isOpen }) => setMenuOpen(isOpen)}
        >
          <ul>
            <li className="bm-li"><Link to="/" onClick={() => setMenuOpen(false)}>ETUSIVU</Link></li>
            <li className="bm-li"><Link to="/tapahtumat" onClick={() => setMenuOpen(false)}>TAPAHTUMAT</Link></li>
            <li className="bm-li"><Link to="/yhteistyot" onClick={() => setMenuOpen(false)}>YHTEISTYÖT</Link></li>

            <DropdownMenu title="KILTA" links={[
              { label: "UUDET OPISKELIJAT", path: "/fuksit" },
              { label: "HALLITUS", path: "/hallitus" },
              { label: "AKTIIVIT", path: "/aktiivit" },
              { label: "KUNNIAGALLERIA", path: "/kunniagalleria" },
              { label: "SÄÄNNÖT", path: "/saannot" },
              { label: "REKISTERISELOSTE", path: "/seloste" },
              { label: "DOKUMENTIT", path: "/dokumentit" },
            ]} onItemClick={() => setMenuOpen(false)} />

            <DropdownMenu title="JÄSENILLE" links={[
              { label: "UUTISET JA TIEDOTTEET", path: "/uutiset" },
              { label: "TOIMINNAN PERIAATTEET", path: "/periaatteet" },
              { label: "JÄSENDUT", path: "/edut" },
              { label: "KERHOTOIMINTA", path: "/kerhotoiminta" },
              { label: "REKRYT", path: "/rekryt" },
              { label: "LOMAKKEET", path: "/lomakkeet" },
              { label: "KANSAINVÄLISYYS", path: "/kansainvalisyys" },
              { label: "KATTILAN KAHVIKAMERA", path: "/kahvikamera" },
              { label: "SALAISUUDET", path: "/salaisuudet" },
            ]} onItemClick={() => setMenuOpen(false)} />
            
            <DropdownMenu title="OHJESÄÄNNÖT" links={[
              { label: "ANSIOMERKIT", path: "/ansiomerkit" },
              { label: "HAALARIETIKETTI", path: "/haalarit" },
              { label: "TEEKKARILAKKI", path: "/lakki" },
              { label: "VUOSIJUHLAETIKETTI", path: "/vujut" },
            ]} onItemClick={() => setMenuOpen(false)} />
            
            <button className="jasen_nappi" onClick={() => setMenuOpen(false)}>LIITY JÄSENEKSI</button>

          </ul>
        </Menu>

        {/* Desktop Navigation */}
        <div className="right-section">
          <ul className="desktop-menu">
            <li><Link to="/">ETUSIVU</Link></li>
            <li><Link to="/tapahtumat">TAPAHTUMAT</Link></li>
            <li><Link to="/yhteistyot">YHTEISTYÖT</Link></li>

            <DropdownMenu title="KILTA" links={[
              { label: "UUDET OPISKELIJAT", path: "/fuksit" },
              { label: "HALLITUS", path: "/hallitus" },
              { label: "AKTIIVIT", path: "/aktiivit" },
              { label: "KUNNIAGALLERIA", path: "/kunniagalleria" },
              { label: "SÄÄNNÖT", path: "/saannot" },
              { label: "REKISTERISELOSTE", path: "/seloste" },
              { label: "DOKUMENTIT", path: "/dokumentit" },
            ]} />

            <DropdownMenu title="JÄSENILLE" links={[
              { label: "UUTISET JA TIEDOTTEET", path: "/uutiset" },
              { label: "TOIMINNAN PERIAATTEET", path: "/periaatteet" },
              { label: "JÄSENDUT", path: "/edut" },
              { label: "KERHOTOIMINTA", path: "/kerhotoiminta" },
              { label: "REKRYT", path: "/rekryt" },
              { label: "LOMAKKEET", path: "/lomakkeet" },
              { label: "KANSAINVÄLISYYS", path: "/kansainvalisyys" },
              { label: "KATTILAN KAHVIKAMERA", path: "/kahvikamera" },
              { label: "SALAISUUDET", path: "/salaisuudet" },
            ]} />

            <DropdownMenu title="OHJESÄÄNNÖT" links={[
              { label: "ANSIOMERKIT", path: "/ansiomerkit" },
              { label: "HAALARIETIKETTI", path: "/haalarit" },
              { label: "TEEKKARILAKKI", path: "/lakki" },
              { label: "VUOSIJUHLAETIKETTI", path: "/vujut" },
            ]} />
          </ul>
          <Join />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
