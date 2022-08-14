import Post from "../newpost/Post";
import Share from "../share/Share";
import "./feed.css";
import {Posts } from "../../data";


export default function Feed() {
  return (
    <div className="feed">
        <div className="feedWrapper">
          <Share></Share>
          {Posts.map(p=>(
            <Post key={p.id} post={p}/>
          ))}
          
        </div>
    </div>
  )
};
