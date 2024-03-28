import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  let [state, setState] = useState(true);
  return (
    <div>
      <button onClick={() => setState(!state)}>Toggle</button>
      {state ? <Counter /> : ""}
    </div>
  );
}

export default App;
