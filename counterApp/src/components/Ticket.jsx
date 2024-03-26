/* eslint-disable react/prop-types */
import TicketNum from "./TicketNum";

const Ticket = ({ ticket }) => {
  return (
    <div>
      {ticket.map((num, idx) => {
        return <TicketNum num={num} key={idx} />;
      })}
    </div>
  );
};

export default Ticket;
