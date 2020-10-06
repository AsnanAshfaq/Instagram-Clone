import React from "react";
import picture from "./ME.jpg";
import { Avatar } from "@material-ui/core";
// icons
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import TelegramIcon from '@material-ui/icons/Telegram';
import ExploreIcon from "@material-ui/icons/Explore";
import FavoriteSharpIcon from "@material-ui/icons/FavoriteSharp";
// css
import "./Header.css";

function Header() {
  return (
    <div>
      <div className="container-fluid border-bottom ">
        <div className="row">
          {/* blank space  */}
          <div className="col-xs-2 col-lg-2 col-md-1"></div>
          {/* logo  🧑‍🚀*/}
          <div className="col-xs-2 col-lg-2 col-md-2 col-sm-3 col-xs-4 m-0 p-0  px-2 d-flex align-items-center">
            <h1 style={{ fontFamily: " Cookie" }} className="w-auto ">
              Instagram
            </h1>
          </div>
          {/* search box  🏟️ 🦕*/}
          <div className="col-xs-4 col-lg-4 col-md-4 col-sm-4 col-xs-4  m-0 p-0 input-group d-flex justify-content-center align-items-center">
            <div className="input-group-prepend">
              <span className="input-group-text pointer" id="basic-addon1">
                <SearchIcon />
              </span>
            </div>
            <input type="text" className="form-control" placeholder="Search" />
          </div>
          {/* side options 🎃🦘 */}
          <div className="col-xs-2 col-lg-2 col-md-4 col-sm-4 col-xs-4 ml-4 m-0 p-0  d-flex justify-content-end align-items-end">
            <div className="row d-flex flex-row justify-content-between m-0">
              <div className="col-2 px-2">
                <HomeIcon style={{ fontSize: 27 }} className="pointer" />
              </div>
              <div className="col-2 px-2">
                <TelegramIcon style={{ fontSize: 27 }} className="pointer" />
              </div>
              <div className="col-2 px-2">
                <ExploreIcon style={{ fontSize: 27 }} className="pointer" />
              </div>
              <div className="col-2 px-2">
                <FavoriteSharpIcon
                  style={{ fontSize: 27 }}
                  className="pointer"
                />
              </div>
              <div className="col-2 px-2 pb-1">
                <Avatar src={picture} className="pointer" />
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
