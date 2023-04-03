import React from "react";
import {useNavigate} from "react-router-dom";
import AdminInterface from "../big_components/admin/AdminInterface";
import Dashboard from "../big_components/admin/Dashboard";

function User(props){

    const navigate = useNavigate();
    
    function logout(){
        props.resetUser();
        navigate('/');
    }
    
    if (props.user){
        return(
            <React.Fragment>

                <div className="navbar-background"/>
                <div className="form-element">
                    <h1>Hello {props.user.username}</h1>
                    <button className="btn btn-light" onClick={logout}>Logout</button>
                </div>

                {props.user.role === "admin" && <AdminInterface/> }
                <Dashboard user={props.user}/>
            
            </React.Fragment>
        );
    } else {
        alert("user not logged in") // DO NOT PUT ";"
        navigate('/login');
    }
    
}

export default User;