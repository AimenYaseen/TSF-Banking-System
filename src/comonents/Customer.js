import React from "react";
import { Link } from "react-router-dom";
import "./Customer.css";

const Customer = ({ name, email, amount }) => {
  return (
    <div className="customer">
      <h2>{name}</h2>
      <h2>{email}</h2>
      <h2>{amount}</h2>
      <h2>
        <Link to="/customers/12" key="12">
          View
        </Link>
      </h2>
    </div>
  );
};

export default Customer;
