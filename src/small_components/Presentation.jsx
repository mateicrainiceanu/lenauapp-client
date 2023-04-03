import React from "react";

function Presentation (){
    return(
        <section id="presentation">
                <div className="container-fluid present-cont">
                    <div className="on-image centerd">
                        <h1 className="nlenau-text"> Liceul Teoretic<br/> „Nikolaus Lenau”</h1>
                        <hr/>
                        <h3 className="nlenau-subtext">Eine Schule für eine Welt im Wandel</h3>
                        <h4 className="nlenau-subtext">O școală pentru o lume în schimbare</h4>
                    </div>
                    <img className="poza-liceu" src="images/liceu-fatada.jpeg" alt="_ of a building"/>
                </div>
        </section>
    );
}

export default Presentation;