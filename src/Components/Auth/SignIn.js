import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import InstagramIcon from "@material-ui/icons/Instagram";
import { auth } from "../../firebase";
// import { useStateValue } from "../StateProvider";
// loader
import Loader from "react-loader-spinner";

function SignIn() {
  // global state
  //   const [{ user }, dispatch] = useStateValue();
  const [IsLoading, setIsLoading] = useState(false);

  // local states
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const History = useHistory();

  // make the user sign in
  const userSignIn = (e) => {
    e.preventDefault();

    setIsLoading(true);

    auth
      .signInWithEmailAndPassword(Email, Password)
      .then((user) => {
        // set the loading to false
        setIsLoading(false);
        History.replace("/");
      })
      .catch((err) => {
        setIsLoading(false);
        alert("Can't Sign In with given Credentials. Check your Email and Password and Try Again :)");
      });
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="row m-0 p-0">
            <div className="col d-flex justify-content-center">
              {/* Instagram logo  */}
              <Link to="/" style={{ textDecoration: "none" }}>
                <InstagramIcon style={{ fontSize: 100, color: "black" }} />
              </Link>
            </div>
          </div>
          {/* Email  */}
          <div className="row mt-4">
            <div className="col-xs-4 col-lg-4 col-md-4 col-2"></div>
            <div className="col-xs-4 col-lg-4 col-md-4 col-8 d-flex justify-content-start">
              <h6 className="text-secondary">Email Address</h6>
            </div>
            <div className="col-xs-4 col-lg-4 col-md-4 col-2"></div>
          </div>
          <div className="row">
            <div className="col-xs-4 col-lg-4 col-md-4 col-2"></div>
            <div className="col-xs-4 col-lg-4 col-md-4 col-8 w-25 ">
              <input
                type="email "
                className="form-control d-flex justify-content-center"
                placeholder="Enter Email Address"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-xs-4 col-lg-4 col-md-4 col-2"></div>
          </div>
          {/* password  */}
          <div className="row mt-4">
            <div className="col-xs-4 col-lg-4 col-md-4 col-2"></div>
            <div className="col-xs-4 col-lg-4 col-md-4 col-8 d-flex justify-content-start">
              <h6 className="text-secondary">Password</h6>
            </div>
            <div className="col-xs-4 col-lg-4 col-md-4 col-2"></div>
          </div>

          <div className="row">
            <div className="col-xs-4 col-lg-4 col-md-4 col-2"></div>
            <div className="col-xs-4 col-lg-4 col-md-4 col-8 w-25 ">
              <input
                type="password"
                maxLength={15}
                className="form-control d-flex justify-content-center"
                placeholder="Enter Password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="col-xs-4 col-lg-4 col-md-4 col-2"></div>
          </div>
          {/* sign in button  */}
          <div className="row mt-4">
            <div className="col-xs-4 col-lg-4 col-md-4 col-2"></div>
            <div className="col-xs-4 col-lg-4 col-md-4 col-8 d-flex justify-content-center">
              <button
                className="btn btn-dark w-100"
                disabled={!Email || !Password}
                onClick={userSignIn}
              >
                <h5>
                  {" "}
                  {IsLoading ? (
                    <Loader
                      type="ThreeDots"
                      color="white"
                      className="d-flex justify-content-center align-items-center "
                      height="30"
                      width="30"
                    />
                  ) : (
                    "Sign In"
                  )}
                </h5>
              </button>
            </div>
            <div className="col-xs-4 col-lg-4 col-md-4 col-2"></div>
          </div>
          <div className="row mt-4">
            <div className="col-xs-4 col-lg-4 col-md-4 col-2"></div>
            <div className="col-xs-4 col-lg-4 col-md-4 col-8 d-flex justify-content-center">
              <p>
                Dont't Have an Account?
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  {" "}
                  Sign Up Here
                </Link>
              </p>
            </div>
            <div className="col-xs-4 col-lg-4 col-md-4 col-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
