import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/Quick-Notes"> // TODO update to your repo name
      <App />
    <App />
  </BrowserRouter>,
);
