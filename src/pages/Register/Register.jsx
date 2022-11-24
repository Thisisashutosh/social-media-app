import React from "react";
import "./Register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Ashutosh Social</h3>
          <spam className="loginDesc">
            Connect with friends and the world around you on Ashutoshsocial
          </spam>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" type="email" className="loginInput" />
            <input placeholder="Password" type="password" className="loginInput" />
            <button className="loginButton">Sign up</button>
            <button className="loginRegister">Log into another account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
