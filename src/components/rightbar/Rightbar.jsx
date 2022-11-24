import React from "react";
import "./Rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar(props) {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImage" src="/assets/gift.png" alt="" />
          <span className="birthdaText">
            <b>Bill </b>and <b>3 other friends</b> have birthday today
          </span>
        </div>
        <img className="rightbarAd" src="/assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Its Complicated</span>
          </div>
        </div>
        <h4 className="rightbarTitle">Followers</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImage"
              src="/assets/person/1.jpeg"
              alt=""
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImage"
              src="/assets/person/2.jpeg"
              alt=""
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImage"
              src="/assets/person/3.jpeg"
              alt=""
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImage"
              src="/assets/person/5.jpeg"
              alt=""
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImage"
              src="/assets/person/6.jpeg"
              alt=""
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImage"
              src="/assets/person/7.jpeg"
              alt=""
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
       {props.profile? <ProfileRightBar/>:<HomeRightBar/>}
      </div>
    </div>
  );
}
