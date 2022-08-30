import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
    
        <Topbar/>
        <div className="profile">
          <Leftbar/>
          <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img 
                        className="profileCoverImg"
                        src="assests/post/3.jpeg" 
                        alt="" 
                        />
                    <img 
                        className="profileUserImg" 
                        src="assests/person/1.jpeg" 
                        alt="" 
                        />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Aman Sharma</h4>
                    <span className="profileInfoDesc">Hello my Friends</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed/>
                <Rightbar profile/>
            </div>
          </div>
          
        </div>
    </>
  )
}
