import { useProductContext } from "../context/ProductContext"

const Header = () => {
    const { filters, setFilters, setShowSidebar } = useProductContext()

    const handleSearch = (e) => {
        setFilters((prev) => ({
            ...prev,
            search: e.target.value
        }))
    }

    return (
        <header className="header">
            <div className="header-left">
                <button 
                    className="menu-btn" 
                    onClick={() => setShowSidebar(prev => !prev)} 
                    aria-label="Toggle Filters"
                >
                    <svg viewBox="0 0 24 24" width="22" height="22">
                        <path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                    </svg>
                </button>
            </div>

            <div className="header-center">
                <div className="search-wrapper">
                    <svg className="search-icon" viewBox="0 0 24 24" width="18" height="18">
                        <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={filters.search || ""}
                        onChange={handleSearch}
                    />
                </div>
            </div>

            <div className="header-right">
                <button className="header-icon-btn" aria-label="Cart">
                    <svg viewBox="0 0 24 24" width="22" height="22">
                        <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                </button>
                <button className="header-icon-btn" aria-label="History">
                    <svg viewBox="0 0 24 24" width="22" height="22">
                        <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                </button>
                <button className="header-icon-btn" aria-label="Profile">
                    <svg viewBox="0 0 24 24" width="22" height="22">
                        <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                </button>
            </div>
        </header>
    )
}

export default Header