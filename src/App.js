import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";

import SignIn from "./Components/Auth/SignIn";
import SignUp from "./Components/Auth/SignUp";

function App() {
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
