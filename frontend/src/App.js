import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AdminPage from "./pages/AdminPage"
import HomePage from "./pages/HomePage"
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </Router>
  )
}

export default App;
