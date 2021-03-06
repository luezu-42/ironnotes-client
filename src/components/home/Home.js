import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

import BlueBtn from "../btns/BlueBtn";

function Home() {
  return (
    <main className="home">
      <img src="./images/javascript.jpg" alt="Logo" />
      <div className="home-container">
        <h3>All your cohort's notes in one place!</h3>
        <BlueBtn>
          <Link to="auth/signup">Sign Up</Link>
        </BlueBtn>
        <p>
          Already have an account? <Link to="auth/login">Login here</Link>.
        </p>
      </div>
    </main>
  );
}

export default Home;
