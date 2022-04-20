import React from "react";
import MainHeader from "../comonents/MainHeader";
import Transfer from "../comonents/Transfer";

const TransferHistory = () => {
  return (
    <div>
      <MainHeader />
      <main className="main">
        <h1>Transactional History</h1>
        <div className="customer1">
          <h2>Sr.No.</h2>
          <h2>Sender</h2>
          <h2>Reciever</h2>
          <h2>Transfered Amount</h2>
          <h2>Date & Time</h2>
        </div>
        <div className="customers">
          <Transfer
            //id={1}
            sender="Aimen"
            receiver="Yaseen"
            amount="5000"
            date="123"
          />
        </div>
      </main>
    </div>
  );
};

export default TransferHistory;
