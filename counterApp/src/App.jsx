import "./App.css";
import TicketNum from "./components/TicketNum";
import Ticket from "./components/Ticket";
import Lottery from "./components/Lottery";

function App() {
  return (
    <div>
    <Lottery n={3}/>
    <Lottery n={4}/>
    <Lottery n={5}/>
    </div>
  );
}

export default App;
