import React from 'react'
import { Link } from 'react-router-dom'
import "./DropDown.css";
import { useState } from 'react';
const DropDown = () => {

    const [state, setstate] = useState(false);
    const showDropDown=()=>{
        setstate(true);
    }

    const hideDropDown=()=>{
        setstate(false);
    }

  return(
    <div className='dropdown'>

        <div className="dropdown-menu" onMouseEnter={showDropDown} onMouseLeave={hideDropDown}>
            <img src="/assests/person/1.jpeg" alt="" className="topbarImg" />
            <div >
                {state ? (<ul onMouseEnter={showDropDown}>
                <Link to="/profile">
                    <li>Profile</li>
                </Link>
                <Link to="/login">
                    <li>Log Out</li>
                </Link>
                
            </ul>):
            null}
            </div>
            
            
        </div>
    </div>
  )
}

export default DropDown