import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import proxy from "../small_components/Proxy";

function Login(props){

    const [userData, setUserData] = useState({username:"", password:""});
    const [status, setStatus] = useState(null);

    const navigate = useNavigate();

    function handleChange(event){
        setUserData((prevData) => ({...prevData, [event.target.name]:event.target.value}));
    };

    function handleSubmit(event){
        const options = {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                  'Content-type': 'application/json; charset=UTF-8'
                     }
        }

        fetch(proxy + "/acc/login", options).then( response => response.json()).then(data => {
            if (data.status === "ok"){
                props.setUser(data.user);
                navigate('/user');
            } else {
                setStatus(data.status)
            }
            setUserData({username: "", password:""});        
          }
        )
    }

    return(
        <React.Fragment>

                <div className="on-image centerd login-form form-padding">
                    <h1 className="form-element">
                        Login
                    </h1>
                    <div className="form-element row">
                        <p className="col-lg-3">username</p>
                        <input className="col-lg-8" type="text" name="username" value={userData.username} onChange={handleChange}/>
                    </div>

                    <div className="form-element row">
                        <p className="col-lg-3">password</p>
                        <input className="col-lg-8" type="password" name="password" value={userData.password} onChange={handleChange}/>
                    </div>

                    {status && <p className="form-element">{status}</p>}

                    <div style={{padding: "0 10%"}}>
                        <button className="form-element btn btn-light" onClick={handleSubmit}>Login</button>
                    </div>
                    
                </div>

        </React.Fragment>
    )
}

export default Login;