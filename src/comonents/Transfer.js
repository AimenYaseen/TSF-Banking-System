import moment from "moment";
import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import "./Transfer.css";

const Transfer = ({ Id, sender, receiver, amount, date }) => {
  // const d = new Date(date);

  useEffect(() => {
    console.log(new Date(date));
  }, []);

  return (
    <div className="transfer">
      <h2>{Id}</h2>
      <h2>{sender}</h2>
      <h2>{receiver}</h2>
      <h2>{amount}</h2>
      {/* <h2 id="date">{date}</h2> */}
    </div>
  );
};

export default Transfer;
