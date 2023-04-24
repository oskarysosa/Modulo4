import React from "react";
import "./header.css";
//import HomeIcon from "@mui/icons-material/Home";
import PhotoIcon from "@mui/icons-material/Photo";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FaceIcon from "@mui/icons-material/Face";

import Profile from "./Profile";
import PostsList from "./PostList";
//Props: - onLogoClick (function) - onProfileClick (function)
// Al pulsar sobre el icono de perfil se deberá mostrar el siguiente contenido bajo el componente NavBar, ocultando el listado de posts
// Al pulsar sobre el logo “Three pics” se mostrará el listado de posts

function Header() {
  const onLogoClick = () => {
    console.log("Home");
    <PostsList />;
  };

  const onProfileClick = () => {
    console.log("Profile");
    <Profile />;
  };

  return (
    <div className="Page">
      <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <img
              width={45}
              alt="Logo"
              src="./favicon.ico"
              className="header_logo"
              onClick={() => {
                onLogoClick("./PostList.jsx");
              }}
            />

            <div className="header_icons">
              <div className="icons">
                <FaceIcon
                  fontSize="large"
                  alt="Profile"
                  onClick={() => {
                    onProfileClick({ Profile });
                  }}
                  className="profile_logo"
                />
              </div>
              <div className="icons">
                <PhotoIcon fontSize="large" />
              </div>
              <div className="icons">
                <FavoriteIcon fontSize="large" />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
