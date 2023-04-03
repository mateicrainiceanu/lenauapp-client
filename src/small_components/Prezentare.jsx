import React from "react";

const ani = new Date().getFullYear() - 1870;

const Prezentare = () => {
  return (
    <section id="prezentare-despre">
      <div className="row margin-lr">
        <div className="col-lg-6 text-middle ">
          <p className="lg-text">
            Suntem de </p> <h1 className="lg-text">{ani}</h1> <p className="lg-text"> de ani în Timișoara
          </p>
          

        </div>

        <div className="col-lg-6">
          <div className="border-card">
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-8 poezie">
                <h2>Trutz Euch</h2>
                <hr />
                <p style={{marginTop: 2+"rem"}}>
                  Ihr kriegt mich nie wieder <br />
                  Ohnmächtige Tröpfe, <br />
                  Ich kehre wieder und wieder, <br />
                  Und meine steigenden Lieder <br />
                  Wachsen begrabend Euch über die
                  Köpfe!
                </p>
                <div className="right">
                  <h4>Nikolaus Lenau</h4>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <img
                  className="nlenaupic"
                  src="images/nlenau.jpg"
                  alt="nikolaus lenau"
                />
              </div>
            </div>
          </div>

        </div>

        <div style={{ height: 10 + "px" }} />
        <hr />



        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 align-img">
            <img src="images/dsd.jpg" className="nlenau" alt="dsd" />
            <div style={{ height: 10 + "px" }} />

          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 align-img">
            <img src="images/dsa.png" className="nlenau" alt="dsa" />
                        <div style={{ height: 10 + "px" }} />

          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 align-img">
            <img src="images/dps.png" className="nlenau" alt="dps"/>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 align-img">
            <img src="images/cambrige.jpg" className="nlenau" alt="cambrige"/>
          </div>
            
          </div>

                 
      </div>
    </section>
  );
};

export default Prezentare;
