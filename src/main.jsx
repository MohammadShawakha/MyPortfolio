import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./nav-bar/nav-bar";
import ListPage from "./list-page/list-page.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <ListPage />
  </React.StrictMode>
);
