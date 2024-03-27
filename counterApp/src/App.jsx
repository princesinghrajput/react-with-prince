import "./App.css";
import Lottery from "./components/Lottery";

function App() {

//winning condition
  let winningCond = (ticket) =>{
    return ticket[0]===0
  }

  return (
    <div>
    <Lottery n={4} winCond={winningCond}/>
    <Lottery n={5} winCond={winningCond}/>
    </div>
  );
}

export default App;
