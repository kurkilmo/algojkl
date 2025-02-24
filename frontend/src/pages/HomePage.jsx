import React from "react";
import ryhma from "../images/ryhma.png"
const HomePage = () => {

     return (
        <div className="container">
        <img className="frontpage_picture" src={ryhma} alt="teampic" />
        
        <div className="welcome">
          <p>Tervetuloa Algo ry:n sivuille! Algo ry on Jyväskyläläinen TietoTeekkarikilta.</p>
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
          <p>Se onnistuu, kun täytät alla olevan lomakkeen. Palautteet käsitellään täysin anonyymitse</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSd_uGBf6NpWvJi_v3o7w3iJ2flnCMrxnNWMi6hIgMhD3kPBAw/viewform">Palautelomake</a>
        </div>
      </div>
    )

}

export default HomePage;
