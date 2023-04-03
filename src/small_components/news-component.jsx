import React from "react";
import proxy from "./Proxy";

function NewsComponent(props){

    return(
        <React.Fragment>
        
            <div className="col-lg-3 col-md-4 col-sm-12">
                <div className="border-card news-card">
                    <h2>{props.name}</h2>
                    <hr/>
                    <p>{props.paragraph}</p>
                    <hr/>
                    <a href={proxy+"file?name="+props.link}>File</a>
                </div>
            </div>
        </React.Fragment>

    );
}

export default NewsComponent;