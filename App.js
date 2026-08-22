import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1>Basic React using jsx</h1>;

const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <h1>Basic React Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
