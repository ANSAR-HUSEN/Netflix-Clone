import React, { useEffect, useState } from "react";
import "./header.css";
import logo from "../../assets/images/logo.png";
 import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'; 


function Header() {
  const [show, setShow] = useState(false);
  useEffect(()=>{
    window.addEventListener("scroll" , ()=>{
      if(window.screenY > 100){
        setShow(true);
      }else setShow(false);
    });

    return ()=> {
      // window.removeEventListener("scroll");
    }



  } , []);


  return (
    <>
      <div className={`outer-wrapper ${show && "nav__black"}`}>
       <div className='inner-wrapper '>
       <div className="header-left">
          <ul>
            <li className="logo">
              <img src={logo} alt="netflix logo" />
            </li>
            <li>
            Netflix
            </li>
            <li>
             Home
            </li>
            <li>
            TvShows
            </li>

            <li>
            Movies
            </li>
            <li>
            Latest
            </li>
            <li>
            MyList
            </li>
            <li>
            Browse by Langueges
            </li>
          </ul>
        </div>
        <div className="header-right">
            <ul>
                <li><SearchIcon/></li>
                <li><NotificationsNoneIcon/></li>
                <li><AccountBoxIcon/></li>
                <li><ArrowDropDownIcon/> </li>
            </ul>

        </div>
       </div>
      </div>
    </>
  );
}

export default Header;
