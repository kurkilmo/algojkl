import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AdminPage from "./pages/AdminPage"
import HomePage from "./pages/HomePage"
import CollabPage from "./pages/collaborationPage"
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
            <Route path="/yhteistyot" element={<CollabPage/>} />
          </Routes>
        <Footer/>
      </Router>
  )
}

export default App;
