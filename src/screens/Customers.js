import React, { useContext, useEffect } from "react";
//import { Link } from "react-router-dom";

import Customer from "../comonents/Customer";
import MainHeader from "../comonents/MainHeader";
import CusContext from "../store/CusContext";
import "./Customers.css";

const Customers = () => {
  const { customers, getCustomers } = useContext(CusContext);

  useEffect(() => {
    getCustomers();
  }, []);

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
          {customers &&
            customers.map((customer) => {
              console.log(customer.id);
              return (
                <Customer
                  key={customer.id}
                  Id={customer.id}
                  name={customer.name}
                  email={customer.email}
                  amount={customer.amount}
                />
              );
            })}
        </div>
      </main>
    </div>
  );
};

export default Customers;
