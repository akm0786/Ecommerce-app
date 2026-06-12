import { useProductContext } from "../../context/ProductContext"

const PriceFilter = () => {
    const { tempPrice, setTempPrice, setFilters, setPage } = useProductContext()

    const handleChange = (key, value) => {
        setTempPrice(prev => ({
            ...prev,
            [key]: value
        }))
    }

    const handleApply = () => {
        setFilters(prev => ({
            ...prev,
            minPrice: tempPrice.min,
            maxPrice: tempPrice.max
        }))
        setPage(1)
    }

    return (
        <div className="filter-section price-filter-section">
            <h4 className="filter-title">Price Range</h4>

            <div className="price-inputs-row">
                <input
                    type="number"
                    placeholder="Min"
                    value={tempPrice.min || ""}
                    onChange={(e) => handleChange("min", e.target.value)}
                    className="price-input"
                />
                <input
                    type="number"
                    placeholder="Max"
                    value={tempPrice.max || ""}
                    onChange={(e) => handleChange("max", e.target.value)}
                    className="price-input"
                />
            </div>

            <button className="apply-btn" onClick={handleApply}>
                Apply
            </button>
        </div>
    )
}

export default PriceFilter