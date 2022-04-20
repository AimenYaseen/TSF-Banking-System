import React, { useState } from "react";

import "./TransferForm.css";

const TransferForm = () => {
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Sender</label>
          <input
            type="text"
            value={sender}
            onChange={(event) => {
              setSender(event.target.value);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Receiver</label>
          <input
            type="text"
            value={receiver}
            onChange={(event) => {
              setReceiver(event.target.value);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(event) => {
              setAmount(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Transfer</button>
      </div>
    </form>
  );
};

export default TransferForm;
