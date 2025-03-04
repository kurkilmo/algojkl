import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import AdminPage from "./pages/AdminPage"
import HomePage from "./pages/HomePage"
import CollabPage from "./pages/collaborationPage"
import AnsioPage from "./pages/AnsiomerkitPage"
import Vujut from "./pages/VuosijuhlaPage"
import EventPage from "./pages/eventPage"
import Fuksit from "./pages/FreshmenPage"

import "./App.css"

import NavBar from "./components/navbar"
import Footer from "./components/footer"

function App() {
  return (
      <Router>
        <NavBar/>
          <Routes>
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/" element={<HomePage/>} />
            <Route path="/tapahtumat" element={<EventPage/>}/>
            <Route path="/yhteistyot" element={<CollabPage/>} />
            <Route path="/vujut" element={<Vujut/>} />
            <Route path="/fuksit" element={<Fuksit/>} />
            <Route path="/ohjesaannot" element={<AnsioPage/>} />
          </Routes>
        <Footer/>
      </Router>
  )
}

export default App;
