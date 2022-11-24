import React from "react";
import "./Online.css";

export default function Online(props) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImageContainer">
        <img
          className="rightbarProfileImage"
          src={props.user.profilePicture}
          alt=""
        />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{props.user.username}</span>
    </li>
  );
}
