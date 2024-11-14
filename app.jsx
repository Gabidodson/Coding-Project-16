//Create the App Component
import {useState} from 'react'
import ProductList from './components/ProductList'
import AddProductForm from './components/AddProductForm'

//products for the app
function App (){
    const [products, setProducts]= useState([
        {
            id:1,
            name:"AirFryer",
            price: 59.99,
            description: "Premium AirFryer"
        },
        {
            id:2,
            name:"Drone",
            price: 999.00,
            description: "New innovative Drone"
        },
        {
            id:3,
            name:"Go Pro",
            price:400.00,
            description: "Waterproof Camera"

        }
    ])
    //Pass Data Between Components
    const addProduct =(newProduct)=>{
        const productWithId={
            ...newProduct,
            id: Date.now()
        }
    }
    return (
        <div>
            <h1>App Product Dashboard</h1>
            <AddProductForm addProduct={addProduct}/>
            <ProductList products={products}/>
        </div>
    )
}
export default App
