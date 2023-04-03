import React, {useState, useEffect} from "react";
import Performance from "../small_components/Performance";
import proxy from "../small_components/Proxy";

function Performances(){
    const [performanceData, setPerformanceData] = useState("null");
    
    useEffect(() => {
        fetch(proxy + '/api/performances').then(response => response.json()
        ).then(data => {
            setPerformanceData(data)
        });
        
    }, []);

    return(
        <React.Fragment>
        <section id="performances">
        <h1 className="text-crem padding-top">Cluburi și activități extrașcolare</h1>
        {(performanceData === 'null') ? (
        <p>Loading...</p>
        ):( performanceData.performances.map((performance, i) => (
        <Performance key={i} name={performance.name} paragraphs={performance.paragraphs} imglink={performance.imglink}/>
        ))
        )} 
        </section>
        

        </React.Fragment>
    );

    

};

export default Performances