import { Link } from "react-router-dom";
import logo from "../images/algologo.jpeg";
import discord from "../images/discord.png"
import insta from "../images/instagram.png"
import tiktok from "../images/tiktok.png"
import linkedin from "../images/linkedin.png"

import DropdownMenu from "./dropdown";

function NavBar() {
  return (
    <div className="navigation">
      <nav>
        <div className="left-section">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
          <a href="/" className="kilta">
            ALGO ry
          </a>
          <div className="social">
            <a href="https://www.instagram.com/algo_jkl/"> 
                <img src={insta} alt="instagram" /> 
            </a>
            <a href="https://www.linkedin.com/company/algo-ry/">
            <img src={linkedin} alt="linkedin" />
            </a>
            <a href="https://discord.gg/e7pVcV2GZD">
            <img src={discord} alt="discord" />
            </a>
            <a href="https://www.tiktok.com/@algo_jkl">
            <img src={tiktok} alt="tiktok" />
            </a>
          </div>
        </div>

        <div className="right-section">
          <ul>
            <li><Link to="/">ETUSIVU</Link></li>
            <li><Link to="/tapahtumat">TAPAHTUMAT</Link></li>
            <li><Link to="/yhteistyot">YHTEISTYÖT</Link></li>

            <DropdownMenu
                title="KILTA"
                links={[
                    { label:"UUDET OPISKELIJAT" , path: "/fuksit"},
                    { label:"HALLITUS" , path: "/hallitus"},
                    { label:"AKTIIVIT" , path: "/aktiivit"},
                    { label:"KUNNIAGALLERIA" , path: "/kunniagalleria"},
                    { label:"SÄÄNNÖT" , path: "/saannot"},
                    { label:"REKISTERISELOSTE" , path: "/seloste"},
                    { label:"DOKUMENTIT" , path: "/dokumentit"},
            ]}
            />

            <DropdownMenu
                title="JÄSENILLE"
                links={[
                    { label:"UUTISET JA TIEDOTTEET" , path: "/uutiset"},
                    { label:"TOIMINNAN PERIAATTEET" , path: "/periaatteet"},
                    { label:"JÄSENDUT" , path: "/edut"},
                    { label:"KERHOTOIMINTA" , path: "/kerhotoiminta"},
                    { label:"REKRYT" , path: "/rekryt"},
                    { label:"LOMAKKEET" , path: "/lomakkeet"},
                    { label:"KANSAINVÄLISYYS" , path: "/kansainvalisyys"},
                    { label:"KATTILAN KAHVIKAMERA" , path: "/kahvikamera"},
                    { label:"SALAISUUDET" , path: "/salaisuudet"},
            ]}
            />

            <DropdownMenu
                title="OHJESÄÄNNÖT"
                links={[
                    { label:"ANSIOMERKIT" , path: "/ansiomerkit"},
                    { label:"HAALARIETIKETTI" , path: "/haalarit"},
                    { label:"TEEKKARILAKKI" , path: "/lakki"},
                    { label:"VUOSIJUHLAETIKETTI" , path: "/vujut"},
            ]}
            />

          </ul>
          <button className="jasen_nappi">LIITY JÄSENEKSI</button>
        </div>
        
        <div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
