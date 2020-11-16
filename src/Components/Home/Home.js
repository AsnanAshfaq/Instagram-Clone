import React from "react";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Post from "./Post";
import InstaEmbed from "./instagram-embed";
import { db } from "../../firebase";
// spinner
import Loader from "react-loader-spinner";

function Home() {
  const [Posts, setPosts] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    // get data from the firebase cloud store
    db.collection("posts")
      .orderBy("timeStamp", "desc")
      .onSnapshot(
        (snapshot) => {
          setPosts(
            snapshot
              .docChanges()
              .map((change) => [
                { postData: change.doc.data(), postID: change.doc.id },
              ])
          );
          setLoading(false);
        },
        (error) => {
          alert("Error while fetching posts");
          setLoading(false)
        }
      );
  }, []);
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
            {/* if we have loading true then show the loader  */}
            {Loading ? (
              <div className="container-fluid d-flex justify-content-center align-items-center">
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col d-flex justify-content-center align-items-center">
                    <Loader
                      type="Oval"
                      className="d-flex justify-content-center align-items-center"
                      color="#00BFFF"
                      height={80}
                      width={80}
                    />
                  </div>
                </div>
              </div>
            ) : (
              Posts.map((post) => (
                <Post key={post[0].postID} postData={post[0].postData} />
              ))
            )}
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
