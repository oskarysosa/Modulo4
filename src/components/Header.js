import React, { Component } from "react";
import "./header.css";
import HomeIcon from "@mui/icons-material/Home";
import PhotoIcon from "@mui/icons-material/Photo";
import FavoriteIcon from "@mui/icons-material/Favorite";

class header extends Component {
  render() {
    return (
      <div className="header">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <img
              alt=""
              className="header_logo"
              src="./favicon.ico"
              width={45}
            />
            <div className="header_icons">
              <div className="icons">
                <HomeIcon fontSize="large" />
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
    );
  }
}

export default header;
