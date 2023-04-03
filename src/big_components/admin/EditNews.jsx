import React, {useState, useEffect} from "react";
import proxy from "../../small_components/Proxy";

function EditNews (props) {
    const [news, setNews] = useState("null");

    var filter;

    if (props.user.role === "user"){
        filter = {owner: props.user._id};
    } else {
        filter = {};
    }


    function fetchNews(){
        const options = {
            method: "POST",
            body: JSON.stringify({
                filter:filter,
                category:"any"
            }),
            headers: {
                  'Content-type': 'application/json; charset=UTF-8'
                     }
        }

        fetch(proxy+'/api/news', options).then(response => response.json()
        ).then(data => {setNews(data)}
        );

    }
    // eslint-disable-next-line
    useEffect(() => {
        fetchNews();
            // eslint-disable-next-line
     }, []);

     
    function deleteNews(event){
            const options = {
                method: "POST",
                body: JSON.stringify({newsId: event.target.name}),
                headers: {
                      'Content-type': 'application/json; charset=UTF-8'
                         }
            }
    
            fetch(proxy+"/api/news/delete", options).then(() => {fetchNews()})
    
    }


    return (
    <div className="director border-card  on-page-centerd editable-addcard director-table ">
    <table className="table">
    <tbody>
        {((news === 'null') ? 
                (<tr><td>Loading...</td></tr>)
        :(
            news.news.map((newsComp, i) => {
                return(
                <tr key={i}>
                    <td>{newsComp.name}</td>
                    <td>{newsComp.category}</td>
                    <td><button className="btn btn-light" onClick={deleteNews} name={newsComp.id}>Delete</button></td>
                </tr>
                );
            })
        ))}
        </tbody>
    </table>
    </div>
    );
}

export default EditNews;