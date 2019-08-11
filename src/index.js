import React from "react";
import ReactDOM from "react-dom";
import './index.scss';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

const rootElement = document.getElementById("app");
ReactDOM.render(<App />, rootElement);