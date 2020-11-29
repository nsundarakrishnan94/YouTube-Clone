import React from 'react';
import './Recommended.css';
import VideoCard from './VideoCard';

function Recommended() {
    return (
        <div className="recommended">
            <h2>Recommended</h2>

            <div className="recommended__videos">
            
            <VideoCard
             title="iPhone 11 Pro Unboxing | MKBHD " 
             views="3M Views"
             timestamp="10 days ago"
             channelImg="https://www.adweek.com/wp-content/uploads/2019/11/Marques-Brownlee-talentpool-content-2019.png"
             channel="MKBHD"
             image="https://piunikaweb.com/wp-content/uploads/2018/12/mkbhd.png "
            />
            

            <VideoCard
            title="PS5 Detailed review | MKBHD " 
            views="4.3M Views"
            timestamp="2 months ago"
            channelImg="https://www.adweek.com/wp-content/uploads/2019/11/Marques-Brownlee-talentpool-content-2019.png"
            channel="MKBHD"
            image="https://i.ytimg.com/vi/QKyul7puruQ/maxresdefault.jpg"
           />


           <VideoCard
             title="Casey's STUPID NEW LOOK Explained" 
             views="10.9M Views"
             timestamp="1 days ago"
             channelImg="https://yt3.ggpht.com/a/AATXAJwLbxJv9EKIMgbqlxz5cqe390QrZoBmbccgVwVhLA=s900-c-k-c0xffffffff-no-rj-mo"
             channel="Casey Neistat"
             image="https://i.ytimg.com/vi/xp_hlUxJSI4/maxresdefault.jpg"
            />


            <VideoCard
             title="Original 2007 iPhone Unboxing!!! " 
             views="1.5M Views"
             timestamp="17 days ago"
             channelImg="https://s.yimg.com/ny/api/res/1.2/LuXWP8D007DJVXLGHzUHFw--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/people_218/f028ec07f449eb361049464394447746"
             channel="iJustine"
             image="https://i.ytimg.com/vi/4HX6R88QZB0/maxresdefault.jpg"
            />


            <VideoCard
             title="iPhone 11 Pro vs 11 Pro Max | MKBHD " 
             views="3M Views"
             timestamp="10 days ago"
             channelImg="https://s.yimg.com/ny/api/res/1.2/LuXWP8D007DJVXLGHzUHFw--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/people_218/f028ec07f449eb361049464394447746"
             channel="iJustine"
             image="https://i.ytimg.com/vi/HFFVIalG_nk/maxresdefault.jpg"
            />


            <VideoCard
             title="Wyoming | Beautiful Destinations " 
             views="3M Views"
             timestamp="1 year ago"
             channelImg="https://i.ytimg.com/vi/Sn4chRofSRY/maxresdefault.jpg"
             channel="Beautiful Destinations"
             image="https://i.ytimg.com/vi/Sn4chRofSRY/maxresdefault.jpg"
            />


            <VideoCard
             title="Top 10 places to visit in 2020 | Beautiful Destinations " 
             views="546k Views"
             timestamp="1 days ago"
             channelImg="https://i.ytimg.com/vi/Sn4chRofSRY/maxresdefault.jpg"
             channel="Beautiful Destinations"
             image="https://i.ytimg.com/vi/XwvZE3mSgas/maxresdefault.jpg"
            />





            </div>
        </div>
    )
}

export default Recommended
