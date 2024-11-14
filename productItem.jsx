//Create the ProductItem Component
function ProductItem ({product}) {
    return(
        <div className="product-item">
            <h3>{product.name}</h3>
            <p>Price:${product.price}</p>
            <p>{product.description}</p>

        </div>
    )
}
export default ProductItem