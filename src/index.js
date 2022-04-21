import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { CusContextProvider } from "./store/CusContext";

ReactDOM.render(
  <CusContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CusContextProvider>,
  document.getElementById("root")
);
