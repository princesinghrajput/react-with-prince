import { useState } from "react";

const Ludo = () => {
    let [move, setMove] = useState({redMove:0, greenMove:0, yellowMove:0, blueMove:0});
    // console.log(`RedMove: ${move.redMove}`)

   let handleRedMove = () =>{
    console.log(`RedMove: ${move.redMove}`)
    setMove((prevRedMove)=>{
        return {
         ...prevRedMove,
            redMove: prevRedMove.redMove + 1
        }
    })

    ;
   }


   let handleGreenMove = ()=>{
    setMove((prevGreenMove)=>{
        return{
            ...prevGreenMove,
             greenMove: prevGreenMove.greenMove + 1
        }
    })
   }


  return (
    <div>
      <div>
        <h3>Just start the Game.....</h3>
        <p className="mt-5">Red Moves: {move.redMove}</p>
        <button onClick={handleRedMove} className="bg-red-600">+1</button>
        <p className="mt-5">Green Moves: {move.greenMove}</p>
        <button onClick={handleGreenMove} className="bg-green-700">+1</button>
        <p className="mt-5">Yellow Moves: 0</p>
        <button className="bg-yellow-700">+1</button>
        <p className="mt-5">Blue Moves: 0</p>
        <button  className="bg-blue-700">+1</button>
      </div>
    </div>
  );
};

export default Ludo;
