import React, {useState} from "react";
import NewDirector from "./NewDirector";
import EditDirectors from "./EditDirectors";
import CreateUser from "./CreateUser";
import EditUsers from "./EditUsers";
import ResetPassword from "../../small_components/ResetPassword";

function AdminInterface(){
    
    const [resetPassword, setResetPassword] = useState({
        show: false,
        user: "test"
    });

    return (
        <React.Fragment>

        {resetPassword.show && <ResetPassword user={resetPassword.user} exit={setResetPassword} />}

        <div className="row">
            <div className="col-lg-6">
                <CreateUser/>
            </div>
            <div className="col-lg-6">
                <EditUsers resetPassword={setResetPassword}/>
            </div>
        </div>
        <div className="navbar-background"></div>
        <div className="row">
            <div className="col-lg-6">
                <EditDirectors/>
            </div>
            <div className="col-lg-6">
                <NewDirector/>
            </div>
        </div>

        <hr></hr>


        
        
                        

        </React.Fragment>
    );
}

export default AdminInterface;