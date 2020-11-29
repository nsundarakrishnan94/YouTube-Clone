import React from 'react';
import './VideoCard.css';
import Avatar from '@material-ui/core/Avatar';


function VideoCard({image, title, channel,views, timestamp, channelImg}) {
    return (
        <div className="videoCard">
            <img src={image} alt="image_thubnail" className="videoCard__thumbnail"/>
            <div  className="videoCard__info">
                 <Avatar className="videoCard__avatar" alt={channel} src={channelImg}/>
            <div className="videoCard__text">
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>{views}.{timestamp}</p>
            </div>
            </div>

        </div>
    )
}

export default VideoCard
