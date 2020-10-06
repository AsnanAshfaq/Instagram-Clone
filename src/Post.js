import React from "react";
import { Avatar } from "@material-ui/core";
// icon
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import TelegramIcon from "@material-ui/icons/Telegram";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
// css
import "./Header.css";
import { useState } from "react";

function Post({ userName, userImage, postText, postImage }) {
  const [Input, setInput] = useState("");

  const postComment = (e) => {
    // post the comment of the respective post
  };
  return (
    <div
      className="d-flex flex-column mt-2 border"
      style={{ backgroundColor: "white" }}
    >
      <div className="row d-flex flex-row my-2 mx-0">
        {/* user image  */}
        <div className="col-11 d-flex flex-row">
          <Avatar src={userImage} />
          <div className="px-2 pt-1">
            <p>
              <b>{userName}</b>
            </p>
          </div>
        </div>
        <div className="col-1 p-0 m-0 d-flex justify-content-center align-items-center">
          <MoreHorizIcon className="pointer" />
        </div>
      </div>
      {/* post image  */}
      <img src={postImage} className="img-fluid" alt="" />
      {/* icons  */}
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
            <b>{userName}ashfaq</b>
            <span className="pl-2">{postText}</span>
          </p>
        </div>
      </div>
      {/* comment section 🛺 🦕 */}
      <div className="row m-0">
        <div className="col-11 m-0 p-0">
          <input
            type="text"
            className="form-control border-0"
            value={Input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a comment"
          />
        </div>
        <div className="col-1 px-3 mt-1 d-flex justify-content-end align-items-center">
          <p
            style={{ color: Input === "" ? "#b3dffc" : "#5DADE2" }}
            onClick={postComment}
          >
            <b>Post</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Post;
