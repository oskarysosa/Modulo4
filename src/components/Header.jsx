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
import { useState, useEffect } from "react";
import { GetPosts } from "../services/PostServices";
import { GetProfile } from "../services/UserServices";
import { Search } from "./Search";
import { Profile } from "./Profile";

function Header({ changeAuth, userData, onLogout, user }) {
  const [searchTxt, setSearchTxt] = useState("");
  const [setPosts] = useState([]);

  useEffect(() => {
    GetPostsData();
  }, []);

  const handleChange = (txt) => {
    setSearchTxt(txt);
  };

  function GetPostsData() {
    GetPosts()
      .then((res) => {
        const revPost = res.data.reverse();
        setPosts(revPost);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          changeAuth(false);
          alert("unauthorized, the session was expired");
        }
      });

    let nav = useNavigate();

    const onLogoClick = () => {
      console.log("Home");
      nav(`/`);
    };

    const onProfileClick = () => {
      if (!user) {
        nav(`/`);
        return;
      }
      nav(`/Profile/${user}`);
    };

    const Logout = () => {
      if (user === id) {
        return (
          <div className="d-flex flex-row-reverse">
            <button
              id="btn"
              onClick={onLogout}
              type="button"
              className="btn btn-primary mt-2 mb-2 me-2"
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
              <Search filterTxt={searchTxt} handleChange={handleChange} />
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
                  <Profile
                    avatar={perfil.avatar}
                    username={perfil.username}
                    bio={perfil.bio}
                  />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }

  const [perfil, setPerfil] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    GetProfileInfo();
  }, []);

  if (perfil.id !== id) {
    GetProfileInfo();
  }

  function GetProfileInfo() {
    GetProfile(id)
      .then((p) => {
        setPerfil(p.data);
      })
      .catch(function (error) {
        if (error.response.status === 401) {
          changeAuth(false);
          alert("No Autorizado");
        }
      });
  }
}

export default Header;
