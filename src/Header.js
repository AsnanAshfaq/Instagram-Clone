import React, { useRef, useState } from "react";
import picture from "./ME.jpg";
import { Avatar } from "@material-ui/core";
// icons
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import PublishIcon from "@material-ui/icons/Publish";
import TelegramIcon from "@material-ui/icons/Telegram";
import FavoriteSharpIcon from "@material-ui/icons/FavoriteSharp";
// css
import "./Header.css";
// upload modal
import HeaderUploadModal from "./Header_Upload_Modal";

function Header() {
  const [Modal, setModal] = useState(false);

  const openModal = (event) => {
    event.preventDefault();
    setModal(true);
  };
  return (
    <div>
      {/* uploading post modal  🤝*/}
      {Modal === true && <HeaderUploadModal open={true} setModal={setModal} />}
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
              {/* Home Screen */}
              <div className="col-xs-2 col-lg-2 col-md-2 col-sm-2 col-2 px-2">
                <HomeIcon style={{ fontSize: 27 }} className="pointer" />
              </div>
              <div className="col-xs-2 col-lg-2 col-md-2 col-sm-2 col-2 px-2">
                <TelegramIcon style={{ fontSize: 27 }} className="pointer" />
              </div>
              {/* modal for uploading posts  */}
              <div
                className="col-xs-2 col-lg-2 col-md-2 col-sm-2 col-2 px-2"
                onClick={openModal}
              >
                <PublishIcon style={{ fontSize: 27 }} className="pointer" />
              </div>
              {/* all the likes of user's post  */}
              <div className="col-xs-2 col-lg-2 col-md-2 col-sm-2 col-2 px-2">
                <FavoriteSharpIcon
                  style={{ fontSize: 27 }}
                  className="pointer"
                />
              </div>
              {/* user's profile image  */}
              <div className="col-xs-2 col-lg-2 col-md-2 col-sm-2 col-2 px-2 pb-1">
                <Avatar src={picture} className="pointer " />
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
