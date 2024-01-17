import React, { useEffect } from "react";
import EatnrunLogo from "./EatnrunL";

const EatnrunSignin = () => {
  useEffect(() => {
    document.title = "Eat 'N Run - Sign Up";

    const link = document.createElement("link");
    link.rel = "icon";
    link.href = "/images/portfolioLogo.png";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="signUpPage">
      <header className="signUpHeader">
        <EatnrunLogo />
      </header>

      <div className="sign-up">
        <div className="sign-up-content">
          <div className="welcome-introduction">
            <h1>Get started</h1>
            <p>Create your account now</p>
          </div>

          <div className="sign-up-form">
            <div className="social-media-signup">
              <button className="google-signup social-media">
                <img src="/images/GoogleIcon.png" alt="Google" />
                <span>Google</span>
              </button>

              <button className="facebook-signup social-media">
                <img src="/images/FacebookIcon.png" alt="Facebook" />
                <span>Facebook</span>
              </button>
            </div>

            <div className="or-signup-with">Or sign up with</div>

            <form className="sign-up-input" action="">
              <input
                className="form"
                type="text"
                name="username"
                id="username"
                placeholder="Username"
              />
              <input
                className="form"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />

              <input
                className="form"
                type="cpassword"
                name="cpassword"
                id="cpassword"
                placeholder="Confirm Password"
              />

              <div className="agreement">
                <input type="checkbox" name="agreement" id="agreement" />
                <div className="text-wrapper">
                  I agree to all Term, Privacy Policy and Fees
                </div>
              </div>

              <div className="signup-button">
                <input className="input-button" type="button" value="Sign up" />
              </div>
            </form>

            <div className="login-button">
              <span>
                Already have an account? <a href="/EatNRunAppSignIn">Sign in</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EatnrunSignin;
