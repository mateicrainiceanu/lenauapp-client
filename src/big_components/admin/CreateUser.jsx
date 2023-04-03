import React, {useState} from "react";
import proxy from "../../small_components/Proxy";
function CreateUser(){

    const [userData, setUserData] = useState({username: "", password:"", admin:false});
    const [status, setStatus] = useState(null)

    function handleChange(event){
        setUserData((prevData) => ({...prevData, [event.target.name]: event.target.value}));
    }

    function createNewUser(event){
        const options = {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                  'Content-type': 'application/json; charset=UTF-8'
                     }
        }

        fetch(proxy+"/api/newuser", options).then( response => response.json()).then(data => {
            setStatus(data);
            setUserData({username: "", password:"", admin:false});
            window.location.reload()        
          }
        )
    }

  

    return(
        <React.Fragment>
            <div className="director border-card  on-page-centerd editable-addcard director-table">
                    <h1 className="form-element">
                        Create User
                    </h1>
                    <div className="form-element row">
                        <p className="col-lg-3">username</p>
                        <input className="col-lg-8" type="text" name="username" value={userData.username} onChange={handleChange}/>
                    </div>

                    <div className="form-element row">
                        <p className="col-lg-3">password</p>
                        <input autoComplete="off" className="col-lg-8" type="password" name="password" value={userData.password} onChange={handleChange}/>
                    </div>
                    <div className="form-element">
                        <input autoComplete="off" type="checkbox" value={userData.admin} onChange={handleChange} name="admin"/>
                        <label>admin</label>
                    </div>

                    {status && <p className="form-element">{status}</p>}

                    <div style={{padding: "0 10%"}}>
                        <button className="form-element btn btn-light" onClick={createNewUser}>create user</button>
                    </div>
                    
                </div>
        </React.Fragment>
    );
}

export default CreateUser;
