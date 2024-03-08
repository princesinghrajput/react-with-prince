import './Products.css'
//Accessing props objects ddirectly inside using {}
function Products ({productTitle, descriptions, price="60k"}){

    return(
        <div className="Products">
            <h1>{productTitle}</h1>
            <h3>{descriptions}</h3>
            <p>Price:{price} </p>
        </div>
    )
}

export default Products;