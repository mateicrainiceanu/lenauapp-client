import React from "react";
import Presentation from "../small_components/Presentation";
import Performances from "../big_components/Performances";
import News from "./News";
import Oportunitati from "../small_components/Oportunitati";


function Home(){
    return(
        <React.Fragment>

            <Presentation/>

            <div className="bg-2">
            <div className="text-middle" style={{marginBottom: 2+"%"}}>
                <h1 className="form-element">Noutăți</h1>
                <a href="/news" className="black-text">Mai multe / Weitere Neuigkeiten</a>

            </div>
                
                <News limit={4} navbarbg={false} category={"general"}/>
            </div>
            
            <Oportunitati />

            <Performances />

            
    
        </React.Fragment>
    );

}

export default Home;