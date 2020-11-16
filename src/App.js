import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";

import SignIn from "./Components/Auth/SignIn";
import SignUp from "./Components/Auth/SignUp";
import { db, auth } from "./firebase";
// global context
import { Context } from "./Store/StateProvider";

function App() {
  // global state
  const [{ user }, dispatch] = Context();
  useEffect(() => {
    // get to know if the user is siged in or not
    auth.onAuthStateChanged((User) => {
      if (Object.keys(User).length > 0) {
        // fetch the data from the user database relted to the user id
        const docRef = db.collection("users").doc(User.uid);
        docRef
          .get()
          .then(function (doc) {
            if (doc.exists) {
              const data = doc.data();
              // setting globale state 😄
              dispatch({
                type: "SET_USER",
                user: {
                  Name: data.Name,
                  UserName: data.Username,
                  imageURL: data.imageURL,
                  uid: data.uid,
                },
              });
            } else {
              // doc.data() will be undefined in this case
              dispatch({
                type: "SET_USER",
                user: {},
              });
            }
          })
          .catch(function (error) {
            alert("Getting error while authenticating");
            dispatch({
              type: "SET_USER",
              user: {},
            });
          });
      } else {
        dispatch({
          type: "SET_USER",
          user: {},
        });
      }
    });
  }, []);

  return (
    <div className="App" style={{ backgroundColor: "rgb(250,250,250)" }}>
      <Router>
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
