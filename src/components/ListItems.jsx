import {getAllItems, getAllCategories} from "../Utils/utils"
import { useEffect } from "react"
import { useState } from "react"

export default function ListItems(){

    const [allItems, setAllItems] = useState([])
    const [category, setCategory] = useState(null)
    const [allCategories, setAllCategories] = useState([])
    
    useEffect(() => {
        getAllItems().then((response) => {
            setAllItems(response)
        }).then(() => 
            getAllCategories()).then((cat) => {
            console.log(cat)
            setAllCategories(cat)
        })    
    }, [])
    
    return (
        <ul>
            {console.log(allCategories)}
        {allItems.map((item) => {
            return <li key ={item.item_id}>
                <p>{`Item: ${item.item_name}`}</p>
                <p>{`Description: ${item.description}`}</p>
                <p>{`Image_url: `}<a href= {item.img_url}>Link to Picture</a></p>
                <p>{`Price: ${item.price}`}</p>
                <p>{`Category: ${item.category_name}`}</p>
            </li>
        })}
    </ul>)
}