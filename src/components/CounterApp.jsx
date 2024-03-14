import { useState } from "react";

const CounterApp = () => {
  let [count, setCount] = useState(0);

  function incCount() {
    setCount(count + 1);
    console.log("Component Re-rendered");
  }

  function decCount() {
    if (count == 0) return;
    setCount(count - 1);
  }

  return (
    <div>
      <h1 className="text-xl text-center">Count: {count}</h1>
      <div className="mt-10">
        <button onClick={incCount}>Increament</button>
        <button onClick={decCount}>Decreament</button>
      </div>
    </div>
  );
};

export default CounterApp;
