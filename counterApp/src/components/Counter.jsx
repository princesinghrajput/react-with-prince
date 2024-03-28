import { useEffect, useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Counter Mounted!");

    return function(){
        console.log("Unmount Counter")
    }
  }, []);   //empty dependenacy Array means --> Whole Component


  //if dependancy has some values then only when that values changes
  useEffect(() => {
    console.log("User Updated Count", count);

    return function(){
        console.log("counter UseEffect return", count)
    }
  }, [count]);

//   useEffect(() => {
//     console.log("Counter Unmounted!");
//   });

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default Counter;
