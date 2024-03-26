import { useState } from "react";
import { randomNumGen, sum } from "./helper";

function LotteryGame() {
  let [ticket, setTicket] = useState(randomNumGen(3));
  let isWinner = sum(ticket) === 15;
  console.log(ticket);


  let getTicket = () =>{
    setTicket(randomNumGen(3));
  }
  return (
    <div>
      <div>
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
      </div>
      <div>
        {isWinner ? <h1>Congratulations🎊🎉! You are the winner</h1> : ""}
      </div>
      <button onClick={getTicket}>Get Ticket</button>
    </div>
  );
}

export default LotteryGame;
