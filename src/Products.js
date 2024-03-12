import React from "react";
import './Products.css'
 const Products =({title, descriptions, price, feature, option})=>{
   let isDiscount=price>5000

   let styles ={
      backgroundColor:"red",
   }

   
    return(
       <div  className="Products">
        <h1 style={{backgroundColor:"red"}} >{title}</h1>
        <h3>{descriptions}</h3>
        <p>Price: {price}</p>
        <p>Features: {feature}</p>
        {isDiscount?<p style={styles}>Discount: 10%</p>: null}
        <p>OPtions: {option}</p>
       </div>
    )
}

export default Products;