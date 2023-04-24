import React from "react";
import "./post.css";
//Vericación de prop
import PropTypes from "prop-types";

// props: - avatar (string) - username (string) - bio (string) // Listo
function Profile(props) {
  return (
    <div className="flex-column mx-auto">
      <div className="profile">
        <div className="post_pic">
          <img
            className="profile-pic"
            src={require(`./img/${props.avatar}`)}
            alt="..."
          />
          <div className="profile-body">
            <p className="card-username">
              <strong> {props.username} </strong>{" "}
            </p>
            <div className="card-bio">
              {" "}
              <p> {props.bio} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  bio: PropTypes.string,
};
