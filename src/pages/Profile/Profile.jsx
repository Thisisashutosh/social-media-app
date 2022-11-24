import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Topbar from "../../components/topbar/Topbar";
import Rightbar from "../../components/rightbar/Rightbar";
import "./Profile.css";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImage"
                src="/assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImage"
                src="/assets/person/4.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Ashutosh Dubey</h4>
              <span className="profileInfoDesc">Hello my friends</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}
