import React from "react";
import Nav from "../components/navbar"
import ryhma from "../images/ryhma.png"
const HomePage = () => {

     return (
        <div className="container">
        <Nav />
        <img className="frontpage_picture" src={ryhma} alt="teampic" />
        
        <div className="welcome">
          <p>Tervetuloa Algo ry:n sivuille! Algo ry on Jyväskylän TietoTeekkarikilta.</p>
        </div>
  
        <div className="news-events">
          <div className="news">
            <h2>Uutiset ja tiedotteet</h2>
          </div>
  
          <div className="events">
            <h2>Tulevat tapahtumat</h2>
          </div>
        </div>
  
        <div className="diamond-partners">
          <h2>Timanttikumppanit</h2>
        </div>
  
        <div className="feedback">
          <h2>Haluatko antaa meille palautetta?</h2>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSd_uGBf6NpWvJi_v3o7w3iJ2flnCMrxnNWMi6hIgMhD3kPBAw/viewform">Se onnistuu kun täytät tämän lomakkeen. Palautteet käsitellään täysin anonyymitse</a>
        </div>
      </div>
        
    )

}

export default HomePage;
