import { Route, Routes } from "react-router-dom";

import GetStarted from "./screens/GetStarted";
import Customers from "./screens/Customers";
import TransferHistory from "./screens/TransferHistory";
import CustomerDetail from "./screens/CustomerDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/history" element={<TransferHistory />} />
        <Route
          path="/customer_detail/:customerId"
          element={<CustomerDetail />}
        />
      </Routes>
    </div>
  );
}

export default App;
