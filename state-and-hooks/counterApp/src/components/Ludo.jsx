import { useState } from "react";

const Ludo = () => {


  let [move, setMove] = useState({
    redMove: 0,
    greenMove: 0,
    yellowMove: 0,
    blueMove: 0,
  });

  let [arr, setArr] = useState(["No Move"])

  console.log(move)

  let handleRedMove = () => {
    // // console.log(`RedMove: ${move.redMove}`)
    setMove((prevRedMove) => {
      return {
        ...prevRedMove,
        redMove: prevRedMove.redMove + 1,
      };
    });

    setArr((prevArr) => {
      return [
     ...prevArr,"Red Moved"
      ];
    })

  };

  let handleGreenMove = () => {
    setMove((prevGreenMove) => {
      return {
        ...prevGreenMove,
        greenMove: prevGreenMove.greenMove + 1,
      };
    });
  };

  let handleYellowMove = () => {
    setMove((prevYellowMove) => {
      return {
        ...prevYellowMove,
        yellowMove: prevYellowMove.yellowMove + 1,
      };
    });
  };

  let handleBlueMove = ()=>{
    setMove((prevBlueMove)=>{
      return {
     ...prevBlueMove,
        blueMove: prevBlueMove.blueMove + 1
      }
    })
  }

  return (
    <div>
      <div>
        <h3>Just start the Game.....</h3>
        <p className="mt-5">Red Moves: {move.redMove}</p>
        <p>{arr}</p>
        <button onClick={handleRedMove} className="bg-red-600">
          +1
        </button>
        <p className="mt-5">Green Moves: {move.greenMove}</p>
        <button onClick={handleGreenMove} className="bg-green-700">
          +1
        </button>
        <p className="mt-5">Yellow Moves: {move.yellowMove}</p>
        <button onClick={handleYellowMove} className="bg-yellow-700">
          +1
        </button>
        <p className="mt-5">Blue Moves: {move.blueMove}</p>
        <button onClick={handleBlueMove} className="bg-blue-700">+1</button>
      </div>
    </div>
  );
};

export default Ludo;
