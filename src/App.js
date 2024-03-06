import {Header, MyAddress} from "./Header.js"  //named exports of Header & MyAddress from Header.jsx
function App() {
  return (
    <div className="App">
        <h1>React with Prince</h1>
        <Header/>
        <MyAddress/>
       
    </div>
  );
}


//default exports
export default App;
