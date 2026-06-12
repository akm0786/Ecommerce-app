import { useProductContext } from "../context/ProductContext"

const Pagination = () => {
    const { page, setPage } = useProductContext()

    return (
        <div className="pagination">
            {/* previous button */}
            <button 
                className="pagination-btn" 
                onClick={() => setPage(prev => Math.max(prev - 1, 1))} 
                disabled={page === 1}
            >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Previous
            </button>

            {/* page numbers */}
            {[1, 2, 3, 4, 5].map(num => (
                <button
                    key={num}
                    className={`pagination-num-btn ${num === page ? "active" : ""}`}
                    onClick={() => setPage(num)}
                >
                    {num}
                </button>
            ))}

            {/* next button */}
            <button 
                className="pagination-btn" 
                onClick={() => setPage(prev => prev + 1)}
            >
                Next
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </button>
        </div>
    )
}

export default Pagination