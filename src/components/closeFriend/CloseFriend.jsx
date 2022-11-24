import React from "react";
import "./CloseFriend.css";

export default function CloseFriend(props) {
  return (
    <li className="sidebarFriend">
      <img
        className="sidebarFriendImage"
        src={props.closeFriend.profilePicture}
        alt=""
      />
      <span className="sidebarFriendName">{props.closeFriend.username}</span>
    </li>
  );
}
