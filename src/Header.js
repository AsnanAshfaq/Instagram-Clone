import React from "react";
import logo from "./ME.jpg";
import { Avatar } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import ExploreIcon from "@material-ui/icons/Explore";
import FavoriteSharpIcon from "@material-ui/icons/FavoriteSharp";

function Header() {
  return (
    <div>
      <div className="container-fluid border-bottom">
        <div className="row">
          {/* blank space  */}
          <div className="col-xs-2 col-lg-2 col-md-1"></div>
          {/* logo  🧑‍🚀*/}

          <div className="col-xs-2 col-lg-2 col-md-2 px-2 col-sm m-0 p-0 d-flex align-items-center">
            <h1 style={{ fontFamily: " Cookie" }} className="w-auto ">
              Instagram
            </h1>
          </div>

          {/* search box  🏟️ 🦕*/}
          <div className="col-xs-4 col-lg-4 col-md-4  col-sm-4 col-6 m-0 p-0 input-group d-flex justify-content-center align-items-center">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                <SearchIcon />
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Search"
            />
          </div>
          <div className="col-xs-2 col-lg-2 col-md-4 col-sm-4 col-6 ml-4 m-0 p-0  d-flex justify-content-end align-items-end">
            <div className="row d-flex flex-row justify-content-between m-0">
              <div className="col-3">
                <HomeIcon style={{ fontSize: 27 }}  />
              </div>
              <div className="col-3">
                <ExploreIcon style={{ fontSize: 27 }} />
              </div>
              <div className="col-3">
                <FavoriteSharpIcon style={{ fontSize: 27 }}  />
              </div>
              <div className="col-3">
                <Avatar src={logo} className="mb-1"/>
              </div>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
