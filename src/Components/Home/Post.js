import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
// icon
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import TelegramIcon from "@material-ui/icons/Telegram";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
// css
import "../Header/Header.css";
// truncate package
import Truncate from "react-truncate";
// context
import { Context } from "../../Store/StateProvider";
// spinner
import Loader from "react-loader-spinner";
// lazy loading images
import { LazyLoadImage } from "react-lazy-load-image-component";

function Post({ postData, userInfo }) {
  const [Input, setInput] = useState("");
  const [Loading, setLoading] = useState(true);

  // global state
  const [{ user }, dispatch] = Context();

  useEffect(() => {
    console.log(userInfo);
  }, []);
  const postComment = (e) => {
    // first check if the user is signed in or not
    if (Object.keys(user).length > 0) {
      // post the comment of the respective post
    } else {
      alert("Please Sign in first to Comment");
    }
  };
  return (
    <div
      className="d-flex flex-column mt-2 border mb-4"
      style={{ backgroundColor: "white" }}
    >
      <div className="row d-flex flex-row my-2 mx-0">
        {/* user image 🍔 */}
        <div className="col-11 d-flex flex-row">
          {/* <Avatar src={userImage} /> */}
          <div className="px-2 pt-1">
            <p>{/* <b>{userName}</b> */}</p>
          </div>
        </div>
        <div className="col-1 p-0 m-0 d-flex justify-content-center align-items-center">
          <MoreHorizIcon className="pointer" />
        </div>
      </div>
      {/* post image 🔺 🥪 */}
      <div
        className="h-auto d-flex justify-content-center"
        style={{ maxHeight: 800 }}
      >
        {/* <LazyLoadImage
      alt="asd"
      height={400}
      src={postData.imageURL}// use normal <img> attributes as props
      width={400} /> */}
        <img
          src={postData.imageURL}
          className="img-fluid"
          alt=""
          onLoad={() => console.log("loaded")}
        />
      </div>

      {/* icons 🏗️ */}
      <div className="row d-flex flex-row m-0 mt-2">
        <div className="col-1">
          <FavoriteBorderIcon style={{ fontSize: 27 }} className="pointer" />
        </div>
        <div className="col-1">
          <ChatBubbleOutlineIcon style={{ fontSize: 27 }} className="pointer" />
        </div>

        <div className="col-1">
          <TelegramIcon style={{ fontSize: 27 }} className="pointer" />
        </div>

        <div className="col d-flex justify-content-end">
          <BookmarkBorderIcon style={{ fontSize: 27 }} className="pointer" />
        </div>
      </div>
      {/* user name and post text  */}
      <div className="row d-flex flex-row mx-0 mt-2">
        <div className="col d-flex flex-row ">
          <p>
            {/* <b>{userName}ashfaq</b> */}
            <span className="pl-3">
              {postData.postText.length > 45
                ? postData.postText.substring(0, 50) + "..."
                : postData.postText}
            </span>
          </p>
        </div>
      </div>
      {/* comment section 🛺 🦕 */}
      <div className="row m-0 d-flex flex-row">
        <div className="col-xl-11 col-lg-11 col-md-10 col-sm-9 col-10 m-0">
          <input
            type="text"
            className="form-control border-0 m-0 px-2"
            value={Input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a comment"
          />
        </div>
        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-3 col-2 mt-1 mb-2 d-flex justify-content-end align-items-center">
          <button
            className="btn m-0 pt-0 px-1"
            style={{ color: Input === "" ? "#b3dffc" : "#5DADE2" }}
            onClick={postComment}
            disabled={!Input}
          >
            <b>Post</b>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
