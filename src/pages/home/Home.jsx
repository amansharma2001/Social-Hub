import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <>
    
        <Topbar/>
        <div className="homeContainer">
          <Leftbar/>
          <Feed/>
          <Rightbar/>
        </div>
    </>
  )
}
