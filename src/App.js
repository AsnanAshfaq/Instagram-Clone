import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";

import SignIn from "./Components/Auth/SignIn";
import SignUp from "./Components/Auth/SignUp";
import { auth } from "./firebase";
// global context
import { Context } from "./Store/StateProvider";

function App() {
  // global state
  const [{ user }, dispatch] = Context();
  useEffect(() => {
    // get to know if the user is siged in or not
    auth.onAuthStateChanged((User) => {
      if (Object.keys(User).length > 0) {
        dispatch({
          type: "SET_USER",
          user: User.uid,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: User.uid,
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
