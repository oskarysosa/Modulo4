import React, { Component } from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";

class search extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
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
}

export default search;
