import React from "react";
import { Link } from "react-router-dom";

import MainHeader from "../comonents/MainHeader";

const Customers = () => {
  return (
    <div>
      <MainHeader />
      <main>
        <h1>Customers</h1>
        <ul>
          <li>
            <Link to="/customers/123" key="123">
              Aimen Yaseen
            </Link>{" "}
          </li>
          <li>
            <Link to="/customers/345" key="345">
              Sumyia Yaseen
            </Link>
          </li>
          <li>
            <Link to="/customers/12" key="12">
              Umer Yaseen
            </Link>
          </li>
        </ul>
      </main>
      {/* <Outlet /> */}
    </div>
  );
};

export default Customers;
