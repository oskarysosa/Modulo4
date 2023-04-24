import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useLocation } from "wouter";

//Props: - value (string) - onSearch (function)
//Al escribir sobre la barra de búsqueda se deberán mostrar solo los posts que contengan la cadena de búsqueda en su contenido -
//Los posts deberán mostrarse a los tres segundos después de haber cargado la interfaz. Mostrando el texto “Loading…” durante este tiempo.

export default function Search() {
  const [keyword, changeKeyword] = useState("");
  const [path, pushLocation] = useLocation();

  const handleChange = (event) => {
    changeKeyword(event.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`./PostList.jsx/${keyword}`);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <form className="d-flex" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            className="form-control me-2"
            type="text"
            value={keyword}
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-danger" type="submit">
            <SearchIcon />
          </button>
        </form>
      </div>
    </nav>
  );
}
