import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Profile from "../components/Profile";
import { GetPosts } from "../services/PostService";
import { GetProfile } from "../services/UserService";
import { Search } from "./Search";

export const Home = ({ changeAuth, userData }) => {
  const [searchTxt, setSearchTxt] = useState("");
  const [cardList, setList] = useState([]);

  useEffect(() => {
    GetListData();
  }, []);

  const handleChange = (txt) => {
    setSearchTxt(txt);
  };

  function GetListData() {
    GetPosts()
      .then((res) => {
        const revList = res.data.reverse();
        setList(revList);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          changeAuth(false);
          alert("unauthorized, the session was expired");
        }
      });
  }
};

export const ProfileP = ({ changeAuth, user, onLogout }) => {
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
          alert("unauthorized, the session was expired");
        }
      });
  }

  function LogoutBtn() {
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
  }
  return (
    <div className="App">
      {LogoutBtn()}
      <Profile
        avatar={perfil.avatar}
        username={perfil.username}
        bio={perfil.bio}
      />
    </div>
  );
};
