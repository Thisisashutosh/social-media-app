import React from "react";
import "./Sidebar.css";
import { Users } from "../../dummyData";
import {
  RssFeed,
  Chat,
  VideoFile,
  Group,
  Bookmark,
  Help,
  Work,
  Event,
} from "@mui/icons-material";
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="listItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="listItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">chat</span>
          </li>
          <li className="listItem">
            <VideoFile className="sidebarIcon" />
            <span className="sidebarListItemText">video</span>
          </li>
          <li className="listItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Group</span>
          </li>
          <li className="listItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">bookmark</span>
          </li>
          <li className="listItem">
            <Help className="sidebarIcon" />
            <span className="sidebarListItemText">questions</span>
          </li>
          <li className="listItem">
            <Work className="sidebarIcon" />
            <span className="sidebarListItemText">job</span>
          </li>
          <li className="listItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">events</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} closeFriend={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
