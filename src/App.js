import React from "react";
import "./assets/css/App.css";
// Importar los componentes
import Header from "./components/Header";
import Search from "./components/Search";
// Agregar los nuevos componentes
import Profile from "./components/Profile";
import PostsList from "./components/PostList";
import { useState } from "react";
//import Post from "./components/Posts";

//State: - search (string) - posts (object array) - section (string)

function App() {
  const [onLogoClick, onProfileClick] = useState(0);

  function Section(onLogoClick) {
    onProfileClick(onLogoClick);
  }

  return (
    <div className="App">
      <Header />
      <Search />
      <PostsList onLogoClick={onLogoClick} Section={Section} />
      <Profile
        onLogoClick={onLogoClick}
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
      />
    </div>
  );
}

export default App;
