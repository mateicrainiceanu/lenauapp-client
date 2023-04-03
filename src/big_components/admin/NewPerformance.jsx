import React, {useState} from "react";
import axios from "axios";
import proxy from "../../small_components/Proxy";

function NewDirector(props){

    const [performanceData, setPerformanceData] = useState({name: "", paragraph1:"", paragraph2:"", paragraph3:"", paragraph4:"", owner:props.user._id});
    const [performanceStatus, setPerformanceStatus] = useState("");
    const [file, setFile] = useState(null);

    function reload(){
        window.location.reload(false);
    }

    function handleChange(event){
        setPerformanceData(prevData=> ({...prevData, [event.target.name]:event.target.value}));
    }

    function handleFileChange(event){
        setFile(event.target.files[0]);
    }

    function savePerformance(){
        const date = Date.now().toString()+""
        const fileName = date + file.name;

        const fd = new FormData();
        fd.append('file', file);

        const URL = proxy + "/api/upload?name=" + date;
        axios.post(URL, fd, {});

        const options = {
            method: "POST",
            body: JSON.stringify({
                performance: performanceData,
                imgname: fileName
            }),
            headers: {
                  'Content-type': 'application/json; charset=UTF-8'
                     }
        }
 
        fetch(proxy+"/api/performance/new", options).then( response => response.json()
        ).then (
          data => {
            setPerformanceStatus(data.answ);
            setPerformanceData({name: "", paragraph1:"", paragraph2:"", paragraph3:"", paragraph4:"", imgname:"", owner:props.user._id});
            reload();
          }
        )
    };

    return(
        <div className="director border-card  on-page-centerd editable-addcard">
                                <h1 className="form-element">New Performance</h1>
                                <div className="form-element row"><p className="col-lg-2 ">Name</p><input className="col-lg-10" type="text" onChange={handleChange} name="name" value={performanceData.name} /></div>
                                <div className="form-element row"><p className="col-lg-3 ">paragraph1</p><textarea className="col-lg-9" onChange={handleChange} name="paragraph1" value={performanceData.paragraph1} /></div>
                                <div className="form-element row"><p className="col-lg-3 ">paragraph2</p><textarea className="col-lg-9" onChange={handleChange} name="paragraph2" value={performanceData.paragraph2} /></div>
                                <div className="form-element row"><p className="col-lg-3 ">paragraph3</p><textarea className="col-lg-9" onChange={handleChange} name="paragraph3" value={performanceData.paragraph3} /></div>
                                <div className="form-element row"><p className="col-lg-3 ">paragraph4</p><textarea className="col-lg-9" onChange={handleChange} name="paragraph4" value={performanceData.paragraph4} /></div>
                                <input type="file" name="img" onChange={handleFileChange}/>
                                <button className="form-element btn btin-light" onClick={savePerformance}>Submit</button>
                                <p>{performanceStatus}</p>
                                </div>
    );
}

export default NewDirector;