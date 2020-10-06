import React from "react";
import { useState } from "react";
import "./App.css";
import Header from "./Header";
import picture from "./ME.jpg";
import Post from "./Post";
import InstaEmbed from "./instagram-embed";

function App() {
  const [Data, setData] = useState([
    {
      userName: "Asnan",
      userImage: picture,
      postText:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis quas repellendus, perferendis quae aliquid exercitationem id, quam cumque impedit voluptatibus nobis necessitatibus debitis corrupti provident assumenda esse cum eligendi voluptatum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis quas repellendus, perferendis quae aliquid exercitationem id, quam cumque impedit voluptatibus nobis necessitatibus debitis corrupti provident assumenda esse cum eligendi voluptatum",
      postImage:
        "https://images.unsplash.com/photo-1542840843-3349799cded6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    },
    {
      userName: "Asnan",
      userImage:
        "https://avongraphix.com/wp-content/uploads/edd/2015/11/woman-avatar-4.png",
      postText: "this is the dummy post",
      postImage:
        "https://image.shutterstock.com/image-vector/cute-little-girl-spring-260nw-337904864.jpg",
    },
    {
      userName: "Asnan",
      userImage:
        "https://avongraphix.com/wp-content/uploads/edd/2015/11/woman-avatar-4.png",
      postText: "this is the dummy post",
      postImage:
        "data:image/jpeg;base64,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",
    },
  ]);
  return (
    <div className="App" style={{ backgroundColor: "rgb(250,250,250)" }}>
      {/* sticky header 📦 🧮 */}
      <div style={{ backgroundColor: "white" }} className="sticky-top">
        <Header />
      </div>

      {/* rest of the app  */}
      <div className="container-fluid ">
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
            <InstaEmbed />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
