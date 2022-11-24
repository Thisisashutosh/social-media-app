import React, { useState } from "react";
import "./Post.css";
import { MoreHoriz } from "@mui/icons-material";
import { Users } from "../../dummyData";

export default function Posts(props) {
  const [like, setLike] = useState(props.post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImage"
              src={
                Users.filter((u) => u.id === props.post.userId)[0]
                  .profilePicture
              }
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === props.post.userId)[0].username}
            </span>
            <span className="postDate">{props.post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreHoriz />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">
            {props.post?.desc}
            <img className="postImage" src={props.post.photo} alt="not found" />
          </span>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              onClick={likeHandler}
              src="/assets/like.png"
              alt=""
            />
            <img
              className="heartIcon"
              onClick={likeHandler}
              src="/assets/heart.png"
              alt=""
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">
              {props.post.comment} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
