import React from "react";
import { useNavigate } from "react-router-dom";

import "./GetStarted.css";

const GetStarted = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/customers", { replace: true });
  };

  return (
    <div>
      <div className="image" />;
      <div className="text_banner">
        <h1 id="temp">Welcome to TSF Bank</h1>
        <p>
          This is a Basic Banking System developed by AIMEN YASEEN, suggested by
          The Sparks Foundation Web Development And Designing Internship
          Program.
        </p>
        <button className="btn" onClick={clickHandler}>
          Get Started
        </button>
        {/* <Link className="btn" to="/customers">
          Get Started
        </Link> */}
      </div>
    </div>
  );
};

export default GetStarted;
