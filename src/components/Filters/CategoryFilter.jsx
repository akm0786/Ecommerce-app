import { useEffect, useState } from 'react'
import { getCategories } from '../../api/productApi'
import { useProductContext } from '../../context/ProductContext'

const CategoryFilter = () => {
    const [categories, setCategories] = useState([])
    const { filters, setFilters, setPage } = useProductContext()

    useEffect(() => {
        const fetchCategories = async () => {
            const data = await getCategories()
            setCategories(data)
        }

        fetchCategories()
    }, [])

    const handleChange = (categorySlug) => {
        setFilters(prev => ({
            ...prev,
            category: prev.category === categorySlug ? "" : categorySlug
        }))

        // Resetting to page 1 whenever category changes            
        setPage(1) 
    }

    return (
        <div className="filter-section">
            <h4>Categories</h4>

            {categories.map(cat => (
                <label key={cat.slug}>
                    <input
                        type="checkbox"
                        checked={filters.category === cat.slug}
                        onChange={() => handleChange(cat.slug)}
                    />
                    {cat.name}
                </label>
            ))}
        </div>
    )
}

export default CategoryFilter
