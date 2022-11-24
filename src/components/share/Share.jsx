import React from "react";
import "./Share.css";
import {
  PermMedia,
  Label,
  LocationOn,
  EmojiEmotions,
} from "@mui/icons-material";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImage"
            src="/assets/person/1.jpeg"
            alt=""
          />
          <input
            placeholder="What's in your mind"
            className="shareInput"
          ></input>
        </div> 
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia className="shareIcon" />
              <span className="shareOptionText">Photo/Video</span>
            </div>
            <div className="shareOption">
              <Label className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <LocationOn className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
