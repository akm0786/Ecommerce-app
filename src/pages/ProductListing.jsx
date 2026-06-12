import { useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../api/productApi'
import { useProductContext } from '../context/ProductContext'
import Filters from '../components/Filters/Filters'
import ProductGrid from '../components/ProductGrid'
import Pagination from '../components/Pagination'

const ProductListing = () => {
    const {
        setProducts,
        filters,
        page,
        limit,
        loading,
        setLoading,
        error,
        setError
    } = useProductContext()

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)

                let data

                if (filters.category) {
                    data = await getProductsByCategory(filters.category)
                } else {
                    const skip = (page - 1) * limit
                    data = await getProducts(limit, skip)
                }

                setProducts(data.products)

            } catch (err) {
                setError("Failed to fetch products")
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [filters.category, page])

    return (
        <div className="container">
            <h1 className="title">Products</h1>

            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}

            <div className="layout">
                <aside className="sidebar">
                    <Filters />
                </aside>

                <main className="content">
                    <ProductGrid />
                    <Pagination />
                </main>
            </div>
        </div>
    )
}

export default ProductListing