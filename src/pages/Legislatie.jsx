import React from "react";

const Legislatie = () => {
  return (
    <div>
      <div className="navbar-background"></div>

      <div className="row">
        <div className="col-xxxl-4 col-lg-6 embed">
          <div className="border-card">
            <a className="black-text" href="https://www.edu.ro/sites/default/files/_fi%C8%99iere/Legislatie/2022/ORDIN_4183_2022_New_ROFUIP.pdf"><h1>ROFUIP</h1></a>
            <embed src="/files/rofuip.pdf"/>
          </div>
        </div>

        <div className="col-xxxl-4 col-lg-6 embed">
          <div className="border-card">
            <a className="black-text" href="https://www.edu.ro/sites/default/files/OM_4742_10.08.2016-Statut_elevi_2016_0.pdf"><h1>Statutul elevului</h1></a>
            <embed src="/files/statutul_elevului.pdf" />
          </div>
        </div>

        {/* <div className="col-lg-6"></div>

        <div className="col-lg-6"></div> */}
      </div>
    </div>
  );
};

export default Legislatie;
