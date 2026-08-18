import React from "react";
import ReactDOM from "react-dom/client";

//JSX is HTML like syntax
const jsxHeading = <h1>Basic React using jsx</h1>;

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
