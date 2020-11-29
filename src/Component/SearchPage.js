import React from 'react';
import './SearchPage.css';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';

function SearchPage() {
    return (
        <div className="searchPage">
        <div className="searchPage__filter">
        <TuneOutlinedIcon></TuneOutlinedIcon>
        <h2>FILTER</h2>
        </div>
        <hr/>
            
        <ChannelRow
        image="https://www.adweek.com/wp-content/uploads/2019/11/Marques-Brownlee-talentpool-content-2019.png"
        name="MKBHD"
        verified
        subscription="10M"
        numberOfVideos={356}
        desc="You can find all kind of tech and gadget reviews/unboxing here "
        />

        <hr/>

        <VideoRow
        views="5M"
        timestamp="2 months ago"
        subs="10M"
        desc="Samsung galaxy Note 10 Unboxing | MKBHD"
        channel="MKBHD"
        title="Samsung galaxy Note 10 Unboxing | MKBHD"
        image="https://www.adweek.com/wp-content/uploads/2019/11/Marques-Brownlee-talentpool-content-2019.png"/>


        <VideoRow
        views="5M"
        timestamp="1 months ago"
        subs="10M"
        desc="Which Smartphone is the best on 2020  | MKBHD"
        channel="MKBHD"
        title="Which Smartphone is the best on 2020 | MKBHD"
        image="https://i.insider.com/5aa6e1163be59f2a008b47a4?width=1700&format=jpeg&auto=webp"/>

        <VideoRow
        views="5M"
        timestamp="10 years months ago"
        subs="10M"
        desc="Curious to know what's Inside in my cupboard | MKBHD"
        channel="MKBHD"
        title="Whats inside in my cupboard  | MKBHD"
        image="https://i.ytimg.com/vi/ya7VlofjdwY/maxresdefault.jpg"/>

        <VideoRow
        views="5M"
        timestamp="2 months ago"
        subs="10M"
        desc="get ready to fly on 5G network | MKBHD"
        channel="MKBHD"
        title="5G Network is Up | MKBHD"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYq91yHFF5kbz19Jv_4Z5IDMhx47cb9pIEiA&usqp=CAU"/>

        <VideoRow
        views="5M"
        timestamp="2 months ago"
        subs="10M"
        desc=" iPhone XR detailed review and unboxing | MKBHD"
        channel="MKBHD"
        title="iPhone XR Unboxing | MKBHD"
        image="https://im.indiatimes.in/content/2020/Feb/AMP_5e555c780d077.jpg"/>

        <VideoRow
        views="5M"
        timestamp=" 17 days ago"
        subs="10M"
        desc="Marques Brownlee (MKBHD) supports PewDiePie  | MKBHD"
        channel="MKBHD"
        title="Marques Brownlee (MKBHD) supports PewDiePie | MKBHD"
        image="https://piunikaweb.com/wp-content/uploads/2018/12/mkbhd.png"/>





        </div>
    )
}

export default SearchPage

