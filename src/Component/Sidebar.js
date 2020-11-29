import React from 'react';
import SidebarRow from "./SidebarRow";
import HomeIcon from '@material-ui/icons/Home';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import "./Sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">
           <SidebarRow selected Icon ={HomeIcon} title="Home"/>
           <SidebarRow Icon={TrendingUpIcon} title="Trending"/>
           <SidebarRow Icon={SubscriptionsIcon} title="Subscription"/>
            <hr/>
           <SidebarRow title="Library"/>
           <SidebarRow title="History"/>
           <SidebarRow title="Your Videos"/>
           <SidebarRow title="Watch Later"/>
           <SidebarRow title="Liked Videos"/>
           <SidebarRow title="Show More"/>
           
        </div>
    )
}

export default Sidebar
