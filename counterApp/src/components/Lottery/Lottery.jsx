import { useState } from "react";
import { genRandomNum, sum } from "./helper";

function Lottery() {
  let [ticket, setTicket] = useState(genRandomNum(3));

  let isWinner = sum(ticket) === 15;

  let generateTicket = () => {
    setTicket(genRandomNum(3));
  };
  return (
    <div>
      <div className="w-full border border-red-500 rounded-lg">
        <span className="text-2xl text-white border rounded-sm px-1 mx-1 bg-slate-600">
          {ticket[0]}
        </span>
        <span className="text-2xl text-white border rounded-sm px-1 mx-1 bg-slate-600">
          {ticket[1]}
        </span>
        <span className="text-2xl text-white border rounded-sm px-1 mx-1 bg-slate-600">
          {ticket[2]}
        </span>
      </div>
      <h1>{isWinner && "Congratulations You win!"}</h1>
      <button onClick={generateTicket} className="pt-2 mt-3 bg-red-700">
        Generate Ticket
      </button>
    </div>
  );
}

export default Lottery;
