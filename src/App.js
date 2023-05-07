import React from "react";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import { Search } from "./components/Search";
import { Profile } from "./components/Profile";
import PostsList from "./components/PostList";
import Login from "./components/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // estado de autenticación del usuario
  const [searchTxt, setSearchTxt] = useState("");

  const handleChange = (txt) => {
    setSearchTxt(txt);
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/app" />
            ) : (
              <Login onLogin={() => setIsLoggedIn(true)} />
            )
          }
        />
        <Route
          path="/app"
          element={
            isLoggedIn ? (
              <>
                <Search filterTxt={searchTxt} handleChange={handleChange} />
                <PostsList />
                <Profile
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
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/"
          element={
            isLoggedIn ? <Navigate to="/app" /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
