import React from "react";
import "./header.css";
//import HomeIcon from "@mui/icons-material/Home";
import PhotoIcon from "@mui/icons-material/Photo";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FaceIcon from "@mui/icons-material/Face";
//Props: - onLogoClick (function) - onProfileClick (function)
// Al pulsar sobre el icono de perfil se deberá mostrar el siguiente contenido bajo el componente NavBar, ocultando el listado de posts
// Al pulsar sobre el logo “Three pics” se mostrará el listado de posts
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
//import { GetPosts } from "../services/PostServices";
import { Search } from "./Search";
import { Profile } from "./Profile";

function Header({ onLogout, user }) {
  const navigate = useNavigate();

  function onLogoClick() {
    console.log("Home");
    navigate("/Home");
  }

  function onProfileClick() {
    if (!user) {
      navigate("/Profile");
      return;
    }
    navigate(`/Profile/${user}`);
  }

  const Logout = () => {
    const { id } = useParams();
    if (user === id) {
      return (
        <div className="d-flex flex-row-reverse">
          <button
            id="btn"
            onClick={onLogout}
            type="button"
            className="btn btn-danger mt-2 mb-2 me-2"
          >
            Logout
          </button>
        </div>
      );
    }
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
              onClick={onLogoClick}
            />

            <div className="header_icons">
              <div className="icons">
                <FaceIcon
                  fontSize="large"
                  alt="Profile"
                  onClick={onProfileClick}
                  className="profile_logo"
                />
              </div>
              <div className="icons">
                <PhotoIcon fontSize="large" />
              </div>
              <div className="icons">
                <FavoriteIcon fontSize="large" />
              </div>

              <div className="App">
                {Logout()}
                <Profile />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
