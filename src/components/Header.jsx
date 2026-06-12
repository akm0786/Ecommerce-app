import { useProductContext } from "../context/ProductContext"

const Header = () => {
    const { filters, setFilters } = useProductContext()

    const handleSearch = (e) => {
        setFilters((prev) => ({
            ...prev,
            search: e.target.value
        }))
    }

    return (
        <header className="header">
            <h2>Shop</h2>

            <input
                type="text"
                placeholder="Search products..."
                value={filters.search || ""}
                onChange={handleSearch}
            />
        </header>
    )
}

export default Header