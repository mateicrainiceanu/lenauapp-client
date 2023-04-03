import React from "react";
import NewPerformance from "./NewPerformance";
import EditPerformances from "./EditPerformances";
import EditNews from "./EditNews";
import UploadNews from "./UploadNews";

function Dashboard(props){

    return(
        <React.Fragment>
            <div className="navbar-background"></div>
        <div className="row">
            <div className="col-lg-6">
                <EditNews user={props.user}/>
            </div>
            <div className="col-lg-6">
                <UploadNews user={props.user}/>
            </div>
        </div>
        <div className="navbar-background"></div>
        <div className="row">
            <div className="col-lg-6">
                <EditPerformances user={props.user}/>
            </div>
            <div className="col-lg-6">
                <NewPerformance user={props.user}/>
            </div>
        </div>
        <div className="navbar-background"></div>
        </React.Fragment>
    );
}

export default Dashboard;