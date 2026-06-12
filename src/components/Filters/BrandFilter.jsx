import { useProductContext } from "../../context/ProductContext"


const BrandFilter = () => {
    const { products, filters, setFilters } = useProductContext()

    const brands = [...new Set(products.map(product => product.brand))]

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
    return (
        <div className="filter-section">
            <h3>Brand</h3>

            {
                brands.map(brand => (
                    <label key={brand}>
                        <input
                            type="checkbox"
                            checked={filters.brands.includes(brand)}
                            onChange={() => handleChange(brand)}
                        />
                        {brand}
                    </label>
                ))
            }
        </div>
    )
}
export default BrandFilter