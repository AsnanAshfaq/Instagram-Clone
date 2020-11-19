import React from "react";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Post from "./Post";
import InstaEmbed from "./instagram-embed";
import { db } from "../../firebase";
// spinner
import Loader from "react-loader-spinner";
// get user info
import { getUserInfo } from "../../FirebaseOperations/Get_User";

function Home() {
  const [Posts, setPosts] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    // get data from the firebase cloud store
    db.collection("posts")
      .orderBy("timeStamp", "desc")
      .onSnapshot(
        (snapshot) => {
          snapshot.docChanges().map(async (change) => {
            // get the post details
            const postID = change.doc.id;
            const postData = change.doc.data();
            // get the user data of the current post
            const userID = change.doc.data().uid;
            var userInfo = {};
            const user = await db
              .collection("users")
              .where("uid", "==", userID)
              .get();
            const p = Promise.resolve(user);
            p.then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                userInfo = {
                  Name: doc.data().Name,
                  UserName: doc.data().UserName,
                  ImageURL: doc.data().ImageURL,
                };
              });
            });
            // after the promise is resolved, set the state with post data, post id and user data values 😉
            const p2 = Promise.resolve(p);
            p2.then(() =>
              setPosts([
                {
                  postData: change.doc.data(),
                  postID: change.doc.id,
                  userData: userInfo,
                },
              ])
            );
          });

          setLoading(false);
        },
        (error) => {
          alert("Error while fetching posts");
          setLoading(false);
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
              Posts.map((post) => {
                console.log(post);
                return (
                  // <Post key={post[0].postID} postData={post[0].postData} />
                  <div />
                );
              })
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
