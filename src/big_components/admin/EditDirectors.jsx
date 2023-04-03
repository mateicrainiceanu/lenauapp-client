
import React, {useState, useEffect} from "react";
import proxy from "../../small_components/Proxy";

function EditDirectors(props){

    const [directorsData, setDirectorsData] = useState("null");

    useEffect(() => {
        fetchDirectors();
    }, []);


    function fetchDirectors(){
        fetch(proxy + "/api/directors").then( response => response.json()
        ).then (
          data => {
            setDirectorsData(data);
          }
        )
    }

    function deleteDirector(event){
        const options = {
            method: "POST",
            body: JSON.stringify({directorId: event.target.name}),
            headers: {
                  'Content-type': 'application/json; charset=UTF-8'
                     }
        }

        fetch(proxy+"/api/directors/delete", options).then(() => { fetchDirectors()})

    };

    return(
        <React.Fragment>
        <div className="director border-card  on-page-centerd editable-addcard director-table ">
            <table className="table">
            <tbody>
                {((directorsData) === 'null') ? (
                    <tr><td>Loading...</td></tr>
                ):(
                    directorsData.directors.map((director, i) => {
                        return(
                        <tr key={i}>
                            <td>{director.indexx}</td>
                            <td>{director.name}</td>
                            <td>{director.role}</td>
                            <td><button className="btn btn-light" onClick={deleteDirector} name={director.id}>Delete</button></td>
                        </tr>
                        );
                    })
                )}
                </tbody>
            </table>

            </div>
                    
        </React.Fragment>
    );
}

export default EditDirectors;