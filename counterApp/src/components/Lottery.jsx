/* eslint-disable react/prop-types */
import { useState } from "react";
import { randomNumGen} from "./helper";
import Ticket from "./Ticket";

const Lottery = ({n,winCond}) => {

  let [ticket, setTicket] = useState(randomNumGen(n));
  let isWinner = winCond(ticket);

  let buyTicket = () => {
    setTicket(randomNumGen(n));
  };

  return (
    <div>
      <div>
        <Ticket ticket={ticket}/>
      </div>

      <div>
        {isWinner ? <h1>Congrats🎉 Youre the winner </h1> : ""}

        <button onClick={buyTicket}>Buy Ticket</button>
      </div>
    </div>
  );
};

export default Lottery;