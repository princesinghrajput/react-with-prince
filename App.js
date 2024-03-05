import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./Heading";  //Importing from Heading
/*
const container = React.createElement(
  "div",
  {
    id: "container"

  },
  [
    React.createElement(
      "h1",
      {
        id:"heading1"
      },
      "Heading 1"
    )
  ],
  [
    React.createElement(
      "h2",
      {
        id:"heading2"
      },
      "Heading 2"
    )
  ],
  [
    React.createElement(
      "p",
      {
        id:"paragraph"
      },
      "Paragraph"
    )
  ]

  )

  */

//JSX-- Class Based Components
const container = (
  <div id="container">
    <h1 id="heading1">Heading 1</h1>
    <h2 id="heading2">Heading 2</h2>
    <p id="paragraph">Paragraph</p>
    <h3>ndkjnkjs</h3>
  </div>
);



//Functional components

const Title = () => {
  return (
    <div>
      <h1 className="heading1">I am the Title!</h1>
      
      <Heading/>      {/* Imported Components */}

      
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Title />);

