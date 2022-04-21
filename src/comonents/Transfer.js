import moment from "moment";
import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import "./Transfer.css";

const Transfer = ({ Id, sender, receiver, amount, date }) => {
  return (
    <div className="transfer">
      {console.log(date)}
      <h2>{Id}</h2>
      <h2>{sender}</h2>
      <h2>{receiver}</h2>
      <h2>{amount}</h2>
      <h2 id="date">{moment(date).format("lll")}</h2>
    </div>
  );
};

export default Transfer;
