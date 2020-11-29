import React from 'react';
import './ChannelRow.css';
import { Avatar } from '@material-ui/core';
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";


function ChannelRow({image,name,verified,subscription,numberOfVideos,desc}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo" alt={name} src={image}/>
            <div className="ChannelRow__text">
            <h4>{name}  {verified && <VerifiedIcon/>}</h4>
            <p>{subscription} subscribers . {numberOfVideos} Videos</p>
            <p>{desc}</p>
           
            </div>
            
        </div>
    )
}

export default ChannelRow
