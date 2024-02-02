
import { useState } from "react"

export default function AddItemForSale() {
const [itemName, setItemName] = useState("")
const [description, setDescription] = useState("")
const [imgURL, setImageURL] = useState("")
const [price, setPrice] = useState("")
const [categoryName, setCategoryName] = useState("")

function textInput(event){
    console.log(event.target)

        if(event.target.id === "item_name"){
            setItemName(event.target.id)
        }
    }
    



    return (
        <form>
            <fieldset>
            <label htmlFor="item_name" >Item Name: </label>
            <input id="item_name" type="text" value= {itemName} onChange={textInput} required></input>
            <label htmlFor="description" >Description: </label>
            <input id="description" type="text" value={description} onChange={textInput} required></input>
            <label htmlFor="img_url">Image URL: </label>
            <input id="img_url" type="text" value= {imgURL} onChange={textInput} required></input>
            <label htmlFor="price">Price: </label>
            <input id="price" type="number" value= {price} onChange={textInput} required></input> 
            <label htmlFor="category_name">Category: </label>
            <input id="category_name" type="text" value= {categoryName} onChange={textInput} required></input>
            <button type="submit" id="submit">Sell Item</button> 
           </fieldset>
        </form>
    )
}

