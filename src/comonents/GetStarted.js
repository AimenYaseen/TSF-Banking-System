import React from "react";
import "./GetStarted.css";

const clickHandler = () => {
  console.log("Clicked!");
};

const GetStarted = () => {
  return (
    <div>
      <div className="image" />;
      <div className="text_banner">
        <h1>Welcome to TSF Bank</h1>
        <p>
          This is a Basic Banking System developed by AIMEN YASEEN, suggested by
          The Sparks Foundation Web Development And Designing Internship
          Program.
        </p>
        <button className="btn" onClick={clickHandler}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
