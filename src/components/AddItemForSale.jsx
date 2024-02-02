
import { useState } from "react"
import { postItemForSale } from "../Utils/utils"

export default function AddItemForSale() {
const [itemName, setItemName] = useState("")
const [description, setDescription] = useState("")
const [imgURL, setImageURL] = useState("")
const [price, setPrice] = useState("")
const [categoryName, setCategoryName] = useState("")
const [error, setError] = useState(null)
const [isError, setIsError] = useState(false)

function textInput(event){
    if(event.target.id === "item_name"){
        setItemName(event.target.value)
    }if(event.target.id === "description"){
        setDescription(event.target.value)
    }if(event.target.id === "img_url"){
        setImageURL(event.target.value)
    }if(event.target.id === "price"){
        setPrice(event.target.value)
    }if(event.target.id === "category_name"){
        setCategoryName(event.target.value)
    }
}

const onClickHandler = ((event) => {
    event.preventDefault()
    console.log(event.target)
    const postObject = {item_name : itemName, description: description, img_url: imgURL, price : price, category_name : categoryName}
    setItemName("")
    setDescription("")
    setImageURL("")
    setPrice("")
    setCategoryName("")
    console.log(postObject)
    postItemForSale(postObject).catch((error) => {
        console.dir(error)
        setIsError(true)
        setError(error.message)
    })
})

    return (
        <>
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
            <button type="submit" id="submit" onClick={onClickHandler}>Sell Item</button> 
           </fieldset>
        </form>
        {isError ? <Error error={error}/> : null }
        </>
    )
}

