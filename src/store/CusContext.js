import { createContext, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config";

const CusContext = createContext({
  customers: [],
  history: [],
  getCustomers: () => {},
  getHistory: () => {},
});

export const CusContextProvider = (props) => {
  const [customers, setCustomers] = useState([]);
  const [history, setHistory] = useState([]);

  const customerHandler = () => {
    const ref = collection(db, "Customer");
    getDocs(ref)
      .then((response) => {
        const cus = response.docs.map((doc) => {
          const { name, email, amount } = doc.data();
          return {
            id: doc.id,
            name,
            email,
            amount,
          };
        });
        setCustomers(cus);
      })
      .catch((error) => console.log(error.message));
  };

  const historyHandler = () => {
    const ref = collection(db, "History");
    getDocs(ref)
      .then((response) => {
        const his = response.docs.map((doc) => {
          const { sender, receiver, amount, date } = doc.data();
          return {
            id: doc.id,
            sender,
            receiver,
            amount,
            date,
          };
        });
        setHistory(his);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <CusContext.Provider
      value={{
        customers,
        history,
        getCustomers: customerHandler,
        getHistory: historyHandler,
      }}
    >
      {props.children}
    </CusContext.Provider>
  );
};

export default CusContext;
