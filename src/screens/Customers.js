import React from "react";
//import { Link } from "react-router-dom";

import Customer from "../comonents/Customer";
import MainHeader from "../comonents/MainHeader";
import "./Customers.css";

const Customers = () => {
  return (
    <div>
      <MainHeader />
      <main className="main">
        <h1>Customers</h1>
        <div className="customer1">
          <h2>Name</h2>
          <h2>Email</h2>
          <h2>Balance</h2>
          <h2>Link</h2>
        </div>
        <div className="customers">
          <Customer name="Name" email="Email" amount="Balance" />
          <Customer name="Name" email="Email" amount="Balance" />
        </div>
      </main>
    </div>
  );
};

export default Customers;
