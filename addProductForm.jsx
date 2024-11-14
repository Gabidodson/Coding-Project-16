//Create the AddProductForm Component
import {useState} from 'react'

function AddProductForm({addProduct}){
    const[formData, setFormData] = useState({
        name:'',
        price:'',
        description:'' 
    })
    //handle submission
    const handleSubmit =(e)=>{
        e.preventDefault()
        addProduct({
            ...formData,
            price: Number(formData.price)
        })
        //reset form fields
        setFormData({
            name:'',
            price:'',
            description:''
        })
    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='Product Name'
            required
/>
<input
//price
type="text"
name="price"
value={formData.price}
onChange={handleChange}
placeholder="Price"
min="0"
step="0.01"
required/>


<textarea
name="description"
value={formData.description}
onChange={handleChange}
placeholder="description"
required/>

<button type="submit">Add a Product</button>
        </form>
    )
}
export default AddProductForm