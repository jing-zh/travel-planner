import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TripsContextProvider } from "./context/TripsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TripsContextProvider>
      <App />
    </TripsContextProvider>
  </React.StrictMode>
);
