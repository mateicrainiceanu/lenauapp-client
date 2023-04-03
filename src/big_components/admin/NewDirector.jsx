import React, { useState } from "react";
import proxy from "../../small_components/Proxy";

function NewDirector(props) {
  const [directorData, setDirectorData] = useState({ name: "", role: "", index: 0.00 });
  const [directorStatus, setDirectorStatus] = useState("");

  function handleChange(event) {
    setDirectorData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function reload() {
    window.location.reload(false);
  }

  function saveDirector() {

    const options = {
      method: "POST",
      body: JSON.stringify({
        directorData: directorData
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    fetch(proxy+"/api/directors/new", options)
      .then((response) => response.json())
      .then((data) => {
        setDirectorStatus(data.answ);
        setDirectorData({ name: "", role: "", citat: "", imgname: "" });
        reload();
      });
  }

  return (
    <div className="director border-card  on-page-centerd editable-addcard">
      <div className="square-portrait-replacement">
        <svg
          style={{ height: "100px" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path d="M336 0h-288c-26.51 0-48 21.49-48 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48v-416C384 21.49 362.5 0 336 0zM192 128c35.35 0 64 28.65 64 64s-28.65 64-64 64S128 227.3 128 192S156.7 128 192 128zM288 384H96c-8.836 0-16-7.164-16-16C80 323.8 115.8 288 160 288h64c44.18 0 80 35.82 80 80C304 376.8 296.8 384 288 384z" />
        </svg>
      </div>
      <h1 className="form-element">Conducere nou</h1>
      
      <div className="form-element row">
        <p className="col-lg-2 ">Name</p>
        <input
          className="col-lg-10"
          type="text"
          onChange={handleChange}
          name="name"
          value={directorData.name}
        />
      </div>
      <div className="form-element row">
        <p className="col-lg-2 ">role</p>
        <input
          className="col-lg-10"
          type="text"
          onChange={handleChange}
          name="role"
          value={directorData.role}
        />
      </div>

        <p>Pentru a afișa un membru nou, între 2 membri existenți în lista, acesta va primi index între cele două numere index ale membrilor existenși: ex: între 1 și 2, un nou membru va primi 1.5. ex2: Între 1.5 și 2, un nou membru va primi 1.75. </p>

      <div className="form-element row">
        <p className="col-lg-2 ">index</p>
        <input
          className="col-lg-10"
          type="number"
          step="any"
          onChange={handleChange}
          name="index"
          value={directorData.index}
        />
      </div>
      <button className="form-element btn btn-light" onClick={saveDirector}>
        Submit
      </button>
      <p>{directorStatus}</p>
    </div>
  );
}

export default NewDirector;
