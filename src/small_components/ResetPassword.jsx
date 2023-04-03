import React, {useState} from "react";
import proxy from "./Proxy";

function ResetPassword(props){

    const [password, setPassword] = useState("")


    function handleChange(event){
        setPassword(event.target.value);
    }

    function exit(){
        props.exit({show:false, user: {}})
    }

    function handleSubmit(event){
        const options = {
            method: "POST",
            body: JSON.stringify({
                username: props.user,
                newPassword: password
            }),
            headers: {
                  'Content-type': 'application/json; charset=UTF-8'
                     }
        }

        fetch(proxy + "/acc/resetpassword", options).then( response => response.json()).then(data => {
            alert(data.answ)
            props.exit({show:false})

          }
        )
    }

    return(
        <React.Fragment>
            <div className="container-fluid poza-liceu on-image centerd">
                    <h1 className="form-element">
                        Reset password for: {props.user}
                    </h1>
                    <div className="form-element row">
                        <p className="col-lg-3">new password</p>
                        <input className="col-lg-8" type="text" name="username" value={password} onChange={handleChange}/>
                    </div>

                    <div style={{padding: "0 10%"}}>
                        <button className="form-element" onClick={handleSubmit}>change password</button>
                    </div>
                    <div style={{padding: "0 10%"}}>
                        <button className="form-element btn btin-light" onClick={exit}>back</button>
                    </div>
                    
                </div>
        </React.Fragment>
    );
};

export default ResetPassword;