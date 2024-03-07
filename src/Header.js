import React from "react";
import Style from "./Header.module.css";
const Header = () => {
  let message = "Hello world";

  return (
    <div className={Style.Title}>
      <h1> message is : {message} </h1>  {/* You can write JavaScript code inside curly braces {} in the JSX */}
    </div>
  );
};

export default Header;
