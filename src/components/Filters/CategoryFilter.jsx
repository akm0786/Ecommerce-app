import { useEffect, useState } from 'react'
import { getCategories } from '../../api/productApi'
import { useProductContext } from '../../context/ProductContext'

const CategoryFilter = ({ filterSearch = "" }) => {
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

    const filteredCategories = categories.filter(cat => 
        cat.name.toLowerCase().includes(filterSearch.toLowerCase())
    )

    return (
        <div className="filter-section">
            <h4 className="filter-title">Categories</h4>
            <div className="filter-options-list">
                {filteredCategories.map(cat => (
                    <label key={cat.slug} className="filter-checkbox-label">
                        <input
                            type="checkbox"
                            checked={filters.category === cat.slug}
                            onChange={() => handleChange(cat.slug)}
                            className="filter-checkbox"
                        />
                        <span className="checkbox-custom"></span>
                        <span className="filter-label-text">{cat.name}</span>
                    </label>
                ))}
                {filteredCategories.length === 0 && (
                    <p className="no-filter-options">No categories found</p>
                )}
            </div>
        </div>
    )
}


export default CategoryFilter
