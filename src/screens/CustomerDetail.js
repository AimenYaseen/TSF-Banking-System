import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainHeader from "../comonents/MainHeader";
import "./CustomerDetail.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config";

const CustomerDetail = () => {
  const { customerId } = useParams();
  const [detail, setDetail] = useState(null);

  const getDetail = async (id) => {
    const ref = doc(db, "Customer", `${id}`);

    try {
      const docSnap = await getDoc(ref);
      if (docSnap.exists) {
        setDetail(docSnap.data());
        console.log("Document data:", docSnap.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log("Telo");
      console.log(error.message);
    }
  };

  useEffect(() => {
    getDetail(customerId);
  }, []);

  return (
    <section>
      <MainHeader />
      <main className="main1">
        <h1>Customer Information</h1>
        <div className="container">
          <div>
            <h2>Name : </h2>
            <h2>{detail && detail.name}</h2>
          </div>
          <div>
            <h2>Email Address : </h2>
            <h2>{detail && detail.email}</h2>
          </div>
          <div>
            <h2>Bank Balance : </h2>
            <h2>{detail && detail.amount}</h2>
          </div>
        </div>
      </main>
      <p>{customerId}</p>
    </section>
  );
};

export default CustomerDetail;
