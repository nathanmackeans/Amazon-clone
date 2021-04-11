import { Link } from "react-router-dom";
import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://wizmove.com/wp-content/uploads/2018/09/amazon-logo-white-png-transparent-3.png"
          className="login_logo"
          alt=""
        />
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="password" />
          <button className="login_signinButton">Sign in</button>
        </form>
        <p>
          By signing-in you agree to the AMAZON CLONE Conditions of use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className="login_registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
