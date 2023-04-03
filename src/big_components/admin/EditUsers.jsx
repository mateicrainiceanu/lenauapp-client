
import React, {useState, useEffect} from "react";
import proxy from "../../small_components/Proxy";


var skip = 0;

function EditUsers(props){

    const [usersData, setUsersData] = useState("null");
    const [button, setButton]=useState(true);

    useEffect(() => {
        skip = 0;
        fetchUsers(0);
    }, []);


    function fetchUsers(skipNumber){
        const options = {
            method: "POST",
            body: JSON.stringify({skip: skipNumber, limit:skipNumber+5}),
            headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                    }
        }

        fetch(proxy + "/api/users", options).then( response => response.json()
        ).then (
          data => {
            setUsersData(data);
          }
        )
    }
    function deleteUser(event){

        console.log(event.target.name);
        const options = {
            method: "POST",
            body: JSON.stringify({userId: event.target.name}),
            headers: {
                  'Content-type': 'application/json; charset=UTF-8'
                     }
        }

        fetch(proxy+"/acc/delete", options).then(() => {fetchUsers(0)})

    };

    function resetPassword(event){
        props.resetPassword({
            show: true,
            user: event.target.name
        })
    }

    function show(event){
        if (event.target.name === "prev" && skip >= 5){;
            skip = skip - 5;
            if (skip===0)
                setButton(true)
            fetchUsers(skip);
        }else{
            skip = skip + 5;
            if(skip>=5)
                setButton(false)
            fetchUsers(skip);
        }
    }

    return(
        <React.Fragment>
        <div className="director border-card  on-page-centerd editable-addcard director-table ">
            <table className="table">
            <tbody>
                {((usersData) === 'null') ? (
                    <tr><td>Loading...</td></tr>
                ):(
                    usersData.users.map((user, i) => {
                        return(
                        <tr key={i}>
                            <td>{user.username}</td>
                            <td>{user.role}</td>
                            <td><button className="btn btn-light" onClick={resetPassword} name={user.username}>reset password</button></td>
                            <td><button className="btn btn-light" onClick={deleteUser} name={user.id}>Delete</button></td>
                        </tr>
                        );
                    })
                )}
                </tbody>
            </table>
            
            <button disabled={button} className="btn btn-light" onClick={show} name="prev">Prev</button>
            <button className="btn btn-light" onClick={show} name="next">Next</button>


            </div>
                    
        </React.Fragment>
    );
}

export default EditUsers;