import { useState } from "react";

const LikeButton = () => {
  let [isLiked, setIsLiked] = useState(false);
  let [count, setCount] = useState(0)

  function handleLike() {
    setIsLiked(!isLiked);
    setCount(count+1)
    console.log(isLiked)
  }

  return (
    <div>
      <h1 className="text-xl">Like Button</h1>
      <p>Count: {count}</p>
      <p className="text-center" onClick={handleLike}>
      {isLiked ? <i className="fa-regular fa-heart"></i> : <i style={{color:"red"}} className="fa-solid fa-heart"></i>}
      </p>
    </div>
  );
};

export default LikeButton;
