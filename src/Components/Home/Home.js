import React from "react";
import { useState } from "react";
import Header from "../Header/Header";
import Post from "./Post";
import InstaEmbed from "./instagram-embed";
import { db } from "../../firebase";

function Home() {
  const [Posts, setPosts] = useState([]);
  // get data from the firebase cloud store
  db.collection("posts")
    .orderBy("timeStamp", "desc")
    .onSnapshot(
      (snapshot) => {
        snapshot.docChanges().forEach((doc)=>{
          console.log(doc.type)
        })
      },
      (error) => {
        alert("Error while fetching posts");
      }
    );

  return (
    <div>
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
            {Posts.map((post) => (
              <div className="">
               
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

export default Home;
