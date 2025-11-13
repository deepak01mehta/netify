import React, { useState } from "react";
import "./Login.css";
import netifylogo from "../../../assets/netifylogo.png";

const Login = () => {
  const [sign, setSign] = useState("Sign In");

  return (
    <div className="login">
      <img src={netifylogo} alt="Netify Logo" className="login-logo" />

      <div className="login-form">
        <h1>{sign}</h1>

        <form>
          {sign === "Sign Up" && <input type="text" placeholder="Your Name" />}

          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">{sign}</button>

          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        <div className="form-switch">
          {sign === "Sign In" ? (
            <p>
              New to Netify?{" "}
              <span onClick={() => setSign("Sign Up")}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setSign("Sign In")}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
