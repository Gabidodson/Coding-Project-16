//Create the ProductList Component
import ProductItem from './ProductItem'
function ProductList ({products}) {
    return(
        <div className = "product list">
            {products.map(product =>(
                //Implement keys
                <ProductItem key={product.id} product={product}/>
            ))}
        </div>
    )
}
export default ProductList