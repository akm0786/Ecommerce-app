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
        setError,
        showSidebar,
        setShowSidebar
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
            {loading && <div className="loading-overlay">Loading...</div>}
            {error && <p className="error">{error}</p>}

            <div className={`layout ${showSidebar ? 'with-sidebar' : 'without-sidebar'}`}>
                {showSidebar && (
                    <aside className="sidebar">
                        <Filters />
                    </aside>
                )}

                <main className="content">
                    <div className="content-header">
                        <button className="filters-toggle-text-btn" onClick={() => setShowSidebar(prev => !prev)}>
                            <svg className="filter-icon" viewBox="0 0 24 24" width="18" height="18">
                                <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>
                            </svg>
                            <span>Filters</span>
                        </button>
                    </div>
                    
                    <ProductGrid />
                    <Pagination />
                </main>
            </div>
        </div>
    )
}

export default ProductListing