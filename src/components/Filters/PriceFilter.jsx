import { useProductContext } from "../../context/ProductContext"

const PriceFilter = () => {
    const { filters, setFilters, setPage } = useProductContext()

    const handleChange = (key, value) => {
        setFilters(prev => ({
            ...prev,
            [key]: value
        }))

        setPage(1) // ✅ required: reset pagination
    }

    return (
        <div className="filter-section">
            <h4>Price Range</h4>

            <input
                type="number"
                placeholder="Min"
                value={filters.minPrice}
                onChange={(e) => handleChange("minPrice", e.target.value)}
            />

            <input
                type="number"
                placeholder="Max"
                value={filters.maxPrice}
                onChange={(e) => handleChange("maxPrice", e.target.value)}
            />
        </div>
    )
}

export default PriceFilter