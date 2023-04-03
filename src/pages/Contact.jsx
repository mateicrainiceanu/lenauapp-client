import React from "react";
import Map from "../small_components/Map";

const Contact = () => {
  return (
    <div>
      <section id="contact" className="bg-2">
        <div className="navbar-background"></div>
        <div className="row">
          <div className="col-lg-6">
            <h1>Contact</h1>

            <hr />

            <ul className="no-bullets">
              <li>
                Email:{" "}
                <a className="black-text" href="mailto:n.lenauschule@yahoo.de">
                  n.lenauschule@yahoo.de
                </a>
              </li>

              <li>
                Adresă:{" "}
                <a
                  className="black-text"
                  href="https://goo.gl/maps/zGBiPao3XUa6sevd8"
                >
                  Timișoara, str. Gheorghe Lazăr, nr. 2, 300078
                </a>
              </li>
              <li>
                Facebook:{" "}
                <a
                  className="black-text"
                  href="https://www.facebook.com/NikolausLenau"
                >
                  <i className="fa-brands fa-facebook-f"></i> Nikolaus-Lenau
                </a>
              </li>
            </ul>

            <hr />

            <h4>Secretariat & Direcțiune</h4>
            <ul className="no-bullets">
              <li>
                Email:{" "}
                <a className="black-text" href="mailto:secretariat@nlenau.ro">
                  secretariat@nlenau.ro
                </a>
              </li>

              <li>
                Telefon:{" "}
                <a className="black-text" href="tel:+40256201885">
                  (+4) 0256 201 885
                </a>
              </li>
              <li></li>
            </ul>

            <hr />

            <h4>Secția specială | DSA</h4>

            <ul className="no-bullets">
              <li>
                Email:{" "}
                <a
                  className="black-text"
                  href="mailto:dps.b.temeswar@auslandsschulwesen.de"
                >
                  dps.b.temeswar@auslandsschulwesen.de
                </a>
              </li>
              <li>
                Website:{" "}
                <a className="black-text" href="https://www.dsa-temeswar.com/">
                  dsa-temeswar.com
                </a>
              </li>
            </ul>

            <hr />

            <h4>Verein der Freunde der Lenauschule</h4>

            <ul className="no-bullets">
              <li>
                Website:{" "}
                <a
                  className="black-text"
                  href="https://www.lenauschule.eu"
                >
                  lenauschule.eu
                </a>
              </li>
              <h5 style={{marginTop: "3%"}}>Bankverbingung</h5>
              <li>Sparkasse Karlsruhe: BLZ 660 501 01</li>
              <li>
                Konto Nr.: 108028168
              </li>
              <li>
                IBAN: DE77 6605 0101 0108 0281 68
              </li>
              <li>
              BIC: KARSDE66
              </li>
            </ul>

            <hr/>


          </div>

          <div className="col-lg-6">
            <Map />
          </div>
        </div>
      </section>

      <div className="contact-btn-sec">
        <a href="mailto:n.lenauschule@yahoo.de" className="btn btn-theme">
          <i className="fa-solid fa-envelope"></i> Contactează-ne
        </a>
      </div>
    </div>
  );
};

export default Contact;
