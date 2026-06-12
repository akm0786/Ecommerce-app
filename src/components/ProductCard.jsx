import { useNavigate } from "react-router-dom"

const StarRating = ({ rating, productId }) => {
    const fullStars = Math.floor(rating);
    const decimal = rating % 1;
    const hasHalfStar = decimal >= 0.25 && decimal < 0.75;
    const extraFullStar = decimal >= 0.75 ? 1 : 0;
    
    return (
        <div className="star-rating">
            {[...Array(5)].map((_, i) => {
                const index = i + 1;
                if (index <= fullStars + extraFullStar) {
                    return (
                        <svg key={i} className="star-icon filled" viewBox="0 0 24 24">
                            <path fill="#FFA41C" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                    );
                } else if (index === fullStars + 1 && hasHalfStar) {
                    return (
                        <svg key={i} className="star-icon half-filled" viewBox="0 0 24 24">
                            <defs>
                                <linearGradient id={`halfGrad-${productId}`}>
                                    <stop offset="50%" stopColor="#FFA41C" />
                                    <stop offset="50%" stopColor="#E5E7EB" />
                                </linearGradient>
                            </defs>
                            <path fill={`url(#halfGrad-${productId})`} d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                    );
                } else {
                    return (
                        <svg key={i} className="star-icon empty" viewBox="0 0 24 24">
                            <path fill="#E5E7EB" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                    );
                }
            })}
        </div>
    );
};

const ProductCard = ({ product }) => {
    const navigate = useNavigate()

    return (
        <div
            className="product-card"
            onClick={() => navigate(`/product/${product.id}`)}
        >
            <div className="product-image-container">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="product-image"
                />
            </div>

            <div className="product-details-container">
                <h3 className="product-title">{product.title}</h3>
                
                <div className="product-meta-row">
                    <span className="product-price">${Math.round(product.price)}</span>
                    <div className="product-rating-wrapper">
                        <StarRating rating={product.rating} productId={product.id} />
                        <span className="product-rating-value">({product.rating.toFixed(1)})</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard