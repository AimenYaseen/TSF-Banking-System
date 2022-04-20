import React from "react";
// import { Link } from "react-router-dom";
import "./Transfer.css";

const Transfer = ({ id, sender, receiver, amount, date }) => {
  return (
    <div className="transfer">
      <h2>{1}</h2>
      <h2>{sender}</h2>
      <h2>{receiver}</h2>
      <h2>{amount}</h2>
      <h2>{date}</h2>
    </div>
  );
};

export default Transfer;
