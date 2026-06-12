import { useState } from "react"
import CategoryFilter from "./CategoryFilter"
import PriceFilter from "./PriceFilter"
import BrandFilter from "./BrandFilter"

const Filters = () => {
    const [searchTerm, setSearchTerm] = useState("")

    return (
        <div className="filters-container">
            <div className="filters-header">
                <svg className="search-icon" viewBox="0 0 24 24" width="16" height="16">
                    <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
                <h3>Filters</h3>
            </div>

            <div className="filter-search-wrapper">
                <svg className="filter-search-icon" viewBox="0 0 24 24" width="14" height="14">
                    <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="filter-search-input"
                />
            </div>

            <CategoryFilter filterSearch={searchTerm} />
            <PriceFilter />
            <BrandFilter filterSearch={searchTerm} />
        </div>
    )
}

export default Filters