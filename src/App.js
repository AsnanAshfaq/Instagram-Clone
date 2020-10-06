import React from "react";
import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Post from "./Post";

function App() {
  const [Data, setData] = useState([
    {
      userName: "Asnan",
      userImage:
        "https://avongraphix.com/wp-content/uploads/edd/2015/11/woman-avatar-4.png",
      postText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis quas repellendus, perferendis quae aliquid exercitationem id, quam cumque impedit voluptatibus nobis necessitatibus debitis corrupti provident assumenda esse cum eligendi voluptatum',
      postImage:
        "https://avongraphix.com/wp-content/uploads/edd/2015/11/woman-avatar-4.png",
    },
    {
      userName: "Asnan",
      userImage:
        "https://avongraphix.com/wp-content/uploads/edd/2015/11/woman-avatar-4.png",
      postText: "this is the dummy post",
      postImage:
        "https://avongraphix.com/wp-content/uploads/edd/2015/11/woman-avatar-4.png",
    },
    {
      userName: "Asnan",
      userImage:
        "https://avongraphix.com/wp-content/uploads/edd/2015/11/woman-avatar-4.png",
      postText: "this is the dummy post",
      postImage:
        "https://avongraphix.com/wp-content/uploads/edd/2015/11/woman-avatar-4.png",
    },
  ]);
  return (
    <div className="App" style={{ backgroundColor: "rgb(250,250,250)" }}>
      {/* sticky header 📦 🧮 */}
      <div style={{ backgroundColor: "white" }} className="sticky-top">
        <Header />
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-2 col-lg-2 col-md-2 "></div>
          {/* post section 🏭 🤪 */}
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-7 col-xs-6">
            {Data.map((item) => (
              <div className="">
                <Post
                  userName={item.userName}
                  userImage={item.userImage}
                  postText={item.postText}
                  postImage={item.postImage}
                />
              </div>
            ))}
          </div>
          {/* instagram embed  */}
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-5">
            <p>Instagram Embed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
