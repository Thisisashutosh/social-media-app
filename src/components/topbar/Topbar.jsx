import React from "react";
import {useNavigate} from "react-router-dom"
import "./Topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";

export default function Topbar() {
  const navigate = useNavigate();
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span onClick={()=>navigate("/")} className="logo">Ashutosh Social</span>
      </div>

      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input placeholder="Search" className="searchInput" />
        </div>
      </div>

      <div className="topbarRight">
        <div className="topbarLinks">
          <span onClick={()=>navigate("/login")} className="topbarLink">Log in</span>
          <span onClick={()=>navigate("/register")} className="topbarLink">Register</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
          </div>
          <div className="topbarIconItem">
            <Chat />
          </div>
          <div className="topbarIconItem">
            <Notifications />
          </div>
        </div>
        <img onClick={()=>navigate("/profile")} src="/assets/person/1.jpeg" alt="Profile_picture" className="topbarImg"/>
      </div>
    </div>
  );
}
