import React, { useState, useEffect } from 'react';
import logo from "../../assets/images/logoBlue.png";
import useAuth from "./useAuth"; // Import the useAuth hook
import Cookies from "js-cookie";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth(); // Use the login function from the useAuth hook

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    return password.length >= 8;
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isEmailValid(email)) {
      alert("Invalid email");
      return;
    }

    if (!isPasswordValid(password)) {
      alert("Password must be at least 8 characters");
      return;
    }

    try {
      await login(email, password);
      window.location.href = "/FullHomepage";
      if (email === "adminlewach@gmail.com" && password === "lewachabmss") {
        window.location.href = "/adminDashboard";
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Incorrect Uername Or Password");
    }
  };

 


  return (
    <section className="container-form container-form-sign-in">
      <div className="container-logo">
        <img src={logo} className="login-logo" alt="Logo" />
        <h1>Sign In</h1>
      </div>
      <form onSubmit={handleSubmit} className="sign-in-form">
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="on"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <a href="#" className="forget_password">
          Forgot Password
        </a>
        <button type="submit" className="signIn-register-btn">
          Sign In
        </button>
      </form>
    </section>
  );
}

export default SignIn;