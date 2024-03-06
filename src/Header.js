import React from "react";

function Header() {
    return (
        <div className="Header">
            <h1>My name is Prince</h1>
        </div>
    )
    
}

function MyAddress (){
    return(
        <div>
            <h2>I live in Mohali</h2>
        </div>
    )
}
//named exports
export {Header, MyAddress}



//default exports
// default export Header