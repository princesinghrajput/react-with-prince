import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement(
  "h1",
  {
    id:"header",
    className:"header"
  },
  "I am the Header!"
  )


  const root = ReactDOM.createRoot(document.getElementById("root"))
  root.render(heading)











































/*
  
  [
    React.createElement(
      "h1",
      {
        id:"head",
        className:"h"
      },
      "React with Prince singh"
    ),
    React.createElement(
      "h3",
      {
        id:'heading-3'
      },
      "I am Heading 3"

    )
  ]
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)

*/