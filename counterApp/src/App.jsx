import "./App.css";
import TicketNum from "./components/TicketNum";
import Ticket from "./components/Ticket";

function App() {
  return (
    <div>
   <Ticket ticket={[2,3,4]}/>
    </div>
  );
}

export default App;
