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
    </div>
  );
}

export default Login;
