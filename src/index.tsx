import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

console.log(App);

const root = ReactDOM.createRoot(
  document.getElementById("root") ?? document.body
);
root.render(<App />);
