import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CollabPage from "./pages/YhteistyöPage"
import Ohjesaannot from "./pages/ohjesaannotPage"
import EventPage from "./pages/TapahtumatPage"
import Fuksit from "./pages/FuksitPage"
import HallitusPage from "./pages/hallitusPage"

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
          </Routes>
        <Footer/>
      </Router>
  )
}

export default App;
