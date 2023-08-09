import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Logs } from "./components/Logs.jsx";
import "semantic-ui-css/semantic.min.css";
import "rsuite/dist/rsuite.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <Logs />
  </React.Fragment>
);
