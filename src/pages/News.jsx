import React, {useState, useEffect} from "react";
import NewsComponent from "../small_components/news-component";
import {useParams} from 'react-router-dom'
import proxy from "../small_components/Proxy";

function News(props){



    let { category } = useParams();

    var newscategory = category || ":general";

    newscategory = newscategory.substring(1);

    const [news, setNews] = useState("null");

    useEffect(() => {
        const options = {
            method: "POST",
            body: JSON.stringify({
                filter:{},
                skip: 0,
                limit: props.limit,
                category: newscategory || "general"
            }),
            headers: {
                  'Content-type': 'application/json; charset=UTF-8'
                     }
        }

        fetch(proxy + '/api/news', options).then(response => response.json()
        ).then(data => {setNews(data)}
        );
        //eslint-disable-next-line
    }, []);



    return(
        <React.Fragment>
        <section id="news-cards">
        {props.navbarbg && <div className="navbar-background"></div>}


        <div className="row">

                {((news) === 'null') ? (
                        <p>Loading...</p>
                    ):(
                        news.news.map((newsComp, i) => (
                            <NewsComponent key={i} name={newsComp.name} paragraph={newsComp.paragraph} link={newsComp.link}/>
                        ))
                    )}

                    </div>
                    </section>

        </React.Fragment>
    );
}

export default News;