import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CollabPage from "./pages/YhteistyöPage"
import Ohjesaannot from "./pages/ohjesaannotPage"
import EventPage from "./pages/TapahtumatPage"
import Fuksit from "./pages/FuksitPage"
import HallitusPage from "./pages/hallitusPage"
import AktiiviPage from "./pages/AktiivitPage"
import PeriaatteetPage from "./pages/periaatteet.jsx"
import DokumenttiPage from "./pages/DokumentitPage"
import KahvikameraPage from "./pages/KahvikameraPage"
import KansainvalisyysPage from "./pages/KansainvalisyysPage"
import KunniagalleriaPage from "./pages/KunniagalleriaPage"
import SalaisuudetPage from "./pages/SalaisuudetPage"
import SaannotPage from "./pages/SaannotPage"
import RekisteriselostePage from "./pages/RekisteriselostePage"
import YhteydenottoPage from "./pages/YhteydenottoPage"
import JasenEdutPage from "./pages/JasenedutPage"
import RekrytPage from "./pages/RekrytPage"
import KerhotoimintaPage from "./pages/KerhotoimintaPage"
import HakijatPage from "./pages/HakijatPage"
import PrevHalli from "./pages/prevHalliPage.jsx"

import "./App.css"

import NavBar from "./components/navbar"
import Footer from "./components/footer"

function App() {
  return (
      <Router>
        <NavBar/>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/tapahtumat" element={<EventPage/>}/>
            <Route path="/yhteistyot" element={<CollabPage/>} />
            <Route path="/fuksit" element={<Fuksit/>} />
            <Route path="/hallitus" element={<HallitusPage/>} />
            <Route path="/ohjesaannot" element={<Ohjesaannot/>} />
            <Route path="/aktiivit" element={<AktiiviPage/>} />
            <Route path="/periaatteet" element={<PeriaatteetPage/>} />
            <Route path="/dokumentit" element={<DokumenttiPage/>} />
            <Route path="/kahvikamera" element={<KahvikameraPage/>} />
            <Route path="/kansainvalisyys" element={<KansainvalisyysPage/>} />
            <Route path="/kunniagalleria" element={<KunniagalleriaPage/>} />
            <Route path="/salaisuudet" element={<SalaisuudetPage/>}/>
            <Route path="/saannot" element={<SaannotPage/>} />
            <Route path="/seloste" element={<RekisteriselostePage/>} />
            <Route path="/lomakkeet" element={<YhteydenottoPage/>} />
            <Route path="/edut" element={<JasenEdutPage/>} />
            <Route path="/rekryt" element={<RekrytPage/>}/>
            <Route path="/kerhotoiminta" element={<KerhotoimintaPage/>} />
            <Route path="/hakijalle" element={<HakijatPage/>} />
            <Route path="/entiset-hallitukset" element={<PrevHalli/>} />
          </Routes>
        <Footer/>
      </Router>
  )
}

export default App;
