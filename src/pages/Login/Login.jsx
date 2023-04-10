import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Login to Dashboard</h3>
          <spam className="loginDesc">
           Manage your earnings and spendings in one place
          </spam>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" type="email" className="loginInput" />
            <input placeholder="Email" type="email" className="loginInput" />
            <input placeholder="Password" type="email" className="loginInput" />
            <input
              placeholder="Password again"
              type="password"
              className="loginInput"
            />
            <button className="loginButton">Log in</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegister">Create an account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
