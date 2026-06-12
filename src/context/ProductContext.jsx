import { useState, useContext, createContext } from 'react'

const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([])

    const [filters, setFilters] = useState({
        category: "",
        brands: [],
        minPrice: "",
        maxPrice: "",
    })

    const [tempPrice, setTempPrice] = useState({
        min: "",
        max: ""
    })

    const [page, setPage] = useState(1)
    const limit = 12

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    return (
        <ProductContext.Provider value={{
            products,
            setProducts,

            filters,
            setFilters,
            tempPrice,
            setTempPrice,

            page,
            setPage,
            limit,


            loading,
            setLoading,
            error,
            setError
        }}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProductContext = () => useContext(ProductContext)