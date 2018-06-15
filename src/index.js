import React from "react";
import { render } from "react-dom";
import Bonjour from "./Bonjour";

import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <Bonjour name="CodeSandBox" />
      <h2>Start editi  ng to see some magic happen!</h2>
    </div>
  );
};

render(<App />, document.getElementById("root"));
