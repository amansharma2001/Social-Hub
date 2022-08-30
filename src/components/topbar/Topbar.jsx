import "./topbar.css";
import {Search,Person,Chat,Notifications} from "@mui/icons-material";
import { Link } from "react-router-dom";
import DropDown from "../Dropdown/DropDown";

export default function Topbar(){



    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">
                <Link to="/" className="homepage">
                        SocialHub
                    </Link>
                </span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input placeholder="Search for friends, posts or videos" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">
                    <Link to="/" className="homepage">
                        Homepage
                    </Link>
                        
                    </span>
                    <span className="topbarLink">Timeline</span>

                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>  
                <Link to="/profile">
            <img src="/assests/person/1.jpeg" alt="" className="topbarImg" />

                </Link>
            </div>
        </div>
    )
}