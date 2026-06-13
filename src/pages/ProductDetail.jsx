import { useParams, useNavigate } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import { useState, useEffect } from "react";

const StarRating = ({ rating, idPrefix }) => {
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
                        <svg key={i} className="star-icon filled" viewBox="0 0 24 24" width="16" height="16">
                            <path fill="#FFA41C" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                    );
                } else if (index === fullStars + 1 && hasHalfStar) {
                    return (
                        <svg key={i} className="star-icon half-filled" viewBox="0 0 24 24" width="16" height="16">
                            <defs>
                                <linearGradient id={`halfGrad-${idPrefix}`}>
                                    <stop offset="50%" stopColor="#FFA41C" />
                                    <stop offset="50%" stopColor="#E5E7EB" />
                                </linearGradient>
                            </defs>
                            <path fill={`url(#halfGrad-${idPrefix})`} d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                    );
                } else {
                    return (
                        <svg key={i} className="star-icon empty" viewBox="0 0 24 24" width="16" height="16">
                            <path fill="#E5E7EB" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                    );
                }
            })}
        </div>
    );
};

const ProductDetail = () => {
    const { id } = useParams()
    const { products } = useProductContext()
    const navigate = useNavigate()

    const [product, setProduct] = useState(null)
    const [selectedImage, setSelectedImage] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const found = products.find((p) => p.id === Number(id))
        if (found) {
            setProduct(found)
            setLoading(false)
        } else {
            const fetchProduct = async () => {
                try {
                    setLoading(true)
                    const res = await fetch(`https://dummyjson.com/products/${id}`)
                    const data = await res.json()
                    setProduct(data)
                } catch (err) {
                    console.error("Failed to fetch product detail", err)
                } finally {
                    setLoading(false)
                }
            }
            fetchProduct()
        }
    }, [id, products])

    useEffect(() => {
        if (product) {
            const imgs = product.images?.length
                ? product.images
                : [product.thumbnail]

            setSelectedImage(imgs[0] || null)
        }
    }, [product])

    if (loading) {
        return <div className="loading-overlay">Loading...</div>
    }

    if (!product) {
        return <h2 className="error">Product not found</h2>
    }

    return (
        <div className="product-detail-page">
            <button className="back-btn" onClick={() => navigate(-1)}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                <span>Back</span>
            </button>

            <div className="detail-container">
                {/* LEFT: Image */}
                <div className="image-section">
                    <img src={selectedImage} className="main-image" alt={product.title} />
                </div>

                {/* RIGHT: Info */}
                <div className="info">
                    <h2 className="detail-title">{product.title}</h2>
                    
                    <div className="detail-price-rating-row">
                        <span className="detail-price">${Math.round(product.price)}</span>
                        <div className="detail-rating-wrapper">
                            <StarRating rating={product.rating} idPrefix="detail" />
                            <span className="detail-rating-value">({product.rating.toFixed(1)})</span>
                        </div>
                    </div>

                    <div className="detail-metadata">
                        <p><strong>Brand:</strong> <span className="meta-value">{product.brand || 'N/A'}</span></p>
                        <p><strong>Category:</strong> <span className="meta-value">{product.category}</span></p>
                    </div>

                    <hr className="detail-divider" />

                    <div className="detail-section">
                        <h4 className="detail-section-title">Description</h4>
                        <p className="detail-description-text">{product.description}</p>
                    </div>

                    <hr className="detail-divider" />

                    <div className="detail-section">
                        <h4 className="detail-section-title">Reviews</h4>
                        <div className="reviews-list">
                            {product.reviews && product.reviews.length > 0 ? (
                                product.reviews.map((rev, index) => (
                                    <div key={index} className="review-item">
                                        <div className="review-header">
                                            <span className="reviewer-name">{rev.reviewerName}</span>
                                            <div className="review-rating">
                                                <StarRating rating={rev.rating} idPrefix={`rev-${index}`} />
                                                <span className="review-rating-value">({rev.rating.toFixed(1)})</span>
                                            </div>
                                        </div>
                                        <p className="reviewer-comment">{rev.comment}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="no-reviews">No reviews for this product yet.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail