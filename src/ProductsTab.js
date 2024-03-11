import React from "react";
import Products from "./Products";

const ProductsTab= ()=>{
  let option = [<l1>Hi Tech</l1>, <l1>Durable</l1>, <li>Effiecient</li>]   //array

  // let option = {a:"Hi-Tech", b:"Durable", c:"Efficient"} //objects
  
  return(
    <>
      <Products title="laptop" descriptions="This laptop is very fast" price={10000} feature={option} />
      <Products title="Mobile" descriptions="Buy this mobile at low cost" price={5000}  />
      <Products title="iPad" descriptions="Good for taking notes" price={40000} />
      
    </>
  )
} 

export default ProductsTab