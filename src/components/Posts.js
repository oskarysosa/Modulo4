import React from "react";
import "./post.css";
import { Avatar } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";

function Post({ date, likes, autor, img, comments, description }) {
  return (
    <div className="post ">
      <div className="card mx-auto" style={{ width: "30rem" }}>
        <div className="post_header">
          <Avatar className="post_avatar" alt="Random" src="" />
          <h5>{autor}</h5>
        </div>
        <img src={img} className="card-img-top" alt="..." />

        <div className="card-body">
          <p className="card-comm">
            <ModeCommentOutlinedIcon />
            {comments || ""}
          </p>
          <p class="btn btn-sm btn-danger">
            <FavoriteIcon /> {likes || ""}
          </p>
        </div>
        <div className="card-text">
          <p>
            <strong>{autor} </strong>
            {description || ""}
          </p>
        </div>
        <div class="card-footer text-muted">{date || ""}</div>
      </div>
    </div>
  );
}

export default Post;
