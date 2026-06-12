import { useProductContext } from "../context/ProductContext"


const Pagination = () => {
    const { page, setPage } = useProductContext()

    return (
        <div className="pagination">
            {/* previous button */}
            <button onClick={() => setPage(prev => Math.max(prev - 1, 1))} disabled={page === 1}>
                ← Previous
            </button>

            {/* page numbers */}
            {[1, 2, 3, 4, 5].map(num => (
                <button
                    key={num}
                    className={num === page ? "active" : ""}
                    onClick={() => setPage(num)}
                >
                    {num}
                </button>
            ))}

            {/* next button */}
            <button onClick={() => setPage(prev => prev + 1)}>
                Next →
            </button>
        </div>

    )
}

export default Pagination