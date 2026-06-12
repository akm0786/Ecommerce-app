import { useProductContext } from "../../context/ProductContext"


const BrandFilter = ({ filterSearch = "" }) => {
    const { products, filters, setFilters } = useProductContext()

    const brands = [...new Set(products.map(product => product.brand).filter(Boolean))]

    const handleChange = (brand) => {

        let updated = [...filters.brands]

        if (updated.includes(brand)) {
            updated = updated.filter(b => b !== brand)
        } else {
            updated.push(brand)
        }

        setFilters(prev => ({
            ...prev,
            brands: updated
        }))

    }

    const filteredBrands = brands.filter(brand => 
        brand.toLowerCase().includes(filterSearch.toLowerCase())
    )

    return (
        <div className="filter-section">
            <h4 className="filter-title">Brands</h4>

            <div className="filter-options-list">
                {
                    filteredBrands.map(brand => (
                        <label key={brand} className="filter-checkbox-label">
                            <input
                                type="checkbox"
                                checked={filters.brands.includes(brand)}
                                onChange={() => handleChange(brand)}
                                className="filter-checkbox"
                            />
                            <span className="checkbox-custom"></span>
                            <span className="filter-label-text">{brand}</span>
                        </label>
                    ))
                }
                {filteredBrands.length === 0 && (
                    <p className="no-filter-options">No brands found</p>
                )}
            </div>
        </div>
    )
}
export default BrandFilter