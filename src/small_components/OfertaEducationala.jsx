import React from "react";

function OfertaEducationala () {
    return (
        <section id="oferta">
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="director border-card fit-content">
                        <h3>Primar</h3>
                        <ul className="no-bullets">
                            <li>clasa pregătitoare</li>
                            <li>clasa I</li>
                            <li>clasa II</li>
                            <li>clasa III</li>
                            <li>clasa IV</li>
                        </ul>
                        <hr/>
                        <h3>Gimnazial</h3>
                        <ul className="no-bullets">
                            <li>clasa V</li>
                            <li>clasa VI</li>
                            <li>clasa VII</li>
                            <li>clasa VIII</li>
                        </ul>
                    </div>

                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="director border-card fit-content">
                        <h1>Liceu</h1>
                        <hr/>
                        <h3>DSD</h3>
                        <ul className="no-bullets">
                            <li>Științe ale naturii | Naturwissenschaften</li>
                            <li>Științe sociale | Sozialwissenschaften</li>
                            <li>Filologie</li>
                        </ul>
                        <hr/>
                        <h3>DSA</h3>
                        <ul className="no-bullets">
                            <li>Matematică informatică | Matematik-Informatik</li>
                            <li>Științe sociale | Sozialwissenschaften</li>
                        </ul>


                    </div>

                </div>
            </div>
        </section>
    )
}

export default OfertaEducationala;