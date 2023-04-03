import React from 'react';
import proxy from './Proxy';

function Performance(props){

    const paragraphs = JSON.parse(props.paragraphs)

    return(
        <div className="performance">
      <div className="row">
          <div className="col-lg-6">
            <h1>{props.name}</h1>
            <hr/>
            {paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
            ))}

          </div>
          <div className="col-lg-6">
            <img className="performance-img centerd" src={proxy + "/file?name=" + props.imglink} alt="robotics team"/>
          </div>
      </div>
    </div>

    );
}

export default Performance;


