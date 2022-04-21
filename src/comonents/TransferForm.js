import React, { useContext, useState } from "react";
import CusContext from "../store/CusContext";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";

import "./TransferForm.css";
import { db } from "../config";

const TransferForm = () => {
  const { customers } = useContext(CusContext);

  const [sender, setSender] = useState(customers[0].email);
  const [receiver, setReceiver] = useState(customers[0].email);
  const [amount, setAmount] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (sender === "" || receiver === "" || amount === "") {
      alert("Please Enter all the values");
      return;
    }

    if (sender === receiver) {
      alert("You can't send money to yourself ... change Receiver's Entry");
      return;
    }
    const sen = customers.find((cus) => {
      return cus.email === sender;
    });

    const rec = customers.find((cus) => {
      return cus.email === receiver;
    });

    if (sen.amount < amount) {
      alert(`Your Balance is insufficient for this transfer, 
      Your Current Balance is ${sen.amount}`);
      return;
    }

    // ADDING DATA TO THE DATABASE
    const ref = collection(db, "History");
    addDoc(ref, {
      sender,
      receiver,
      amount: parseInt(amount),
      date: Date.now(),
    })
      .then((response) => {
        console.log(response);
        const senAmount = sen.amount - parseInt(amount);
        const recAmount = rec.amount + parseInt(amount);
        const docRef = doc(db, "Customer", sen.id);
        updateDoc(docRef, { amount: senAmount }).then((response) => {
          const docRef = doc(db, "Customer", rec.id);
          updateDoc(docRef, { amount: recAmount }).then((response) => {
            alert("Congratulations! Money has transfered successfully...");
            setAmount("");
            setReceiver(customers[0].email);
            setSender(customers[0].email);
          });
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Sender*</label>
          <select
            value={sender}
            onChange={(event) => {
              setSender(event.target.value);
            }}
          >
            {customers.map((item) => {
              return <option value={item.email}>{item.email}</option>;
            })}
          </select>
        </div>
        <div className="new-expense__control">
          <label>Receiver*</label>
          <select
            value={receiver}
            onChange={(event) => {
              setReceiver(event.target.value);
            }}
          >
            {customers.map((item) => {
              return <option value={item.email}>{item.email}</option>;
            })}
          </select>
        </div>
        <div className="new-expense__control">
          <label>Amount*</label>
          <input
            type="number"
            value={amount}
            onChange={(event) => {
              console.log(event.target.value);
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
