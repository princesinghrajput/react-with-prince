import { useState } from "react";

const BgChanger = () => {
  let [color, setColor] = useState("olive");

  console.log(color);
  return (
    <div
      className="h-screen w-full duration-700"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-1 inset-x-0">
        <div className="flex flex-wrap justify-cente bg-white border rounded-3xl px-3 py-1 gap-3 font-bold">
          <button
            onClick={() => setColor("red")}
            className="bg-red-600 text-white border rounded-full px-3 py-1"
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="bg-green-600 border  text-white  rounded-full px-3 py-1"
          >
            Green
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="bg-yellow-600 border text-white  rounded-full px-3 py-1"
          >
            Yellow
          </button>
          <button onClick={()=>setColor("blue")} className="bg-blue-600 border text-white  rounded-full px-3 py-1">
            Blue
          </button>
          <button onClick={()=>setColor("purple")} className="bg-purple-600 border  text-white rounded-full px-3 py-1">
            Purple
          </button>
          <button onClick={()=>setColor("pink")} className="bg-pink-600 border text-white  rounded-full px-3 py-1">
            Pink
          </button>
        </div>
      </div>
    </div>
  );
};

export default BgChanger;
