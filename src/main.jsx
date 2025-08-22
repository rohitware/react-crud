import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import store from "./CRUDUsingRedux/Store.js";
import { counterStore } from "./CounterApp/counterStore.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={counterStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
