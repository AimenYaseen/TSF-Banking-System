import React from "react";
import { useParams } from "react-router-dom";
import MainHeader from "../comonents/MainHeader";
import "./CustomerDetail.css";

const CustomerDetail = () => {
  const params = useParams();

  return (
    <section>
      <MainHeader />
      <main className="main1">
        <h1>Customer Information</h1>
        <div className="container">
          <div>
            <h2>Name : </h2>
            <h2>Value</h2>
          </div>
          <div>
            <h2>Email Address : </h2>
            <h2>Value</h2>
          </div>
          <div>
            <h2>Bank Balance : </h2>
            <h2>Value</h2>
          </div>
        </div>
      </main>
      <p>{params.customerId}</p>
    </section>
  );
};

export default CustomerDetail;
