import React, { useState } from "react";
import "./post.css";
import { Avatar } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
//Vericación de prop
import PropTypes from "prop-types";

//Props: - createdAt (Date) - autor (string) - text (string) - comments (number) - image (string) // Listo
//State: - likes (number) // Listo
//El botón “Me Gusta” deberá incrementar el contador de likes sobre el post// Listo
function Post(props) {
  const [likes, setLikes] = useState(0);

  const handleClick = (ev) => {
    setLikes(likes + 1);
  };

  return (
    <div className="post">
      <div className="card mx-auto">
        <div className="post_header">
          <Avatar className="post_avatar" alt="Random" src="" />
          <h5>{props.autor}</h5>
        </div>
        <img src={props.img} className="card-img-top" alt="..." />

        <div className="card-body">
          <p className="card-comm">
            <ModeCommentOutlinedIcon />
            {props.comments} Comments
          </p>
          <p className="btn btn-sm btn-danger">
            <FavoriteIcon onClick={handleClick} />
            {likes}
          </p>
        </div>
        <div className="card-text">
          <p>
            <strong>{props.autor} </strong>
            {props.text}
          </p>
        </div>
        <div className="card-footer text-muted"> {Date(props.createdAt)}</div>
      </div>
    </div>
  );
}

export default Post;

//Props: - createdAt (Date) - autor (string) - text (string) - comments (number) - image (string)
Post.propTypes = {
  autor: PropTypes.string,
  text: PropTypes.string,
  comments: PropTypes.number,
  image: PropTypes.string,
  createdAt: PropTypes.instanceOf(Date),
};
