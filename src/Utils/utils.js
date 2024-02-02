import axios from 'axios'

const ncMarketplaceAPI = axios.create({
    baseURL:'https://nc-marketplace-sem-3.onrender.com/api/'
})

export function getAllItems(category) {
    return ncMarketplaceAPI.get("/items", {params: {category_name: category}}).then((response) => {
        return response.data.items
    })
}

export function getAllCategories() {
    return ncMarketplaceAPI.get("/categories").then((response) => {
        return response.data.categories
    })
}


