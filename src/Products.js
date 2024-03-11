import React from "react";
import './Products.css'
 const Products =({title, descriptions, price, feature})=>{

   
    return(
       <div className="Products">
        <h1>{title}</h1>
        <h3>{descriptions}</h3>
        <p>Price: {price}</p>
        <p>Features: {feature}</p>
        <p>Discounts: {price>10000 ? "5%": "No Discounts"}</p>
       </div>
    )
}

export default Products;