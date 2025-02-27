import React from "react";
import CollabCards from "../components/collabLogos";

const Collab = () => {
    return(

        <div className="collab_container">
            <h1 className="collab-h1">Yhteistyö</h1>
            <h2>Hei! Kiinnostaako yhteistyö?</h2>
            <h3>Yritysyhteistyöt</h3>
            <p>
                Algon kanssa voi tehdä yhteistyötä laidasta laitaan! Haluatko mainospaikan haalareista tai tukea tapahtumiamme? Vai kiinnostaisiko esitellä yritystäsi Jyväskylän DI-opiskelijoille?
                <br />
                Ota meihin yhteyttä:
                <br />
                Leevi Kopakkala: yritys@algojkl.com 
                <br />
                Essi Pakkala: vpj@algojkl.com
            </p>
            <h3>Yhteistyöpaketit</h3>
            <p>Tänne päivitetyt yhteistyöpaketit</p>
            <h3>Tapahtumat</h3>
            <p>Tapahtuma-asioissa voit ottaa yhteyttä tapahtumavastaaviimme: </p>
            <p>tapahtumat@algojkl.com</p>

            <h3>Yhteistyökumppanimme</h3>
                <CollabCards/>
        </div>
    )
}

export default Collab;