import { useProductContext } from "../context/ProductContext"
import ProductCard from "./ProductCard"


const ProductGrid = () => {
    const { products, filters } = useProductContext()

    const filteredProducts = products.filter(product => {
        // category filter
        if (filters.category && product.category !== filters.category) {
            return false
        }

        //brand filter
        if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
            return false
        }

        //price filter
        if (filters.minPrice && product.price < filters.minPrice) {
            return false

        }
        if (filters.maxPrice && product.price > filters.maxPrice) {
            return false
        }

        //search filter

        if (filters.search) {
            const searchTerm = filters.search.toLowerCase()
            const titleMatch = product.title ? product.title.toLowerCase().includes(searchTerm) : false
            const brandMatch = product.brand ? product.brand.toLowerCase().includes(searchTerm) : false
            const categoryMatch = product.category ? product.category.toLowerCase().includes(searchTerm) : false

            if (!titleMatch && !brandMatch && !categoryMatch) {
                return false
            }
        }


        return true;

    })

    if (filteredProducts.length === 0) {
        return <p>No products found</p>
    }

    return (
        <div className="product-grid">
            {
                filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))
            }
        </div>
    )
}

export default ProductGrid