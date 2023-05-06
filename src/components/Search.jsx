import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
//Props: - value (string) - onSearch (function)
//Al escribir sobre la barra de búsqueda se deberán mostrar solo los posts que contengan la cadena de búsqueda en su contenido -
//Los posts deberán mostrarse a los tres segundos después de haber cargado la interfaz. Mostrando el texto “Loading…” durante este tiempo.

export function Search({ value, handleChange }) {
  const onSearch = (event) => {
    handleChange(event.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <form className="d-flex" role="search">
          <input
            onChange={onSearch}
            className="form-control me-2"
            type="search"
            value={value}
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
