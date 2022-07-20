import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";

import "./index.css";

const App = () => (
  <div className="container">
    <Header />
    <div>Name: host</div>
    <div>Framework: react</div>
    <div>Language: TypeScripts</div>
    <div>CSS: Empty CSS</div>
  </div>
);

const el = document.getElementById("app") as HTMLElement;
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = ReactDOM.createRoot(el!);
root.render(<App />);
