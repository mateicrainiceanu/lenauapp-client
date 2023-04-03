
import React, {useState, useEffect} from "react";
import proxy from "../../small_components/Proxy";

function EditPerformances(props){

    useEffect(() => {
        fetchPerformances();
        //eslint-disable-next-line
    }, []);

    const [performanceData, setPerformanceData] = useState("null");

    function fetchPerformances() {
        fetch(proxy + '/api/performances').then(response => response.json()
        ).then(data => {setPerformanceData(data)
        });
    }

    function deletePerformance(event){
        const options = {
            method: "POST",
            body: JSON.stringify({performanceId: event.target.name}),
            headers: {
                  'Content-type': 'application/json; charset=UTF-8'
                     }
        }

        fetch(proxy + "/api/performances/delete", options).then(() => {fetchPerformances()})

    };

    return(
        <React.Fragment>

        <div className="director border-card  on-page-centerd editable-addcard director-table ">
            <table className="table">
            <tbody>
                {((performanceData) === 'null') ? (
                    <tr><td>Loading...</td></tr>
                ):(
                    performanceData.performances.map((performance, i) => {
                        return(
                        <tr key={i}>
                            <td>{performance.name}</td>
                            <td><button className="btn btn-light" onClick={deletePerformance} name={performance.id}>Delete</button></td>
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

export default EditPerformances;