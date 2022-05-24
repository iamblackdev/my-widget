import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = document.getElementById("my-widget");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App {...root.dataset} />
  </React.StrictMode>
);
