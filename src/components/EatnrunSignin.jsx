import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import EatnrunLogo from "./EatnrunL";

const EatnrunSignin = () => {
  useEffect(() => {
    document.title = "Eat 'N Run - Sign In";

    const link = document.createElement("link");
    link.rel = "icon";
    link.href = "/images/portfolioLogo.png";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  // const account = [
  //   {
  //     guest: "admin",
  //     password: "admin",
  //   },
  // ];

  const LogIn = () => {
    if (username === "admin" && password === "admin") {
      setLoggedIn(true);
      navigate("/home");
    } else if (username !== "admin" && password !== "admin") {
      setUsernameError(true);
      setPasswordError(true);
    } else if (username === "admin") {
      setUsernameError(false);
      setPasswordError(true);
    } else if (password === "admin") {
      setUsernameError(true);
      setPasswordError(false);
    } else if (username !== "admin") {
      setUsernameError(true);
    } else if (password !== "admin") {
      setPasswordError(true);
    } else {
      setUsername("");
      setPassword("");
    }
  };

  return (
    <>
      {loggedIn ? (
        ""
      ) : (
        <div className="signInPage">
          <header className="signInHeader">
            <EatnrunLogo />
          </header>

          <div className="sign-in">
            <div className="sign-in-content">
              <div className="welcome-introduction">
                <h1>Welcome Back</h1>
                <p>Please enter your details</p>
              </div>

              <div className="sign-in-form">
                <div className="social-media-login">
                  <button className="google-login social-media">
                    <img src="/images/GoogleIcon.png" alt="Google" />
                    <span>Google</span>
                  </button>

                  <button className="facebook-login social-media">
                    <img src="/images/FacebookIcon.png" alt="Facebook" />
                    <span>Facebook</span>
                  </button>
                </div>

                <div className="or-login-with">Or login with</div>

                <form className="sign-in-input" action="">
                  <input
                    className="form"
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  {usernameError && (
                    <span className="error-username error">
                      <i className="fa-solid fa-exclamation"></i>Wrong username
                    </span>
                  )}
                  <input
                    className="form"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {passwordError && (
                    <span className="error-password error">
                      <i className="fa-solid fa-exclamation"></i>Wrong password
                    </span>
                  )}

                  <div className="remember-and-forgot">
                    <div className="remember">
                      <input type="checkbox" name="remember" id="remember" />
                      <div className="text-wrapper">Remember Me</div>
                    </div>
                    <a href="#Aa" className="div">
                      Forgot password?
                    </a>
                  </div>

                  <div className="login-button">
                    <input
                      onClick={LogIn}
                      className="input-button"
                      type="button"
                      value="Login"
                    />
                  </div>
                </form>

                <div className="signup-button">
                  <span>
                    Don’t have an account?{" "}
                    <a href="/EatNRunAppSignUp">Sign up</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EatnrunSignin;
