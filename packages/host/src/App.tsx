import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";

import "./index.css";

const App = () => (
  <div className="container">
    <Header />
    <div>Name: host</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);

const mount = (el: HTMLElement) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const root = ReactDOM.createRoot(el!);
  root.render(<App />);
};

if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("app") as HTMLElement;
  if (el) {
    mount(el);
  }
}
export { mount };
