import React, { useState } from "react";
import Clock1 from "./Clock1";
import Clock2 from "./Clock2";
import Clock3 from "./Clock3";

function App() {
  const [state, setState] = useState({
    isClock1Visible: true,
    isClock2Visible: true,
    isClock3Visible: true
  });
  function toggle(field) {
    setState({
      ...state,
      [field]: !state[field]
    });
  }
  return (
    <div className="App">
      <h1>React State VS Hooks</h1>
      <h2>Clock</h2>
      <button onClick={() => toggle("isClock1Visible")}>Toggle Clock1</button>
      {state.isClock1Visible && <Clock1 />}
      <hr />
      <button onClick={() => toggle("isClock2Visible")}>Toggle Clock2</button>
      {state.isClock2Visible && <Clock2 />}
      <hr />
      <button onClick={() => toggle("isClock3Visible")}>Toggle Clock3</button>
      {state.isClock3Visible && <Clock3 />}
    </div>
  );
}

export default App;
