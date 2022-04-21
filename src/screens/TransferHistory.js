import React, { useContext, useEffect } from "react";
import MainHeader from "../comonents/MainHeader";
import Transfer from "../comonents/Transfer";
import CusContext from "../store/CusContext";

import "./TransferHistory.css";

const TransferHistory = () => {
  const { history, getHistory } = useContext(CusContext);

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <div>
      <MainHeader />
      <main className="main">
        <h1>Transactional History</h1>
        <div className="customer12">
          <h2>Sr.No.</h2>
          <h2>Sender</h2>
          <h2 id="rec">Reciever</h2>
          <h2>Transfered Amount</h2>
          {/* <h2 id="date">Date & Time</h2> */}
        </div>
        <div className="customers">
          {history &&
            history.map((customer, index) => {
              return (
                <Transfer
                  key={customer.id}
                  Id={index + 1}
                  sender={customer.sender}
                  receiver={customer.receiver}
                  amount={customer.amount}
                  date={customer.date}
                />
              );
            })}
        </div>
      </main>
    </div>
  );
};

export default TransferHistory;
