import axios from 'axios';


export const getProducts = async (limit = 12, skip = 0) => {
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
    return res.json()
}

export const getCategories = async () => {
    const res = await fetch(`https://dummyjson.com/products/categories`)
    return res.json()
}

export const getProductsByCategory = async (category, limit = 12, skip = 0) => {
    const res = await fetch(`https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`)
    return res.json()
}

export const searchProducts = async (query, limit = 12, skip = 0) => {
    const res = await fetch(`https://dummyjson.com/products/search?q=${query}&limit=${limit}&skip=${skip}`)
    return res.json()
}