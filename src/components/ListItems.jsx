import { getAllItems, getAllCategories } from "../Utils/utils";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function ListItems() {
  const [allItems, setAllItems] = useState([]);
  const [category, setCategory] = useState(null);
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    getAllItems(category)
      .then((response) => {
        setAllItems(response);
      })
      .then(() => getAllCategories())
      .then((cat) => {
        setAllCategories(cat);
      });
  }, [category]);

  function selectCategory(event) {
    setCategory(event.target.value);
  }

  return (
    <>
      <label htmlFor="allCategories">Select Category:</label>
      <select name="allCategories" id="allCategories" onChange={selectCategory}>
        <option value={null}>All</option>
        {allCategories.map((category) => {
          return (
            <option value={category.category_name} key={category.category_name}>
              {category.category_name}{" "}
            </option>
          );
        })}
      </select>
      <ul>
        {allItems.map((item) => {
          return (
            <li key={item.item_id}>
              <p>{`Item: ${item.item_name}`}</p>
              <p>{`Description: ${item.description}`}</p>
              <p>
                {`Image_url: `}
                <a href={item.img_url}>Link to Picture</a>
              </p>
              <p>{`Price: ${item.price}`}</p>
              <p>{`Category: ${item.category_name}`}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
