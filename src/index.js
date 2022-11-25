import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
/* import { createStore } from "redux";
import { Provider } from "react-redux"; */

import "./index.css";
import "./reset.css";
import App from "./components/App/App";

/* const store = createStore(todosReducer); */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /*   <Provider> */
  <BrowserRouter>
    <App />
  </BrowserRouter>
  /*   </Provider> */
);
