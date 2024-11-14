//Create the ProductList Component
import ProductItem from './ProductItem'
function ProductList ({products}) {
    return(
        <div className = "product list">
            {products.map(product =>(
                <ProductItem product = {product}/>
            ))}
        </div>
    )
}
export default ProductList