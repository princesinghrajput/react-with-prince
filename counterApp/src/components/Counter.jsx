import { useState } from "react";
console.log("Component re-rendered...");

// function randomNumber() {
//   console.log("Random function executed");
//   return Math.random();
// }

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("component is re-rendered");

  let incCount = () => {
    setCount((prevCount)=>{
      return prevCount + 1;
    });
   setCount((prevCount)=>{
      return prevCount + 1;
    });
   setCount((prevCount)=>{
      return prevCount + 1;
    });

    //   setCount((prevCount) => {
    //     return prevCount + 1;
    //   });

    //   console.log("incCount clicked...");
    // };
    // let decCount = () => {
    //   setCount(count - 1);
  };

  return (
    <div>
      <h1 className="text-3xl">Counter App</h1>
      <h3 className="text-5xl pt-10">Count: {count}</h3>
      <div className="mt-10">
        <button onClick={incCount}>Increament</button>
        {/* <button onClick={decCount}>Decreament</button> */}
      </div>
    </div>
  );
};

export default Counter;
