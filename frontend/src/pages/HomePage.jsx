import React from "react";
import Carousel from "../components/carousel";
import EventCards from "../components/eventsCards";
import DiamondLogos from "../components/diamondLogos.jsx";
import { IoDiamondSharp } from "react-icons/io5";


const HomePage = () => {

     return (
         <div className="container">
        <Carousel/>
        <div className="news-events">
          <div className="events">
            <h2>TULEVAT TAPAHTUMAT</h2>
            <EventCards/>
          </div>
        </div>
  
        <div className="diamond-partners">
        <IoDiamondSharp />
          <h2>TIMANTTIKUMPPANIT</h2>
        <IoDiamondSharp />
        </div>
        <DiamondLogos/>
      </div>
    )

}

export default HomePage;
