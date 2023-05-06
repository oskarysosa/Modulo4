import React from "react";
import "./assets/css/App.css";
// Importar los componentes
import Header from "./components/Header";
//import Search from "./components/Search";
// Agregar los nuevos componentes
import { Profile } from "./components/Profile";
import PostsList from "./components/PostList";
import { useState, useEffect } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
//import Post from "./components/Posts";
import { GetProfile, token } from "./services/UserServices";
import Login from "./components/Login";

//State: - search (string) - posts (object array) - section (string)

function App() {
  const [auth, setAuth] = useState(token);
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    localStorage.clear();
    if (token !== null) {
      setAuth(token);
      GetUser();
    }
  }, []);

  const changeAuth = (isAuth) => {
    if (isAuth === true) {
      GetUser();
      nav("/");
    } else {
      localStorage.clear();
    }
    setAuth(isAuth);
  };

  const onLogout = () => {
    changeAuth(false);
  };

  function GetUser() {
    const userId = JSON.parse(token.split(".")[1]).sub;
    setUser(userId);
    GetProfileInfo(userId);
  }
  function GetProfileInfo(userId) {
    GetProfile(userId)
      .then((p) => {
        setUserData(p.data);
      })
      .catch(function (error) {
        if (error.response.status === 401) {
          changeAuth(false);
          alert("unauthorized, the session was expired");
        }
      });
  }

  return (
    <>
      <Header user={user} />
      <div>
        <Routes>
          <Route
            path="/login"
            element={<Login changeAuth={changeAuth} />}
          ></Route>
          <Route
            path="/header"
            element={<Header changeAuth={changeAuth} />}
          ></Route>
          <Route
            path="/postslist"
            element={<PostsList changeAuth={changeAuth} />}
          ></Route>
          <Route
            path="/Profile/:id"
            element={<Profile user={user} onLogout={onLogout} />}
            avatar="Profile.jpg"
            username="Okisita"
            bio="32♏️
            Aventurera🏕
            Soñadora🗺
            Ing. Telecom!👓💻 
            Lectora apasionada📚
            Enamorada de🌎🌟⛺️🏖🌌🌅😍
            Sin música, no vivo!
            Bogotá 🇨🇴
            Made in 🇻🇪"
          ></Route>
        </Routes>
      </div>
    </>
  );
}
export default App;
