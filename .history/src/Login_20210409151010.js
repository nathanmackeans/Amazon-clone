import { Link } from "@material-ui/core";
import React from "react";

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
