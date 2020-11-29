import React from 'react';
import './videoRow.css';

function VideoRow({views,timestamp,subs,desc,channel,title,image,}) {
    return (
        <div className="videoRow">

        <img src={image} alt=""/>
        <div className="videoRow__text">
        <h3>{title}</h3>
        <p className="videoRow__headline">{channel} . {" "}
        <span className="videoRow__subs">
        <span className="videoRow__subsNo"> {subs}</span> Subscribers
        </span> {" "} {views} views . {timestamp}</p>
       <p className="videoRow__description">{desc}</p>
        </div>
            
        </div>
    )
}

export default VideoRow
