import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import picture from "../../ME.jpg";
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
// global context
import { Context } from "../../Store/StateProvider";
// tooltip
import ReactTooltip from "react-tooltip";
// firebase
import { auth } from "../../firebase";

function Header() {
  // global state
  const [{ user }, dispatch] = Context();
  // local state
  const [Modal, setModal] = useState(false);

  const openModal = (event) => {
    event.preventDefault();
    setModal(true);
  };

  // signing out user
  const signOut = (e) => {
    e.preventDefault();
    // signing out
    auth.signOut();
    // clear the user in global state
    dispatch({
      type: "REMOVE_USER",
    });
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
            <Link to="/" style={{ textDecoration: "none" }}>
              <h1
                style={{ fontFamily: " Cookie", color: "black" }}
                className="w-auto "
              >
                Instagram
              </h1>
            </Link>
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
              <div className="col-xs-2 col-lg-2 col-md-2 col-sm-2 col-2 px-2 pb-1 rounded-circle">
                {Object.keys(user).length > 0 ? (
                  /* if the user is signed in*/
                  <div>
                    {/* tool tip  */}
                    <a
                      data-tip="custom show"
                      data-for="global"
                      data-event="click focus"
                    >
                      {/* if user has not set image then show the dummy image  */}
                      {user.imageURL == "" ? (
                        <Avatar
                          src={
                            "https://www.freeiconspng.com/thumbs/person-icon/msn-people-person-profile-user-icon--icon-search-engine-11.png"
                          }
                          className="pointer "
                        />
                      ) : (
                        {
                          /* else show the users image  */
                        }(<Avatar src={user.imageURL} className="pointer " />)
                      )}
                    </a>
                    <ReactTooltip
                      place="bottom"
                      id="global"
                      aria-haspopup="true"
                      globalEventOff="click"
                      type="light"
                      clickable={true}
                    >
                      <a href="/signin">
                        <h6>View Profile</h6>
                      </a>

                      <h6 onClick={signOut}>Sign Out</h6>
                    </ReactTooltip>
                  </div>
                ) : (
                  // else move the user to signin page and show the tooltip

                  <Link to="/signin">
                    <a data-tip data-for="lock">
                      <Avatar
                        src="https://image.freepik.com/free-icon/lock-circle_318-9883.jpg"
                        className="pointer"
                      />
                    </a>
                    <ReactTooltip id="lock" type="dark" effect="solid">
                      <span>Sign in or create an account</span>
                    </ReactTooltip>

                    {/* <p>Sign In</p> */}
                  </Link>
                )}
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
