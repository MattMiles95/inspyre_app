// React
import React from "react";

// Context
import { CurrentUserProvider } from "./contexts/CurrentUserContext";

// CSS
import "./index.css";

// Local Components
import App from "./App";

// React DOM
import ReactDOM from "react-dom/client";

// React Router
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <CurrentUserProvider>
      <App />
    </CurrentUserProvider>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
