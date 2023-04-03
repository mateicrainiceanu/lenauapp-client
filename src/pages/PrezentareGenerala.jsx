import React from "react";
import History from "../big_components/History";
import OfertaEducationala from "../small_components/OfertaEducationala";
import Proiecte from "../small_components/Proiecte";
import Parteneriate from "../small_components/Parteneriate";
import Traditii from "../small_components/Traditii";
import Prezentare from "../small_components/Prezentare";
import Performances from "../big_components/Performances"

const PrezentareGenerala = () => {
  return (
    <div>
      <div className="sclpebg">
        <img className="poza-liceu" src="images/liceu-fatada.jpeg" alt="backgorund of the school"/>
      </div>

      <div id="prezentare-generala">
        <div className="navbar-background"></div>
        
        <Prezentare />

        <History />

        <OfertaEducationala />

        <Proiecte />

        <Parteneriate />

        <Traditii />

        <Performances />
        
      </div>
    </div>
  );
};

export default PrezentareGenerala;
