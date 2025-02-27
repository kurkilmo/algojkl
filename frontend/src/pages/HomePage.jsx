import React from "react";
import Carousel from "../components/carousel";

import { IoDiamondSharp } from "react-icons/io5";


const HomePage = () => {

     return (
        <div className="container">
        <Carousel/>
        
        <div className="news-events">
  
          <div className="events">
            <h2>Tulevat tapahtumat</h2>
          </div>
        </div>
  
        <div className="diamond-partners">
        <IoDiamondSharp />
          <h2>Timanttikumppanit</h2>
        <IoDiamondSharp />
        </div>
  
       
      </div>
    )

}

export default HomePage;
