import React from "react";
import { useParams } from "react-router-dom";
import MainHeader from "../comonents/MainHeader";

const CustomerDetail = () => {
  const params = useParams();

  return (
    <section>
      <MainHeader />
      <h1>Detail</h1>
      <p>{params.customerId}</p>
    </section>
  );
};

export default CustomerDetail;
