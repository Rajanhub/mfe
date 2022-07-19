import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";

import "./index.css";

const App = () => (
  <div className="container">
    <Header />
  </div>
);

const mount = (el: HTMLElement) => {
  const root = ReactDOM.createRoot(el!);
  root.render(<App />);
};

if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("dev-header") as HTMLElement;
  if (el) {
    mount(el);
  }
}
export { mount };
