import axios from "axios";
import React, {useState} from "react";
import proxy from "../../small_components/Proxy";

function UploadNews(props) {

    const [newsData, setNewsData] = useState({newsName: "", paragraph: "", filelink:"", owner:props.user._id})
    const [file, setFile] = useState(null)
    const [status, setStatus] = useState("")

    function reload(){
        window.location.reload(false);
    }

    function handleChange (event) {
        setNewsData((prevData) => ({...prevData, [event.target.name]: event.target.value}))
    }

    function handleFileChange (event) {
        setFile(event.target.files[0])
    }

    function handleSubmit() {

        const date = Date.now().toString()+""
        const fileName = date + file.name;

        const fd = new FormData();
        fd.append("file", file)

        const URL = proxy + "/api/upload?name=" + date
        axios.post(URL, fd, {}).then(response => {
        })

        const options = {
            method: "POST",
            body: JSON.stringify({
                news:newsData,
                filename:fileName
            }),
            headers: {
                  'Content-type': 'application/json; charset=UTF-8'
                     }
        }

        fetch(proxy + "/api/news/new", options).then( response => response.json()
        ).then (
          data => {
            setStatus(data.answ);
            setNewsData({newsName: "", paragraph: "", filelink:"", user:props.user._id});
            setFile(null);
            reload();
          }
        )
    }

    return(
        <React.Fragment>
            <div className="director border-card  on-page-centerd editable-addcard">
                <h1>Add something to the news-section</h1>
                <div className="row"> 
                    <div className="col-lg-2"><p>Title</p></div>
                    <div className="col-lg-10"><input name="newsName" className="form-element" onChange={handleChange} value={newsData.newsName}/></div>
                </div>
                <div className="row"> 
                    <div className="col-lg-2"><p>text</p></div>
                    <div className="col-lg-10"><textarea name="paragraph" className="form-element" onChange={handleChange} value={newsData.paragraph}/></div>
                </div>
                <input type="file" onChange={handleFileChange} />
                <button className="form-element btn btn-light" onClick={handleSubmit}>SUBMIT</button>
                <p>{status}</p>
            </div>
        </React.Fragment>
    );
}

export default UploadNews;