import React, { useState } from "react";
import Clock1 from "./Clock1";
import Clock2 from "./Clock2";
import Clock3 from "./Clock3";
import GithubApi1 from "./GithubApi1";
import GithubApi2 from "./GithubApi2";
import GithubApi3 from "./GithubApi3";

function App() {
  const [state, setState] = useState({
    isClock1Visible: true,
    isClock2Visible: true,
    isClock3Visible: true,
    isGithubApi1Visible: true,
    isGithubApi2Visible: true,
    isGithubApi3Visible: true,
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

      <h2>GithubApi</h2>
      {/* <button onClick={() => toggle("isGithubApi1Visible")}>Toggle GithubApi1</button>
      {state.isGithubApi1Visible && <GithubApi1 />} */}

      {/* <button onClick={() => toggle("isGithubApi2Visible")}>Toggle GithubApi2</button>
      {state.isGithubApi2Visible && <GithubApi2 />} */}

      <button onClick={() => toggle("isGithubApi3Visible")}>Toggle GithubApi3</button>
      {state.isGithubApi3Visible && <GithubApi3 />}
    </div>
  );
}

export default App;
