import React, {useState} from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

function Header() {

const [inputSearch, setInputSearch] = useState("");



    return (
        <div className="header">
        <div className="header__left">
        <MenuIcon/>
          
           <Link to={`/`}>
           <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="Youtube_logo"/>
           </Link>


        </div>



        <div className="header__center">
        <input type="text" value={inputSearch} onChange={e=>setInputSearch(e.target.value)} placeholder="Search"></input>
        
        
        <Link to={`/search/${inputSearch}`}>
        <SearchIcon className="header__searchbtn"></SearchIcon>
        </Link>
        
        </div>

          
        
        <div className="header__right">
        
           <VideoCallIcon className="header__right"/>
           <AppsIcon className="header__right"/>
           <NotificationsIcon className="header__right"/>
           <Avatar alt="Remy Sharp" src="https://www.facebook.com/photo?fbid=2940611892641700&set=a.143645292338388" />
           
        
        </div>
          
           
        </div>
    )
}

export default Header
