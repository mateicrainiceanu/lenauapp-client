import React, { useState, useEffect } from "react";
import proxy from "../small_components/Proxy";

function Directors() {
  const [directorsData, setDirectorsData] = useState("null");

  useEffect(() => {
    fetch(proxy + "/api/directors")
      .then((response) => response.json())
      .then((data) => {
        setDirectorsData(data);
      });
  }, []);

  return (
    <React.Fragment>
      <section id="conducere">
        <div className="">
          <table>
          <tbody>
            {directorsData === "null" ? (
            <tr><td>Loading...</td></tr>
          ) : (
            directorsData.directors.map((director, i) => (
                <tr key={i}>
                    <td>{director.name}</td>
                    <td>{director.role}</td>
                </tr>
            ))
          )}
          </tbody>
          </table>
          
        </div>
      </section>
    </React.Fragment>
  );
}

export default Directors;
