import React from "react";
import Products from "./Products";
import "./ProductsTab.css";
const ProductsTab = () => {
  return (
    <div className="ProductsTab">
     
     {/* writing Property inside components */}
      <Products productTitle="Laptop" descriptions="This laptop is good for development" price="50k" />
      <Products productTitle="mobile" descriptions="Buy this super smartphone now" price="30k"/>
      <Products productTitle="iPad" descriptions="Good iphone" price="40k"/>
      <Products productTitle="Pen" descriptions="Good Pen" price="20"/>
    </div>
  );  
};

export default ProductsTab;
