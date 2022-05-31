import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = document.getElementById("support_widget") as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App
      email={root.dataset.email}
      primary_color={root.dataset.primary_color}
      heading={root.dataset.heading}
      name={root.dataset.name}
      success_message={root.dataset.success_message}
    />
  </React.StrictMode>
);
