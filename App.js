import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: "child1" }, [
    React.createElement("h1", { key: "child1-h1" }, "Hello World"),
    React.createElement("h2", { key: "child1-h2" }, "Hello World"),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", { key: "child2-h1" }, "Hello World"),
    React.createElement("h2", { key: "child2-h2" }, "Hello World"),
  ]),
]);
//const heading = React.createElement("h1", { id: "heading" }, "Hello World");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
