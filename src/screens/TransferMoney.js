import React from "react";
import MainHeader from "../comonents/MainHeader";
import TransferForm from "../comonents/TransferForm";

import "./TransferMoney.css";

const TransferMoney = () => {
  return (
    <section>
      <MainHeader />
      <main className="main1">
        <h1>Transfer Money</h1>
        <div className="container">
          <TransferForm />
        </div>
      </main>
      {/* <p>{params.customerId}</p> */}
    </section>
  );
};

export default TransferMoney;
