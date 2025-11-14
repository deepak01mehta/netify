import React, { useState } from "react";
import "./Login.css";
import netifylogo from "../../../assets/netifylogo.png";

import {login,signup} from '../../../firebase'

const Login = () => {
  const [sign, setSign] = useState("Sign In");

  const [name,setName] =useState("");
  const [email,setEmail] =useState("");

  const [password,setPassword] =useState("");
  const [loading,setLaoding]= useState(false)


  const user_auth =async(event)=>{
   
    event.preventDefault();
     setLaoding(true);
    if(sign==="Sign In"){
      await login(email,password)
    }
    else{
      await signup(name,email,password)
    }
      setLaoding(false);
  }

 


  return (
    
    <div className="login">
      <img src={netifylogo} alt="Netify Logo" className="login-logo" />

      <div className="login-form">
        <h1>{sign}</h1>

        <form>
          {sign === "Sign Up" && 
          <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Your Name" />}

          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Your Email" />
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
          <button type="submit" onClick={user_auth} disabled={loading}  >{loading?"Loading...":"Sign In"}</button>

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
